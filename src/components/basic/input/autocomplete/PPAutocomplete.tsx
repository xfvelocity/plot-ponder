import { useRef, useState } from "react";
import clsx from "clsx";

// ** Styles **
import "@/assets/styles/components/select.scss";

// ** Composables **
import { clickOutside } from "@/composables/generic";

// ** Components **
import PPIcon from "@/components/basic/icon/PPIcon";
import PPLoading from "@/components/basic/loading/PPLoading";

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
  loading?: boolean;
}

const PPAutoComplete = (props: Props) => {
  // ** Data **
  const select = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  // ** Methods **
  document.addEventListener("click", (e: MouseEvent) =>
    clickOutside(e, select, () => setIsSelectOpen(false))
  );

  const optionSelected = (option: SelectOption): void => {
    if (option.value != props.selectedOption && isSelectOpen) {
      props.setSelectedOption(option.value);
      setSearchTerm(option.text);
      setIsSelectOpen(false);
    }
  };

  return (
    <div ref={select}>
      <div className="pp-select">
        <div
          className={clsx(`pp-select-toggle pp-input pp-input-outlined`, {
            "pp-input-active":
              props.selectedOption || isSelectOpen || searchTerm,
          })}
          onClick={() => setIsSelectOpen(true)}
        >
          <label className={`pp-text-colour-black`}>{props.label}</label>
          <input
            value={searchTerm}
            onChange={(e) => {
              props.setSearchTerm(e.target.value);
              setSearchTerm(e.target.value);
            }}
          />

          <div className="pp-select-icons">
            {props.loading && <PPLoading size={12} />}

            <PPIcon
              className={`pp-select-arrow ${
                isSelectOpen ? "pp-select-arrow-active" : ""
              }`}
              src="chevron-down"
              colour="grey-darken-2"
              size={12}
            />
          </div>
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
        ) : null}
      </div>
    </div>
  );
};

export default PPAutoComplete;
