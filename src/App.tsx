import { useState } from "react";

// ** Components **
import PPSelect from "./components/basic/select/PPSelect";

const App = () => {
  // ** Data **
  const [pizza, setPizza] = useState("");

  return (
    <div style={{ margin: "20px" }}>
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
