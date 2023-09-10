import clsx from "clsx";
import { useState } from "react";

// ** Styles **
import "./ppTextArea.scss";

// ** Types **
interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  rows?: number;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

const PPTextArea = ({
  value,
  setValue,
  rows = 4,
  placeholder,
  label,
  disabled = false,
}: Props) => {
  // ** Data **
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={clsx(`pp-text-area pp-input pp-input-outlined`, {
        "pp-input-active": isActive || !!value,
        "pp-disabled": disabled,
      })}
    >
      {label && <label>{label}</label>}

      <textarea
        value={value}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </div>
  );
};

export default PPTextArea;
