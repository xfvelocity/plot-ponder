// ** Styles **
import "./ppLoading.scss";

// ** Types **
interface Props {
  colour?: string;
  size?: number;
}

const PPLoading = ({ colour = "black", size = 32 }: Props) => {
  return (
    <div className="pp-loading">
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
            stroke-width="5"
          />
        </svg>
      </span>
    </div>
  );
};

export default PPLoading;
