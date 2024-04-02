import {DEBOUNCE_DELAY} from './consts.js';

/* Проверка нажатия клавиши ESC */
const isEscapeKey = (evt) => evt.key === 'Escape';

/* Устранение дребезга */
function debounce (callback, timeoutDelay = DEBOUNCE_DELAY) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {isEscapeKey, debounce};
