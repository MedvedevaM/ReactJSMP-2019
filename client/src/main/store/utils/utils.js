import fetch from 'node-fetch';

export function checkMatching(searchValue, string) {
  const preparedSearchValue = searchValue.toLowerCase().trim();
  const preparedString = string.toLowerCase().trim();
  const searchValueLength = preparedSearchValue.length;
  const stringLength = preparedString.length;
  if (searchValueLength <= stringLength) {
    for (let i = 0; i < searchValueLength; i++) {
      if (preparedSearchValue[i] !== preparedString[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function debounce(f, ms) {
  let timer = null;

  return function (...args) {
    const onComplete = () => {
      f.apply(this, args);
      timer = null;
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
}

export const callApi = url => fetch(url)
  .then(
    response => response.json(),
    error => Promise.reject(error),
  )
  .then(
    data => ({ data }),
    error => ({ error }),
  );
