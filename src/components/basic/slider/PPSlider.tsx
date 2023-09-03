import { useRef, useState } from "react";
import "./ppSlider.scss";

const PPSlider = () => {
  // ** Data **
  const sliderElement = useRef<HTMLDivElement | null>(null);
  const selectorElement = useRef<HTMLDivElement | null>(null);

  const [selectedNumber, setSelectedNumber] = useState(0);

  // ** Methods **
  const startTracking = (): void => {
    window.addEventListener("mousemove", handleMouseMove);
  };

  const stopTracking = (): void => {
    window.removeEventListener("mousemove", handleMouseMove);

    if (selectorElement.current && selectedNumber * 10 >= 100) {
      // Move the selector left in 5% increments
      selectorElement.current.style.left = `${selectedNumber * 10}%`;
    }
  };

  window.addEventListener("mouseup", stopTracking);

  const handleMouseMove = (e: MouseEvent): void => {
    if (!selectorElement.current || !sliderElement.current) return;

    const rect: DOMRect = sliderElement.current.getBoundingClientRect();
    const moveX: number = e.clientX - rect.left - 10;

    if (sliderElement.current.clientWidth > moveX && moveX >= -10) {
      // Calculate the progress made along the bar in decimals 0-10
      const decimalProgress: number =
        (e.clientX / sliderElement.current.clientWidth) * 10;

      // Round to the nearest 0.5
      const rating: string = (Math.floor(decimalProgress * 2) / 2).toFixed(2);

      setSelectedNumber(parseFloat(rating));

      selectorElement.current.style.left = `${moveX}px`;
    }
  };

  return (
    <>
      <div ref={sliderElement} className="pp-slider">
        <div
          ref={selectorElement}
          className="pp-slider-selector"
          onMouseDown={startTracking}
          onTouchStart={startTracking}
        />
      </div>

      <div className="pp-slider-values">
        {[...Array(11)].map((_, i) => (
          <span
            key={i}
            className={`pp-slider-value ${
              selectedNumber === i ? "pp-slider-value-selected" : ""
            }`}
          >
            {i}
          </span>
        ))}
      </div>

      {selectedNumber}
    </>
  );
};

export default PPSlider;
