import { useState } from "react";
import PPSelect from "./components/basic/select/PPSelect";
import PPAutoComplete from "./components/basic/select/PPAutocomplete";
import PPChip from "./components/basic/chip/PPChip";

const App = () => {
  const [pizza, setPizza] = useState("");

  const movie = {
    genres: ["action", "superhero"],
  };

  return (
    <div>
      <h1 className="underline">Hello World</h1>

      <div style={{ margin: "10px" }}>
        <PPSelect
          label="Types of Pizza"
          value={pizza}
          updateValue={setPizza}
          options={["Pepperoni", "Chicken"]}
        />

        <PPAutoComplete />
      </div>
    </div>
  );
};

export default App;
