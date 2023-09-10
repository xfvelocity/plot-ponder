// ** Components **
import PPTextInput from "@/components/basic/input/text-input/PPTextInput";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />

      <div style={{ margin: "20px" }}>
        <PPTextInput label="Name" value={name} setValue={setName} />
      </div>
    </>
  );
};

export default Home;
