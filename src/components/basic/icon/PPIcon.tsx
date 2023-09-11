import { ReactSVG } from "react-svg";
import clsx from "clsx";

// ** Styles **
import "./ppIcon.scss";

// ** Types **
interface Props {
  src: string;
  colour?: string;
  className?: string;
  size?: number;
  onClick?: () => void;
}

const PPIcon = ({
  src,
  className = "",
  colour = "grey-darken-2",
  size = 24,
  onClick,
}: Props) => {
  return (
    <ReactSVG
      className={clsx(`pp-icon ${className} pp-icon-colour-${colour}`, {
        "pp-hover": !!onClick,
      })}
      src={`icons/${src}.svg`}
      style={
        {
          "--size": `${size}px`,
        } as React.CSSProperties
      }
      onClick={onClick}
    />
  );
};

export default PPIcon;
