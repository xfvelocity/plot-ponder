export const clickOutside = (
  event: MouseEvent,
  componentRef: React.MutableRefObject<HTMLDivElement | null>,
  fn: () => void
): void => {
  if (
    componentRef.current &&
    !componentRef.current.contains(event.target as Node)
  ) {
    fn();
  }
};
