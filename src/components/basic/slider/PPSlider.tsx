import { useEffect, useState } from "react";
import Slider from "rc-slider";

// ** Styles **
import "rc-slider/assets/index.css";
import "./ppSlider.scss";

// ** Types **
interface Props {
  value: number;
  setValue: (value: any) => void;
  halfRatings?: boolean;
}

const PPSlider = ({ value, setValue, halfRatings }: Props) => {
  const [marks, setMarks] = useState<Record<number, number>>();

  useEffect(() => {
    if (halfRatings) {
      setMarks({
        0.5: 0.5,
        1.5: 1.5,
        2.5: 2.5,
        3.5: 3.5,
        4.5: 4.5,
        5.5: 5.5,
        6.5: 6.5,
        7.5: 7.5,
        8.5: 8.5,
        9.5: 9.5,
      });

      setValue(0.5);
    } else {
      setMarks({
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
      });

      setValue(0);
    }
  }, [halfRatings]);

  return (
    <Slider
      value={value}
      min={halfRatings ? 0.5 : 0}
      defaultValue={halfRatings ? 0.5 : 0}
      max={halfRatings ? 9.5 : 10}
      marks={marks}
      step={null}
      onChange={setValue}
    />
  );
};

export default PPSlider;
