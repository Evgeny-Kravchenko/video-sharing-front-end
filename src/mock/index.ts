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
    password: '1123121113',
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
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'valera.zhevlakov@mail.ru'],
  },
  {
    id: '2',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    id: '3',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: ['valera.zhevlakov@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    id: '4',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'valera.zhevlakov@mail.ru'],
  },
  {
    id: '5',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    id: '6',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: ['valera.zhevlakov@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    id: '7',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'valera.zhevlakov@mail.ru'],
  },
  {
    id: '8',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    id: '9',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: ['valera.zhevlakov@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    id: '10',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'valera.zhevlakov@mail.ru'],
  },
  {
    id: '11',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    id: '12',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: ['valera.zhevlakov@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
];

export { users, videos };
