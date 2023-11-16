// ** Styles **
import "./ppChip.scss";

// ** Types **
interface Props {
  text: string;
  backgroundColour?: string;
  textColour?: string;
  fontSize?: number;
}

// ** Component **
const PPChip = ({
  text,
  backgroundColour = "blue-chip",
  textColour = "primary",
  fontSize = 8,
}: Props) => {
  return (
    <div
      className={`chip pp-bg-${backgroundColour} pp-text-colour-${textColour}`}
      style={{ "--fontSize": fontSize } as React.CSSProperties}
    >
      {text}
    </div>
  );
};

export default PPChip;
