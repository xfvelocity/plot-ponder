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
  disabled?: boolean;
  loading?: boolean;
}

const PPButton = ({
  text,
  backgroundColour = "blue-darken-3",
  textColour = "white",
  width = 200,
  disabled = false,
  loading = false,
}: Props) => {
  return (
    <button
      className={`pp-button pp-bg-${backgroundColour} pp-text-colour-${textColour} ${
        (disabled || loading) && "pp-button-disabled"
      }`}
      style={{ width }}
      disabled={disabled || loading}
    >
      {text}

      {loading && <PPLoading colour="white" size={12} />}
    </button>
  );
};

export default PPButton;
