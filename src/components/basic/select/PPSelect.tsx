import { useRef, useState } from "react";
import { ReactSVG } from "react-svg";

// ** Styles **
import "./ppSelect.scss";

// ** Composables **
import { clickOutside } from "@/composables/generic";

// ** Types **
interface Props {
  label: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  children?: any;
}

const PPSelect = (props: Props) => {
  // ** Data **
  const select = useRef<HTMLDivElement | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  // ** Methods **
  document.addEventListener("click", (e: MouseEvent) =>
    clickOutside(e, select, () => setIsSelectOpen(false))
  );

  const optionSelected = (option: string): void => {
    if (option !== props.selectedOption && isSelectOpen) {
      props.setSelectedOption(option);
      setIsSelectOpen(false);
    }
  };

  return (
    <div ref={select}>
      <div className="pp-select">
        <div
          className={`pp-select-toggle pp-input pp-input-outlined 
             ${props.selectedOption || isSelectOpen ? "pp-input-active" : ""}`}
          onClick={() => setIsSelectOpen(true)}
        >
          <label className={`pp-text-colour-black`}>{props.label}</label>
          <span className="pp-select-value">{props.selectedOption}</span>

          {props.children}

          <ReactSVG
            className={`pp-select-arrow ${
              isSelectOpen ? "pp-select-arrow-active" : ""
            }`}
            src="/icons/chevron-down.svg"
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
                {option}
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
