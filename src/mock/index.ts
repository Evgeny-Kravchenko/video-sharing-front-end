import { User, Video } from '../types';

const users: Array<User> = [
  {
    id: '1',
    name: 'Yauhen',
    lastName: 'Krauchanka',
    email: 'evgen.kravchenko.vladimirovich@mail.ru',
    password: '11111111',
  },
  {
    id: '2',
    name: 'Valera',
    lastName: 'Zhevlakov',
    email: 'valera.zhevlakov@mail.ru',
    password: '11111111',
  },
  {
    id: '3',
    name: 'Stas',
    lastName: 'Sharendo',
    email: 'stas.sharendo.ivanovich@mail.ru',
    password: '11111111',
  },
];

const videos: Array<Video> = [
  {
    id: '1',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '2',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '3',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '4',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '5',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '6',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '7',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '8',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '9',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '10',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '11',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: [],
  },
  {
    id: '12',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: [],
  },
];

const usersVideos = [
  { id: '1', userId: '1', videoId: '1' },
  { userId: '2', videoId: '2' },
  { userId: '3', videoId: '3' },
  { userId: '4', videoId: '4' },
  { userId: '5', videoId: '5' },
  { userId: '6', videoId: '6' },
  { userId: '7', videoId: '7' },
  { userId: '8', videoId: '8' },
  { userId: '9', videoId: '9' },
  { userId: '10', videoId: '10' },
  { userId: '11', videoId: '11' },
  { userId: '12', videoId: '12' },
];

const usersSharedVideos = [
  { userId: '1', videoId: '12' },
  { userId: '2', videoId: '11' },
  { userId: '3', videoId: '10' },
  { userId: '4', videoId: '9' },
  { userId: '5', videoId: '8' },
  { userId: '6', videoId: '7' },
  { userId: '7', videoId: '6' },
  { userId: '8', videoId: '5' },
  { userId: '9', videoId: '4' },
  { userId: '10', videoId: '3' },
  { userId: '11', videoId: '2' },
  { userId: '12', videoId: '1' },
];

export { users, videos };

