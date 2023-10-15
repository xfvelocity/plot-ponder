// ** Styles **
import "./ppChip.scss";

// ** Types **
interface Props {
  text: string;
  backgroundColour?: string;
  textColour?: string;
}

// ** Component **
const PPChip = ({
  text,
  backgroundColour = "blue-chip",
  textColour = "primary",
}: Props) => {
  return (
    <div
      className={`chip pp-bg-${backgroundColour} pp-text-colour-${textColour}`}
    >
      {text}
    </div>
  );
};

export default PPChip;
