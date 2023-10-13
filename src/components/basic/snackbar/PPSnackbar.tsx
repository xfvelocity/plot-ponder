import { useEffect } from "react";

// ** Styles **
import "./ppSnackbar.scss";

// ** Components **
import PPIcon from "../icon/PPIcon";

// ** Types **
interface Props {
  isOpen: boolean;
  closeFn: (isOpen: boolean) => void;
  text: string;
  type: string;
}

const PPSnackbar = ({ isOpen, closeFn, text, type }: Props) => {
  // ** Effects **
  useEffect(() => {
    if (isOpen) {
      setTimeout(closeFn, 5000);
    }
  }, [isOpen]);

  return isOpen ? (
    <div className={`pp-snackbar pp-bg-${type} pp-text-colour-white`}>
      <PPIcon
        src={type === "error" ? "exclamation" : "check"}
        colour="white"
        size={14}
      />
      <p>{text}</p>
    </div>
  ) : null;
};

export default PPSnackbar;
