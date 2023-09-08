import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

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

  const handleMouseMove = (e: MouseEvent): void => {
    if (!selectorElement.current || !sliderElement.current) return;

    const rect: DOMRect = sliderElement.current.getBoundingClientRect();
    const moveX: number = e.clientX - rect.left;

    if (sliderElement.current.clientWidth - 25 > moveX && moveX >= 0) {
      // Calculate the progress made along the bar in decimals 0-10
      const decimalProgress: number =
        (e.clientX / sliderElement.current.clientWidth) * 10;

      // Round to the nearest 0.5
      const rating: string = (Math.round(decimalProgress * 2) / 2).toFixed(2);

      setSelectedNumber(parseFloat(rating));

      selectorElement.current.style.left = `${moveX}px`;
    }
  };

  const stopTracking = (): void => {
    window.removeEventListener("mousemove", handleMouseMove);

    if (selectorElement.current && sliderElement.current) {
      // Move the selector left in 5% increments
      selectorElement.current.style.left = `translateX(calc(${
        selectedNumber * 10
      }% - 15px)`;
    }

    console.log("stopTracking");
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("mouseup", stopTracking);

    return () => window.removeEventListener("mouseup", stopTracking);
  }, [selectedNumber]);

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
        {[...Array(21)].map((_, i) => {
          const num = parseFloat((i / 2).toFixed(1));

          return (
            <div
              key={i}
              className={clsx(
                "pp-slider-value",
                `pp-text-colour-${
                  num < 4 ? "red" : num < 8 ? "orange" : "green"
                }`,
                {
                  "pp-slider-value-decimal": i % 2 === 1,
                }
              )}
            >
              <span
                className={clsx("pp-slider-number", {
                  "pp-slider-number-show":
                    i % 2 === 0 && selectedNumber === num,
                })}
              >
                {(i / 2).toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PPSlider;
