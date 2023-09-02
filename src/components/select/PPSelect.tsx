import { useState } from "react";

import "./ppSelect.scss";

interface SelectOption {
  text: string;
  value: any;
}

interface Props {
  colour?: string;
  label: string;
  position?: string;
  options: SelectOption[];
}

const PPSelect = ({ colour, label, position, options }: Props) => {
  const [selectActive, setSelectActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [noResults, setNoResults] = useState<boolean>(false);

  const optionSelected = (option: SelectOption): void => {
    if (option.text !== value && selectActive) {
      console.log(option);
      //   emits("update:modelValue", props.valueOnly ? option.value : option);
      setSelectActive(false);
    }
  };

  return (
    <div>
      <div className="pp-select">
        <div
          className={`pp-select-toggle pp-input ${[
            `pp-border-colour-${colour} pp-text-colour-${colour}`,
            {
              "pp-input-populated": !!value,
              "pp-input-active": selectActive,
            },
          ]}`}
          onClick={() => setSelectActive(true)}
        >
          <label className={`pp-text-colour-${colour}`}>{label}</label>
          <span className="pp-select-value">{value}</span>

          {/* <pp-loading v-if="loading" class="xf-pr-2" :size="16" /> */}
          {/* <xf-icon
          class="xf-mb-1 xf-mr-1 xf-select-arrow"
          :class="{ 'xf-select-arrow-active': isSelectActive }"
          :size="14"
          :fill="colour"
          src="icons/chevron-down.svg"
          @click.stop="toggleSelect(!isSelectActive)"
        /> */}
        </div>
        {selectActive && (options.length || noResults) && (
          <div
            className={`pp-select-items ${{
              "pp-select-items-top": position === "top",
            }}`}
          >
            {options.length ? (
              options.map((opt, i) => (
                <div
                  key={i}
                  className="pp-select-items-item"
                  onClick={() => optionSelected(opt)}
                >
                  {opt.text}
                </div>
              ))
            ) : (
              <p className="pp-select-no-results">No results</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PPSelect;
