//Styles
import "./chip.scss";

//interface
interface Props {
  text: string;
  backgroundColour?: string;
  textColour?: string;
}

//component
function Chip({
  text,
  backgroundColour = "blue-chip",
  textColour = "primary",
}: Props) {
  return (
    <div
      className={`chip pp-bg-${backgroundColour} pp-text-colour-${textColour}`}
    >
      {text}
    </div>
  );
}

export default Chip;
