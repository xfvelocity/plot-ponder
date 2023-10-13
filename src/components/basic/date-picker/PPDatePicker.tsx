import { useEffect } from "react";

// ** Styles **
import "./ppDatePicker.scss";

// ** Types **
interface Props {
  date: string;
  setDate: (e: string) => void;
}

const PPDatePicker = ({ date, setDate }: Props) => {
  // ** Methods **
  const formatDate = (d: string): string => {
    if (d.includes("-")) {
      return d;
    } else {
      const [day, month, year] = d.split("/");

      return `${year}-${month}-${day}`;
    }
  };

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="pp-date-picker pp-input pp-input-outlined pp-input-active">
      <label>When did you watch this:</label>

      <input
        type="date"
        value={formatDate(date)}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default PPDatePicker;
