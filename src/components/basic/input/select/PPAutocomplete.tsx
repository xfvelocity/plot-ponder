import { useRef, useState } from "react";
import clsx from "clsx";

// ** Styles **
import "./ppSelect.scss";

// ** Composables **
import { clickOutside } from "@/composables/generic";

// ** Components **
import PPIcon from "@/components/basic/icon/PPIcon";
// ** Types **
export interface SelectOption {
  text: string;
  value: string | number;
}

interface Props {
  label: string;
  options: SelectOption[];
  selectedOption: string | number;
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  setSearchTerm: (val: string) => void;
  searchTerm?: string;
}

const PPAutoComplete = (props: Props) => {
  // ** Data **
  const select = useRef<HTMLDivElement | null>(null);
  const [term, setTerm] = useState<string>("");
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  // ** Methods **
  document.addEventListener("click", (e: MouseEvent) =>
    clickOutside(e, select, () => setIsSelectOpen(false))
  );

  const optionSelected = (option: SelectOption): void => {
    if (option.value != props.selectedOption && isSelectOpen) {
      props.setSelectedOption(option.value);
      setTerm(option.text);
      setIsSelectOpen(false);
    }
  };

  return (
    <div ref={select}>
      <div className="pp-select">
        <div
          className={clsx(`pp-select-toggle pp-input pp-input-outlined`, {
            "pp-input-active": props.selectedOption || isSelectOpen || term,
          })}
          onClick={() => setIsSelectOpen(true)}
        >
          <label className={`pp-text-colour-black`}>{props.label}</label>
          <input
            value={term}
            onChange={(e) => {
              props.setSearchTerm(e.target.value);
              setTerm(e.target.value);
            }}
          />

          <PPIcon
            className={`pp-select-arrow ${
              isSelectOpen ? "pp-select-arrow-active" : ""
            }`}
            src="chevron-down"
          />
        </div>
        {isSelectOpen && props.options.length ? (
          <div className="pp-select-items">
            {props.options.map((option, i) => (
              <div
                key={i}
                className="pp-select-items-item"
                onClick={() => optionSelected(option)}
              >
                {option.text}
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

export default PPAutoComplete;
