import { useState } from "react";

// ** Components **
import PPSelect from "./components/basic/select/PPSelect";
import Chip from "./components/chip/chip.tsx";
import PPDateChip from "./components/date-chip/PPDateChip";

const App = () => {
  // ** Data **
  const [pizza, setPizza] = useState("");

  return (
    <div style={{ margin: "20px" }}>
      <Chip text="Action" />
      <PPDateChip date={new Date("2023-08-10")} />

      <PPSelect
        label="Types of Pizza"
        selectedOption={pizza}
        setSelectedOption={setPizza}
        options={["Pepperoni", "Chicken"]}
      />
    </div>
  );
};

export default App;
