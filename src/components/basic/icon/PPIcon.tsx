import { ReactSVG } from "react-svg";

// ** Styles **
import "./ppIcon.scss";

// ** Types **
interface Props {
  src: string;
  className?: string;
  size?: number;
}

const PPIcon = ({ src, className, size = 24 }: Props) => {
  return (
    <ReactSVG
      className={`pp-icon ${className}`}
      src={`icons/${src}.svg`}
      style={
        {
          "--size": `${size}px`,
        } as React.CSSProperties
      }
    />
  );
};

export default PPIcon;
