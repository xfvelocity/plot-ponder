import { useEffect, useState } from "react";

// **Styles**
import "./datePicker.scss";

const DatePicker = () => {
  const [date, setDate] = useState<string>("");

  const formatDate = (d: string): string => {
    if (d.includes("-")) {
      return d;
    } else {
      const [day, month, year] = d.split("/");
      return `${year}-${month}-${day}`;
    }
  };

  useEffect(() => {
    const dates = new Date();
    const today = dates.toLocaleDateString();
    setDate(today);
  }, []);

  return (
    <div className="pp-date-picker-container">
      <p className="pp-date-picker-label">When did you watch this:</p>
      <input
        type="date"
        className="pp-date-picker"
        value={formatDate(date)}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
