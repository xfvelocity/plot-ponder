import { useRef, useState } from "react";
import clsx from "clsx";

// ** Styles **
import "@/assets/styles/components/select.scss";

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
}

const PPSelect = (props: Props) => {
  // ** Data **
  const select = useRef<HTMLDivElement | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  // ** Methods **
  document.addEventListener("click", (e: MouseEvent) =>
    clickOutside(e, select, () => setIsSelectOpen(false))
  );

  const optionSelected = (option: SelectOption): void => {
    if (option.value != props.selectedOption && isSelectOpen) {
      props.setSelectedOption(option.value);
      setIsSelectOpen(false);
    }
  };

  const findMatchingOption = (): string => {
    const matchingOption = props.options.find(
      (option) => option.value == props.selectedOption
    );

    return matchingOption ? matchingOption.text : "";
  };

  return (
    <div ref={select}>
      <div className="pp-select">
        <div
          className={clsx(`pp-select-toggle pp-input pp-input-outlined`, {
            "pp-input-active": props.selectedOption || isSelectOpen,
          })}
          onClick={() => setIsSelectOpen(true)}
        >
          <label className={`pp-text-colour-grey-darken-2`}>
            {props.label}
          </label>
          <span className="pp-select-value">{findMatchingOption()}</span>

          <PPIcon
            className={clsx(`pp-select-arrow pp-select-s-arrow`, {
              "pp-select-arrow-active": isSelectOpen,
            })}
            src="chevron-down"
            colour="grey-darken-2"
            size={12}
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

export default PPSelect;
