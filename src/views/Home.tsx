import { useEffect, useRef, useState } from "react";
import { api } from "@/api";

// ** Components **
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PPLoading from "@/components/basic/loading/PPLoading";
import PPReview from "@/components/review/PPReview";

const Home = () => {
  const loader = useRef(null);
  const [page, setPage] = useState<number>(1);
  const [scrollDisabled, setScrollDisabled] = useState<boolean>(false);
  const [reviews, setReviews] = useState<any[]>([]);

  const getFeed = async (): Promise<void> => {
    const res = await api("GET", `feed?page=${page}`);

    setReviews([...reviews, ...res.data]);

    if (page === res.meta.totalPages) {
      setScrollDisabled(true);
    } else {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getFeed();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [reviews]);

  return (
    <>
      <Navbar />

      <div>
        {reviews.map((review, i) => (
          <PPReview review={review} key={i} />
        ))}

        {scrollDisabled ? null : (
          <div ref={loader} style={{ marginTop: "20px" }}>
            <PPLoading className="pp-mx-auto" size={24} />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
