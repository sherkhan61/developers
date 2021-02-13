export const converter = (duration: number): string => {
  const minutes = Math.floor(duration / 60);
  let seconds = String(Math.floor(duration % 60));
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  const result = minutes + " : " + seconds;
  return result;
};

export const calculateProgress = (mouseX: number, progressElement: HTMLProgressElement): number => {
  const barWidth = progressElement.getBoundingClientRect().right -
      progressElement.getBoundingClientRect().left;
  const scrollPos = Math.abs(mouseX -
      progressElement.getBoundingClientRect().left);
  return scrollPos / barWidth * 100;
};