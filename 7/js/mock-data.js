import {getRandomInteger, getRandomIntegerFromRange, createIdGenerator} from './util.js';

const GALLERY_SIZE = 25;
const COUNT_LIKE_MIN = 15;
const COUNT_LIKE_MAX = 200;
const COUNT_AVATAR = 6;
const COMMENTS_MAX = 30;

const NAMES = [
  'Миша',
  'Паша',
  'Дима',
  'Катя',
  'Настя',
  'Влад',
  'Сергей',
  'Яхья',
  'Ваня',
  'Алёша',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Фотка огонь',
  'Лайк, подписка',
  'Что за фоточка, а на ней Яхья красоточка',
  'Примерами сестрам задеваешь',
  'Таит в себе красоточку бандит',
];

const generateId = createIdGenerator();
const generateUrl = createIdGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomIntegerFromRange(1, GALLERY_SIZE * COMMENTS_MAX)(),
  avatar: `img/avatar-${getRandomIntegerFromRange(1, COUNT_AVATAR)()}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPost = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(COUNT_LIKE_MIN, COUNT_LIKE_MAX),
  comments: Array.from({length: getRandomInteger(0, COMMENTS_MAX)}, createComment),
});

const createGallery = () => Array.from({length: GALLERY_SIZE}, createPost);

export {createGallery};
