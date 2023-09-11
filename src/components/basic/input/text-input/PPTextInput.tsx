import clsx from "clsx";
import { useState } from "react";

// ** Styles **
import "./ppTextInput.scss";

// ** Components **
import PPIcon from "@/components/basic/icon/PPIcon";

// ** Types **
interface Props {
  value: string;
  setValue: (e: string) => void;
  type?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  icon?: string;
  iconFn?: () => void;
}

const PPTextInput = ({
  value,
  setValue,
  type = "text",
  placeholder,
  label,
  disabled = false,
  icon,
  iconFn,
}: Props) => {
  // ** Data **
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={clsx(`pp-text-input pp-input pp-input-outlined`, {
        "pp-input-active": isActive || !!value,
        "pp-disabled": disabled,
      })}
    >
      <div className="pp-text-input-content">
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

      {icon && <PPIcon src={icon} size={16} onClick={iconFn} />}
    </div>
  );
};

export default PPTextInput;
