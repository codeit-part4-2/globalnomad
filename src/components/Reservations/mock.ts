import { CardProps } from '@/components/Reservations/Card/Card';

export const reservations: CardProps['data'][] = [
  {
    id: 1,
    activity: {
      bannerImageUrl: '/images/nextjs.png',
      title: '함께 배우면 즐거운 스트릿 댄스 함께 배우면 즐거운 스트릿 댄스 함께 배우면 즐거운 스트릿 댄스',
      id: 101,
    },
    scheduleId: 201,
    status: 'pending',
    reviewSubmitted: true,
    totalPrice: 10000,
    headCount: 10,
    date: '2024-03-10',
    startTime: '09:00',
    endTime: '12:00',
  },
  {
    id: 2,
    activity: {
      bannerImageUrl: '/images/flower.png',
      title: 'Culinary Tour',
      id: 202,
    },
    scheduleId: 303,
    status: 'confirmed',
    reviewSubmitted: false,
    totalPrice: 20000,
    headCount: 2,
    date: '2024-03-15',
    startTime: '18:30',
    endTime: '21:30',
  },
  {
    id: 3,
    activity: {
      bannerImageUrl: '/images/react.png',
      title: 'Mountain Biking',
      id: 303,
    },
    scheduleId: 404,
    status: 'declined',
    reviewSubmitted: false,
    totalPrice: 3000,
    headCount: 1,
    date: '2024-03-20',
    startTime: '14:00',
    endTime: '16:00',
  },
  {
    id: 4,
    activity: {
      bannerImageUrl: '/images/react.png',
      title: 'Beach Picnic',
      id: 404,
    },
    scheduleId: 505,
    status: 'canceled',
    reviewSubmitted: false,
    totalPrice: 40000,
    headCount: 4,
    date: '2024-03-25',
    startTime: '12:00',
    endTime: '15:00',
  },
  {
    id: 5,
    activity: {
      bannerImageUrl: '/images/react.png',
      title: 'City Sightseeing',
      id: 505,
    },
    scheduleId: 606,
    status: 'completed',
    reviewSubmitted: true,
    totalPrice: 50000,
    headCount: 2,
    date: '2024-03-30',
    startTime: '10:00',
    endTime: '16:00',
  },
  {
    id: 6,
    activity: {
      bannerImageUrl: '/images/nextjs.png',
      title: '함께 배우면 즐거운 스트릿 댄스',
      id: 101,
    },
    scheduleId: 201,
    status: 'pending',
    reviewSubmitted: true,
    totalPrice: 10000,
    headCount: 10,
    date: '2024-03-10',
    startTime: '09:00',
    endTime: '12:00',
  },
  {
    id: 7,
    activity: {
      bannerImageUrl: '/images/flower.png',
      title: 'Culinary Tour',
      id: 202,
    },
    scheduleId: 303,
    status: 'confirmed',
    reviewSubmitted: false,
    totalPrice: 20000,
    headCount: 2,
    date: '2024-03-15',
    startTime: '18:30',
    endTime: '21:30',
  },
  {
    id: 8,
    activity: {
      bannerImageUrl: '/images/react.png',
      title: 'Mountain Biking',
      id: 303,
    },
    scheduleId: 404,
    status: 'declined',
    reviewSubmitted: false,
    totalPrice: 3000,
    headCount: 1,
    date: '2024-03-20',
    startTime: '14:00',
    endTime: '16:00',
  },
  {
    id: 9,
    activity: {
      bannerImageUrl: '/images/react.png',
      title: 'Beach Picnic',
      id: 404,
    },
    scheduleId: 505,
    status: 'canceled',
    reviewSubmitted: false,
    totalPrice: 40000,
    headCount: 4,
    date: '2024-03-25',
    startTime: '12:00',
    endTime: '15:00',
  },
  {
    id: 10,
    activity: {
      bannerImageUrl: '/images/flower2.png',
      title: 'City Sightseeing City Sightseeing City Sightseeing City Sightseeing City Sightseeing',
      id: 505,
    },
    scheduleId: 606,
    status: 'completed',
    reviewSubmitted: false,
    totalPrice: 50000,
    headCount: 10,
    date: '2024-03-30',
    startTime: '10:00',
    endTime: '16:00',
  },
  {
    id: 11,
    activity: {
      bannerImageUrl: '/images/nextjs.png',
      title: 'Fun Dance Class',
      id: 111,
    },
    scheduleId: 211,
    status: 'pending',
    reviewSubmitted: true,
    totalPrice: 12000,
    headCount: 8,
    date: '2024-04-05',
    startTime: '14:00',
    endTime: '16:00',
  },
  {
    id: 12,
    activity: {
      bannerImageUrl: '/images/flower.png',
      title: 'Artistic Workshop',
      id: 212,
    },
    scheduleId: 313,
    status: 'confirmed',
    reviewSubmitted: false,
    totalPrice: 25000,
    headCount: 5,
    date: '2024-04-10',
    startTime: '17:30',
    endTime: '20:30',
  },
  {
    id: 13,
    activity: {
      bannerImageUrl: '/images/flower2.png',
      title: 'Nature Photography',
      id: 313,
    },
    scheduleId: 414,
    status: 'declined',
    reviewSubmitted: false,
    totalPrice: 3500,
    headCount: 3,
    date: '2024-04-15',
    startTime: '10:00',
    endTime: '12:00',
  },
  {
    id: 14,
    activity: {
      bannerImageUrl: '/images/block.png',
      title: 'Cooking Class',
      id: 414,
    },
    scheduleId: 515,
    status: 'canceled',
    reviewSubmitted: false,
    totalPrice: 45000,
    headCount: 6,
    date: '2024-04-20',
    startTime: '13:00',
    endTime: '15:00',
  },
  {
    id: 15,
    activity: {
      bannerImageUrl: '/images/a.png',
      title: 'Historical Tour',
      id: 515,
    },
    scheduleId: 616,
    status: 'completed',
    reviewSubmitted: false,
    totalPrice: 55000,
    headCount: 3,
    date: '2024-04-25',
    startTime: '11:00',
    endTime: '16:00',
  },
  {
    id: 16,
    activity: {
      bannerImageUrl: '/images/nextjs.png',
      title: 'Yoga Retreat',
      id: 616,
    },
    scheduleId: 717,
    status: 'pending',
    reviewSubmitted: true,
    totalPrice: 18000,
    headCount: 12,
    date: '2024-05-01',
    startTime: '09:00',
    endTime: '12:00',
  },
  {
    id: 33,
    activity: {
      bannerImageUrl: '/images/nextjs.png',
      title: 'Yoga Retreat',
      id: 616,
    },
    scheduleId: 717,
    status: 'pending',
    reviewSubmitted: true,
    totalPrice: 18000,
    headCount: 12,
    date: '2024-05-01',
    startTime: '09:00',
    endTime: '12:00',
  },
  {
    id: 34,
    activity: {
      bannerImageUrl: '/images/nextjs.png',
      title: 'Yoga Retreat',
      id: 616,
    },
    scheduleId: 717,
    status: 'pending',
    reviewSubmitted: true,
    totalPrice: 18000,
    headCount: 12,
    date: '2024-05-01',
    startTime: '09:00',
    endTime: '12:00',
  },
  {
    id: 35,
    activity: {
      bannerImageUrl: '/images/nextjs.png',
      title: 'Yoga Retreat',
      id: 616,
    },
    scheduleId: 717,
    status: 'pending',
    reviewSubmitted: true,
    totalPrice: 18000,
    headCount: 12,
    date: '2024-05-01',
    startTime: '09:00',
    endTime: '12:00',
  },
  {
    id: 100,
    activity: {
      bannerImageUrl: '/images/nextjs.png',
      title: 'Yoga Retreat',
      id: 616,
    },
    scheduleId: 717,
    status: 'pending',
    reviewSubmitted: true,
    totalPrice: 18000,
    headCount: 12,
    date: '2024-05-01',
    startTime: '09:00',
    endTime: '12:00',
  },
  {
    id: 17,
    activity: {
      bannerImageUrl: '/images/flower.png',
      title: 'Wine Tasting',
      id: 717,
    },
    scheduleId: 818,
    status: 'confirmed',
    reviewSubmitted: false,
    totalPrice: 28000,
    headCount: 4,
    date: '2024-05-05',
    startTime: '18:00',
    endTime: '21:00',
  },
  {
    id: 18,
    activity: {
      bannerImageUrl: '/images/react.png',
      title: 'Adventure Hike',
      id: 818,
    },
    scheduleId: 919,
    status: 'declined',
    reviewSubmitted: false,
    totalPrice: 3800,
    headCount: 2,
    date: '2024-05-10',
    startTime: '14:30',
    endTime: '17:30',
  },
  {
    id: 19,
    activity: {
      bannerImageUrl: '/images/block.png',
      title: 'Salsa Dance Night',
      id: 919,
    },
    scheduleId: 1020,
    status: 'canceled',
    reviewSubmitted: false,
    totalPrice: 48000,
    headCount: 8,
    date: '2024-05-15',
    startTime: '20:00',
    endTime: '23:00',
  },
  {
    id: 20,
    activity: {
      bannerImageUrl: '/images/a.png',
      title: 'Scuba Diving',
      id: 1020,
    },
    scheduleId: 1121,
    status: 'completed',
    reviewSubmitted: false,
    totalPrice: 58000,
    headCount: 6,
    date: '2024-05-20',
    startTime: '10:30',
    endTime: '15:30',
  },
];
