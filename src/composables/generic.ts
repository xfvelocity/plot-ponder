export const clickOutside = (
  event: MouseEvent,
  element: HTMLDivElement | null,
  fn: () => void,
): void => {
  if (element && !element.contains(event.target as Node)) {
    fn();
  }
};

export const debounce = (func: any, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
