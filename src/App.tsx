import { useState } from "react";
import PPSelect from "./components/basic/select/PPSelect";

const App = () => {
  const [pizza, setPizza] = useState("");

  return (
    <div>
      <h1 className="underline">Hello World</h1>

      <div style={{ margin: "10px" }}>
        <PPSelect
          label="Types of Pizza"
          value={pizza}
          updateValue={setPizza}
          options={[
            { text: "Pepperoni", value: "pepperoni" },
            { text: "Chicken", value: "chicken" },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
