import Header from '@/components/Activities/Header/Header';
import styles from './Activity.module.css';
import MainContent from '@/components/Activities/MainContent/MainContent';
import ReservationDateTimePicker from '@/components/Activities/ReservationDateTimePicker/ReservationDateTimePicker';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { Activity } from '@/types/common/api';
import QUERY_KEYS from '@/constants/queryKeys';
import { getActivityById, getAvailableSchedule } from '@/api/activities';
import dayjs from 'dayjs';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const activityId = Number(context.query['id']);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.activity, activityId],
    queryFn: () => getActivityById({ activityId }),
  });

  const today = new Date();
  const currentYear = dayjs(today).format('YYYY');
  const currentMonth = dayjs(today).format('MM');

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.activity, activityId, currentYear, currentMonth],
    queryFn: () => getAvailableSchedule({ activityId, year: currentYear, month: currentMonth }),
  });
  return { props: { activityId, dehydratedState: dehydrate(queryClient) } };
};

function ActivityID({ activityId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: activityData } = useQuery<Activity>({
    queryKey: [QUERY_KEYS.activity, activityId],
    queryFn: () => getActivityById({ activityId }),
  });

  if (!activityData) return;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <Header data={activityData} />
        <main className={styles.contentContainer}>
          <MainContent data={activityData} />
          <ReservationDateTimePicker data={activityData} />
        </main>
      </div>
    </div>
  );
}

export default ActivityID;
