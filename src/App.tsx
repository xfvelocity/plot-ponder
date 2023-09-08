import { useState } from "react";

// ** Components **
import PPSelect from "./components/basic/select/PPSelect";
import Chip from "./components/chip/chip.tsx";

const App = () => {
  // ** Data **
  const [pizza, setPizza] = useState("");

  return (
    <div style={{ margin: "20px" }}>
      <Chip text="Action" />

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
