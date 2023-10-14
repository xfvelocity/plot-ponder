import { useEffect, useState } from "react";

// ** Components **
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PPLoading from "@/components/basic/loading/PPLoading";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [reviews, setReviews] = useState<any[]>([]);

  const getFeed = async (): Promise<void> => {
    setLoading(true);

    setLoading(false);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      <Navbar />

      {loading ? <PPLoading /> : <div></div>}

      <Footer />
    </>
  );
};

export default Home;
