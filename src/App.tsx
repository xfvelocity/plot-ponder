// ** Components **
import { useState } from "react";

// ** Components **
import PPSelect from "./components/basic/select/PPSelect";
import PPAutoComplete from "./components/basic/select/PPAutocomplete";
import Chip from "./components/basic/chip/chip.tsx";
import PPDateChip from "./components/basic/date-chip/PPDateChip.tsx";
import PPButton from "./components/basic/button/PPButton.tsx";

const App = () => {
  // ** Data **
  const [pizza, setPizza] = useState("");

  return (
    <div style={{ margin: "20px" }}>
      <PPButton text="Click me" />
      <Chip text="Action" />
      <PPDateChip date={new Date("2023-08-10")} />

      <PPSelect
        label="Types of Pizza"
        selectedOption={pizza}
        setSelectedOption={setPizza}
        options={["Pepperoni", "Chicken"]}
      />

      <PPAutoComplete
        label="Types of Pizza"
        selectedOption={pizza}
        setSelectedOption={setPizza}
        options={["Pepperoni", "Chicken"]}
      />
    </div>
  );
};

export default App;
