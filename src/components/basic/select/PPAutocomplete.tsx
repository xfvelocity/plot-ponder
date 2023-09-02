import { useState } from "react";

import PPSelect from "./PPSelect";

const PPAutoComplete = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  const options: string[] = ["Pepper", "Salt", "Vinegar"];

  return (
    <PPSelect
      label="Chicken seasoning"
      value={value}
      updateValue={setValue}
      options={options}
      autocomplete={true}
    >
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </PPSelect>
  );
};

export default PPAutoComplete;
