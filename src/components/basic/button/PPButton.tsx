// ** Styles **
import "./ppButton.scss";

// ** Components **
import PPLoading from "@/components/basic/loading/PPLoading";

// ** Types **
interface Props {
  text: string;
  backgroundColour?: string;
  textColour?: string;
  width?: number | string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const PPButton = ({
  text,
  backgroundColour = "blue-darken-3",
  textColour = "white",
  width = 200,
  className = "",
  disabled = false,
  loading = false,
  onClick,
}: Props) => {
  return (
    <button
      className={`pp-button pp-bg-${backgroundColour} ${className} pp-text-colour-${textColour} ${
        (disabled || loading) && "pp-button-disabled"
      }`}
      style={{ width }}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {text}

      {loading && <PPLoading colour="white" size={12} />}
    </button>
  );
};

export default PPButton;
