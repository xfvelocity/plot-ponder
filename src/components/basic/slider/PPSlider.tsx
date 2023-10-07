import Slider from "rc-slider";

// ** Styles **
import "rc-slider/assets/index.css";
import "./ppSlider.scss";

// ** Types **
interface Props {
  value: number;
  setValue: (value: any) => void;
}

const PPSlider = ({ value, setValue }: Props) => {
  return (
    <Slider
      value={value}
      min={0}
      defaultValue={0}
      max={10}
      marks={{
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
      }}
      step={null}
      onChange={setValue}
    />
  );
};

export default PPSlider;
