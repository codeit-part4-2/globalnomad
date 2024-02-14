import styles from './ReservationDateTimePicker.module.css';
import style from '@/pages/activities/[id]/Activity.module.css';
import Button from '@/components/common/Button/Button';
import MinusIcon from '#/icons/icon-minus.svg';
import PlusIcon from '#/icons/icon-smallPlus.svg';
import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ChangeEvent, useEffect, useState } from 'react';
import ReservationModal from '@/components/Modal/ReservationModal/ReservationModal';
import { Activity, Time, TimeSlot } from '@/types/common/api';
import { Value } from '@/types/Calendar';
import { useQuery } from '@tanstack/react-query';
import instance from '@/api/axiosInstance';

interface ReservationDateTimePickerProps {
  data: Activity;
}
function ReservationDateTimePicker({ data }: ReservationDateTimePickerProps) {
  // 캘린더
  const [dateValue, setDateValue] = useState<Value>(null);
  const [filteredTimes, setFilteredTimes] = useState<Time[]>();

  const selectedYear = String(dayjs(dateValue as Date).format('YYYY'));
  const selectedMonth = String(dayjs(dateValue as Date).format('MM'));

  const { data: monthlyAvailableSchedule } = useQuery<TimeSlot[]>({
    queryKey: ['activity', data.id, selectedYear, selectedMonth],
    queryFn: () =>
      instance.get(`/activities/${data.id}/available-schedule?year=${selectedYear}&month=${selectedMonth}`),
    enabled: !!dateValue,
  });

  // 선택한 날짜의 예약 가능 시간 대를 필터링하기 위한 useEffect

  useEffect(() => {
    if (!dateValue) {
      return;
    }
    if (!monthlyAvailableSchedule) {
      return;
    }
    const formattedValue = dayjs(dateValue as Date).format('YYYY-MM-DD');
    const filteredTimes = monthlyAvailableSchedule.find((slot) => slot.date === formattedValue)?.times;
    setFilteredTimes(filteredTimes);
  }, [dateValue, monthlyAvailableSchedule]);

  // 예약 가능한 시간을 선택한 경우, 선택한 버튼만 초록색이 되게 만들기 위한 state
  const [clickedTimeButtonId, setClickedTimeButtonId] = useState<number | null>(null);

  const handleTimeButtonClick = (id: number | null) => {
    setClickedTimeButtonId(id);
  };

  const handleCalendarDateChange = (value: Value) => {
    setDateValue(value);
    if (clickedTimeButtonId) {
      setClickedTimeButtonId(null);
    }
  };

  const handleCalendarMonthChange = () => {
    setClickedTimeButtonId(null);
    setFilteredTimes([]);
    setDateValue(null);
  };

  // 참여 인원수 인풋과 연결될 value State
  const [participantsValue, setParticipantsValue] = useState(1);

  const handleParticipantsValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParticipantsValue(Number(e.target.value));
  };

  // 초기엔 날짜 선택하기 => 선택한 이후에는 선택한 값으로 보이게 하는 state
  const [dateButtonText, setDateButtonText] = useState('날짜 선택하기');

  // 날짜 및 시간 선택하는 모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  // const reserveMutation = useMutation({
  //   mutationFn: () =>
  //     fetchedData<>({
  //       url: `/activities/${data.id}/reservations`,
  //     }),
  // });
  const handleReserveButtonClick = () => {};

  return (
    <>
      <div className={styles.container}>
        <p className={styles.priceInPerson}>
          ￦{data.price.toLocaleString('ko-KR')}
          <span className={styles.span}>/ 인</span>
        </p>
        <hr className={style.hr} />
        <div className={styles.calendar}>
          <h2 className={style.label}>날짜</h2>
          <button className={styles.selectButton} onClick={handleModalToggle}>
            {dateButtonText}
          </button>

          <Calendar
            prev2Label={null}
            next2Label={null}
            calendarType="gregory"
            locale="en"
            onChange={handleCalendarDateChange}
            className={styles.customCalendar}
            onActiveStartDateChange={handleCalendarMonthChange}
            value={dateValue}
            minDate={new Date()}
          />
        </div>
        <div className={styles.possibleTime}>
          <h2 className={style.label}>예약 가능한 시간</h2>

          <div className={styles.timeButtonContainer}>
            {filteredTimes?.map((time) => (
              <Button
                key={time.id}
                type="time"
                color={time.id === clickedTimeButtonId ? 'green' : 'white'}
                onClick={() => {
                  if (clickedTimeButtonId === time.id) {
                    handleTimeButtonClick(null);
                    return;
                  }
                  handleTimeButtonClick(time.id);
                }}
              >
                {time.startTime}~{time.endTime}
              </Button>
            ))}
          </div>
        </div>
        <hr className={style.hr} />
        <div className={styles.participants}>
          <h2 className={style.label}>참여 인원 수</h2>
          <div className={styles.stepper}>
            <button
              className={styles.minusButton}
              disabled={participantsValue <= 1}
              onClick={() => setParticipantsValue((prev) => prev - 1)}
            >
              <MinusIcon fill="#4B4B4B" alt="참여 인원 수 줄이기 아이콘" />
            </button>
            <input
              className={styles.participantsInput}
              value={participantsValue}
              onChange={handleParticipantsValueChange}
              min={1}
              // 숫자가 아닌 값을 입력할 경우 1로 세팅되게 만듦
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                if (isNaN(+e.target.value)) {
                  e.target.value = String(1);
                }
              }}
            />
            <button onClick={() => setParticipantsValue((prev) => prev + 1)}>
              <PlusIcon alt="참여 인원 수 늘리기 아이콘" />
            </button>
          </div>
        </div>
        <Button
          onClick={handleReserveButtonClick}
          isDisabled={!clickedTimeButtonId || participantsValue === 0}
          color="green"
          type="modalSingle"
        >
          예약하기
        </Button>
        <hr className={style.hr} style={{ marginTop: '0.8rem' }} />
        <div>
          <div className={styles.totalPrice}>
            <h2 className={style.label}>총 합계</h2>
            <p className={style.label}>￦{(data.price * participantsValue).toLocaleString('ko-KR')}</p>
          </div>
        </div>
      </div>

      <div className={styles.mobileSelectBar}>
        <div>
          <p className={styles.pricePerPersonWrapper}>
            ￦{(data.price * participantsValue).toLocaleString('ko-KR')} / {participantsValue}인
          </p>
          <button className={styles.mobileSelectButton} onClick={handleModalToggle}>
            {dateButtonText}
          </button>
        </div>
        <button
          onClick={handleReserveButtonClick}
          className={styles.mobileReserveButton}
          disabled={!clickedTimeButtonId || participantsValue === 0}
        >
          예약하기
        </button>
      </div>

      {isModalOpen && (
        <ReservationModal
          setDateButtonText={setDateButtonText}
          filteredTimes={filteredTimes}
          handleModalToggle={handleModalToggle}
          dateValue={dateValue}
          setDateValue={setDateValue}
          handleTimeButtonClick={handleTimeButtonClick}
          participantsValue={participantsValue}
          setParticipantsValue={setParticipantsValue}
          handleCalendarMonthChange={handleCalendarMonthChange}
          clickedTimeButtonId={clickedTimeButtonId}
        />
      )}
    </>
  );
}

export default ReservationDateTimePicker;
