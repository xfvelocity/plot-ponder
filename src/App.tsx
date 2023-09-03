// ** Components **
import PPButton from "./components/button/PPButton";
import Chip from "./components/chip/chip.tsx";

const App = () => {
  return (
    <div style={{ margin: "10px" }}>
      <PPButton text="Click me" />
      <Chip text="Action" />
    </div>
  );
};

export default App;
