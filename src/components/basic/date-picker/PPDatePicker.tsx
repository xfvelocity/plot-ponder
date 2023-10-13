import { useEffect } from "react";

// ** Styles **
import "./ppDatePicker.scss";

// ** Components **
import PPIcon from "../icon/PPIcon";

// ** Types **
interface Props {
  date: string;
  setDate: (e: string) => void;
}

const PPDatePicker = ({ date, setDate }: Props) => {
  useEffect(() => {
    const d = date ? date : new Date().toLocaleDateString();
    const [day, month, year] = d.split("/");

    setDate(`${year}-${month}-${day}`);
  }, []);

  return (
    <div className="pp-date-picker pp-input pp-input-outlined pp-input-active">
      <label>When did you watch this?</label>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <PPIcon className="pp-date-picker-icon" src="calendar" size={12} />
    </div>
  );
};

export default PPDatePicker;
