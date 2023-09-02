import { useRef, useState } from "react";
import { ReactSVG } from "react-svg";

import "./ppSelect.scss";
import { clickOutside } from "../../../composables/generic";

interface SelectOption {
  text: string;
  value: string | number;
}

interface Props {
  label: string;
  options: SelectOption[];
  value: string;
  updateValue: React.Dispatch<React.SetStateAction<any>>;
}

const PPSelect = ({ label, options, value = "", updateValue }: Props) => {
  // ** Data **
  const select = useRef<HTMLDivElement | null>(null);

  const [selectActive, setSelectActive] = useState<boolean>(false);

  // ** Methods **
  document.addEventListener("click", (e: MouseEvent) =>
    clickOutside(e, select, () => setSelectActive(false))
  );

  const optionSelected = (option: SelectOption): void => {
    if (option.text !== value && selectActive) {
      updateValue(option.value);
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

          <ReactSVG
            className={`pp-select-arrow ${
              selectActive ? "pp-select-arrow-active" : ""
            }`}
            src="/icons/chevron-down.svg"
          />
        </div>
        {selectActive && options.length && (
          <div className="pp-select-items">
            {options.map((opt, i) => (
              <div
                key={i}
                className="pp-select-items-item"
                onClick={() => optionSelected(opt)}
              >
                {opt.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PPSelect;
