import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { QueryClient, useQuery } from '@tanstack/react-query';

import { getActivities } from '@/api/activities';
import QUERY_KEYS from '@/constants/queryKeys';
import useInfiniteScroll from '@/hooks/common/useInfiniteScroll';

export const usePopularExperience = (searchResult: string) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const splideRef = useRef(null);
  const [cursorId, setCursorId] = useState<number | null | undefined>();
  const {
    data: popularActivityData,
    refetch,
    isError,
    isFetching,
  } = useQuery({
    queryKey: [QUERY_KEYS.popularActivities],
    queryFn: () => getActivities({ method: 'cursor', sort: 'most_reviewed', size: 4, cursorId }),
  });

  const [cardData, setCardData] = useState(popularActivityData?.activities ?? []);
  const { isVisible, targetRef } = useInfiniteScroll();
  const queryClient = new QueryClient();

  /** 버튼을 통한 slide 함수 */
  const handleSlideByBtn = (num: number) => {
    const newIndex = slideIndex + num;
    if (newIndex < 0 || newIndex + 2 >= cardData.length) return;

    setSlideIndex((prev) => prev + num);
    if (splideRef.current) {
      (splideRef.current as any).go(newIndex);
    }
  };

  useEffect(() => {
    if (cursorId === null) return;
    if (isVisible && !isFetching) refetch();
  }, [isVisible]);

  useEffect(() => {
    setCardData((prev) => [...prev, ...(popularActivityData?.activities ?? [])]);
    setCursorId(popularActivityData?.cursorId);
  }, [popularActivityData]);

  useEffect(() => {
    if (searchResult === '' && !isFetching) refetch();
    else setCardData([]);
  }, [searchResult]);

  /** 에러 관련 useEffect */
  useEffect(() => {
    if (isError) toast.error('데이터를 불러오지 못했습니다.');
  }, [isError]);

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEYS.popularActivities, cursorId],
      queryFn: () => getActivities({ method: 'cursor', sort: 'most_reviewed', size: 4, cursorId }),
    });
  }, [cursorId]);

  console.log('카드 데이터', cardData);
  return { slideIndex, handleSlideByBtn, setSlideIndex, splideRef, targetRef, cardData };
};
