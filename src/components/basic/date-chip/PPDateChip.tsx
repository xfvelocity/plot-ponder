// ** Styles **
import "./ppDateChip.scss";

// ** Types **
interface Props {
  date: Date;
  fontSize?: number;
}

interface DateOptions {
  y: number;
  m: number;
  d: number;
}

const PPDateChip = ({ date, fontSize = 9 }: Props) => {
  // ** Methods **
  const formatDate = (date: Date): string => {
    if (!date) return "";

    const options: DateOptions = {
      y: 31536000,
      m: 2592000,
      d: 86400,
    };

    let age = "Today";
    const formattedDate: string = date.toISOString();

    const diffInSeconds: number = Math.floor(
      (new Date().valueOf() - new Date(formattedDate).valueOf()) / 1000,
    );

    for (const [key, value] of Object.entries(options)) {
      const interval: number = diffInSeconds / value;

      if (interval >= 1) {
        age = `${Math.floor(interval)}${key} ago`;
        break;
      }
    }

    return age;
  };

  return (
    <div
      className="pp-date-chip"
      style={{ "--fontSize": fontSize } as React.CSSProperties}
    >
      {formatDate(date)}
    </div>
  );
};

export default PPDateChip;
