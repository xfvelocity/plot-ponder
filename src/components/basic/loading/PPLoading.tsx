// ** Styles **
import "./ppLoading.scss";

// ** Types **
interface Props {
  colour?: string;
  size?: number;
  className?: string;
}

const PPLoading = ({ colour = "black", size = 32, className = "" }: Props) => {
  return (
    <div className={`pp-loading ${className}`}>
      <span className="pp-loading-content">
        <svg
          className={`pp-loading-icon pp-icon-stroke-${colour}`}
          style={{ width: size, height: size }}
          viewBox="0 0 50 50"
        >
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          />
        </svg>
      </span>
    </div>
  );
};

export default PPLoading;
