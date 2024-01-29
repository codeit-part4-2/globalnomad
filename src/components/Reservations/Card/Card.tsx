import Image from 'next/image';
import styles from './Card.module.css';
import clsx from 'clsx';
import formatDateString from '@/utils/formatDateString';
import CancelModal from '@/components/Modal/CancelModal/CancelModal';
import { useState } from 'react';
import ReviewModal from '@/components/Modal/ReviewModal/ReviewModal';
import { Reservations } from '@/types/reservations';
import { STATUS } from '@/constants/reservation';

function Card({ data }: Reservations) {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const handleCancelModalToggle = () => {
    setIsCancelModalOpen((prev) => !prev);
  };

  const handleReviewModalToggle = () => {
    setIsReviewModalOpen((prev) => !prev);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <Image fill src={data.activity.bannerImageUrl} alt="체험 이미지" />
      </div>

      <div className={styles.detailContainer}>
        <p className={clsx(styles.status, styles[data.status])}>{STATUS[data.status]}</p>
        <h2 className={styles.h2}>{data.activity.title}</h2>
        <p className={styles.dateDetail}>
          <span>{formatDateString(data.date)}</span>
          <span>·</span>
          <span>
            {data.startTime} - {data.endTime}
          </span>
          <span>·</span>
          <span>{data.headCount}명</span>
        </p>
        <div className={styles.bottom}>
          <p className={styles.price}>￦{data.totalPrice.toLocaleString('ko-KR')}</p>
          {data.status === 'pending' && (
            <button onClick={handleCancelModalToggle} className={styles.button}>
              예약 취소
            </button>
          )}
          {/* 체험 완료일 때만 후기 작성 버튼 보이고, reviewSubmit이 true면 disabled */}
          {data.status === 'completed' && (
            <button onClick={handleReviewModalToggle} disabled={data.reviewSubmitted} className={styles.button}>
              후기 작성
            </button>
          )}
        </div>
      </div>
      {/* TODO : api 연결 후 handleCancel에 적절한 함수 연결 필요 */}
      {isCancelModalOpen && (
        <CancelModal handleModalClose={handleCancelModalToggle} handleCancel={handleCancelModalToggle} />
      )}
      {isReviewModalOpen && <ReviewModal handleModalClose={handleReviewModalToggle} data={data} />}
    </div>
  );
}
export default Card;
