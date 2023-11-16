import clsx from "clsx";

// ** Styles **
import "./ppToggle.scss";

// ** Types **
interface Props {
  active: boolean;
  setActive: (value: boolean) => void;
  size?: number;
  colour?: string;
}

const PPToggle = ({
  active,
  setActive,
  size = 25,
  colour = "primary",
}: Props) => {
  return (
    <div
      className={clsx(`pp-toggle`, {
        [`pp-bg-${colour}`]: active,
      })}
      style={{ "--size": `${size}px` } as React.CSSProperties}
      onClick={() => setActive(!active)}
    >
      <div
        className={clsx(`pp-toggle-switch`, {
          "pp-toggle-switch-active": active,
        })}
      />
    </div>
  );
};

export default PPToggle;
