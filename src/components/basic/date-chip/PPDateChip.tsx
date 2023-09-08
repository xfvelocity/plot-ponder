// ** Styles **
import "./ppDateChip.scss";

// ** Types **
interface Props {
  date: Date;
}

interface DateOptions {
  y: number;
  m: number;
  d: number;
  h: number;
  min: number;
}

const PPDateChip = ({ date }: Props) => {
  // ** Methods **
  const formatDate = (date: Date): string => {
    if (!date) return "";

    const options: DateOptions = {
      y: 31536000,
      m: 2592000,
      d: 86400,
      h: 3600,
      min: 60,
    };

    let age = "now";
    const formattedDate: string = date.toISOString();

    const diffInSeconds: number = Math.floor(
      (new Date().valueOf() - new Date(formattedDate).valueOf()) / 1000
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

  return <div className="pp-date-chip">{formatDate(date)}</div>;
};

export default PPDateChip;
