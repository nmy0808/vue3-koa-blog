export const debounce = (callback, delay = 1000, firstFlag = true) => {
  let time;
  return (...args) => {
    if (!firstFlag) {
      clearTimeout(time);
      time = setTimeout(() => {
        callback(...args);
      }, delay);
    } else {
      firstFlag = false;
    }
  };
};
