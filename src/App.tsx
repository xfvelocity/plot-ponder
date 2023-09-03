// ** Components **
import PPButton from "./components/basic/button/PPButton.tsx";
import Chip from "./components/basic/chip/chip.tsx";

const App = () => {
  return (
    <div style={{ margin: "10px" }}>
      <PPButton text="Click me" />
      <Chip text="Action" />
    </div>
  );
};

export default App;
