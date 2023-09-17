import { useState } from "react";

// ** Components **
import PPSelect from "./PPSelect";

// ** Types **
interface Props {
  label: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  options: string[];
}

const PPAutoComplete = (props: Props) => {
  // ** Data **
  const [search, setSearch] = useState("");

  // TODO: Filter options based on search with API
  return (
    <PPSelect
      label={props.label}
      selectedOption={props.selectedOption}
      setSelectedOption={props.setSelectedOption}
      options={props.options}
    >
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </PPSelect>
  );
};

export default PPAutoComplete;
