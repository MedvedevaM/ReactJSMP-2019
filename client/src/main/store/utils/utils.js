export function checkMatching(searchValue, string) {
  searchValue = searchValue.toLowerCase().trim();
  string = string.toLowerCase().trim();
  const searchValueLength = searchValue.length;
  const stringLength = string.length;
  if (searchValueLength <= stringLength) {
    for (let i = 0; i < searchValueLength; i++) {
      if (searchValue[i] !== string[i]) {
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
