import clsx from "clsx";
import { useState } from "react";

// ** Styles **
import "./ppTextInput.scss";

// ** Types **
interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

const PPTextInput = ({
  value,
  setValue,
  type = "text",
  placeholder,
  label,
  disabled = false,
}: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={clsx(`pp-text-input pp-input pp-input-outlined`, {
        "pp-input-active": isActive || !!value,
        "pp-disabled": disabled,
      })}
    >
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />

      {label && <label>{label}</label>}
    </div>
  );
};

export default PPTextInput;
