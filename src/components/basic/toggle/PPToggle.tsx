import clsx from "clsx";

// ** Styles **
import "./ppToggle.scss";

// ** Types **
interface Props {
  active: boolean;
  setActive: (value: boolean) => void;
  size?: number;
}

const PPToggle = ({ active, setActive, size = 25 }: Props) => {
  return (
    <div
      className="pp-toggle"
      style={{ "--size": `${size}px` }}
      onClick={() => setActive(!active)}
    >
      <div
        className={clsx("pp-toggle-switch", {
          "pp-toggle-switch-active": active,
        })}
      />
    </div>
  );
};

export default PPToggle;
