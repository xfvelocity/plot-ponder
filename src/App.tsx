import PPDateChip from "./components/date-chip/PPDateChip";

const App = () => {
  return (
    <div>
      <h1 className="underline">Hello World</h1>
      <PPDateChip date={new Date("2023-08-10")} />
    </div>
  );
};

export default App;
