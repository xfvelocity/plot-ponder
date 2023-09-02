import { useRef, useState } from "react";
import "./ppSlider.scss";

const PPSlider = () => {
  const sliderElement = useRef<HTMLDivElement | null>(null);
  const selectorElement = useRef<HTMLDivElement | null>(null);

  const [selectedNumber, setSelectedNumber] = useState(0);

  const handleMouseMove = (e: MouseEvent): void => {
    if (!selectorElement.current || !sliderElement.current) return;

    // Calculate the progress made along the bar in decimals 0-10
    const decimalProgress: number =
      (e.clientX / sliderElement.current.clientWidth) * 10;

    // Round to the nearest 0.5
    const rating: string = (Math.round(decimalProgress * 2) / 2).toFixed(2);
    setSelectedNumber(parseFloat(rating));

    // Get the element with the matching id and move the selector to that position
    const sliderValue = document.getElementById(rating);

    selectorElement.current.style.left = `${sliderValue?.offsetLeft}px`;
  };

  const startTracking = (): void => {
    window.addEventListener("mousemove", handleMouseMove);
  };

  const stopTracking = (): void => {
    window.removeEventListener("mousemove", handleMouseMove);
  };

  window.addEventListener("mouseup", stopTracking);

  return (
    <>
      <div ref={sliderElement} className="pp-slider">
        <div
          ref={selectorElement}
          className="pp-slider-selector"
          onMouseDown={startTracking}
          onTouchStart={startTracking}
        />

        {[...Array(21)].map((_, i) => (
          <div
            key={i}
            id={(i / 2).toFixed(2).toString()}
            className="pp-slider-value"
          />
        ))}
      </div>

      {selectedNumber}
    </>
  );
};

export default PPSlider;
