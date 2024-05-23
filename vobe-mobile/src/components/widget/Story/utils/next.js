// this is called when the time ends or if the user taps on next;

export const next = ({
  current,
  length,
  setCurrent,
  setIsPaused
}) => {
  if (current === length - 1) {
    setCurrent(0);
    return;
  }
  setCurrent(prev => {
    return prev + 1;
  });
  // setIsPaused(true);
};
