import { User } from '../types';
import { Video } from '../components/local/video-item/types';

const users: Array<User> = [
  {
    name: 'Yauhen',
    lastName: 'Krauchanka',
    email: 'evgen.kravchenko.vladimirovich@mail.ru',
    password: '11111111',
  },
  {
    name: 'Valera',
    lastName: 'Zhevlakov',
    email: 'valera.zhevlakov@mail.ru',
    password: '1123121113',
  },
  {
    name: 'Stas',
    lastName: 'Sharendo',
    email: 'stas.sharendo.ivanovich@mail.ru',
    password: '1123111123',
  },
];

const videos: Array<Video> = [
  {
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'valera.zhevlakov@mail.ru'],
  },
  {
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: ['valera.zhevlakov@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'valera.zhevlakov@mail.ru'],
  },
  {
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: ['valera.zhevlakov@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'valera.zhevlakov@mail.ru'],
  },
  {
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: ['valera.zhevlakov@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
    owner: 'evgen.kravchenko.vladimirovich@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'valera.zhevlakov@mail.ru'],
  },
  {
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'valera.zhevlakov@mail.ru',
    whoSharedWith: ['stas.sharendo.ivanovich@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
  {
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
    owner: 'stas.sharendo.ivanovich@mail.ru',
    whoSharedWith: ['valera.zhevlakov@mail.ru', 'evgen.kravchenko.vladimirovich@mail.ru'],
  },
];

export { users, videos };
