import PPSelect from "./components/select/PPSelect";

const App = () => {
  return (
    <div>
      <h1 className="underline">Hello World</h1>

      <div style={{ margin: "10px" }}>
        <PPSelect
          label="Types of Pizza"
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
