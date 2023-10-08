// ** Components **
import Navbar from "@/components/navbar/Navbar";
import DatePicker from "@/components/date-picker/DatePicker";

const Home = () => {
  return (
    <>
      <Navbar />

      <div>
        <h1>Home</h1>
        <DatePicker />
      </div>
    </>
  );
};

export default Home;
