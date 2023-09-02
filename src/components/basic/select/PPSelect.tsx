import { useRef, useState } from "react";
import { ReactSVG } from "react-svg";

import "./ppSelect.scss";
import { clickOutside } from "../../../composables/generic";

interface Props {
  label: string;
  options: string[];
  value: string;
  updateValue: React.Dispatch<React.SetStateAction<any>>;
  children?: any;
  showOptions?: boolean;
}

const PPSelect = ({
  label,
  options,
  value = "",
  updateValue,
  children,
  showOptions,
}: Props) => {
  // ** Data **
  const select = useRef<HTMLDivElement | null>(null);

  const [selectActive, setSelectActive] = useState<boolean>(false);

  // ** Methods **
  document.addEventListener("click", (e: MouseEvent) =>
    clickOutside(e, select, () => setSelectActive(false))
  );

  const optionSelected = (option: string): void => {
    if (option !== value && selectActive) {
      updateValue(option);
      setSelectActive(false);
    }
  };

  return (
    <div ref={select}>
      <div className="pp-select">
        <div
          className={`pp-select-toggle pp-input pp-input-outlined 
             ${value ? "pp-input-populated" : ""} ${
            selectActive ? "pp-input-active" : ""
          }`}
          onClick={() => setSelectActive(true)}
        >
          <label className={`pp-text-colour-black`}>{label}</label>
          <span className="pp-select-value">{value}</span>

          {children}

          <ReactSVG
            className={`pp-select-arrow ${
              selectActive ? "pp-select-arrow-active" : ""
            }`}
            src="/icons/chevron-down.svg"
          />
        </div>
        {selectActive && options.length && showOptions ? (
          <div className="pp-select-items">
            {options.map((opt, i) => (
              <div
                key={i}
                className="pp-select-items-item"
                onClick={() => optionSelected(opt)}
              >
                {opt}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PPSelect;
