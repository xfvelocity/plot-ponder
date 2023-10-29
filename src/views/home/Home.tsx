import { useEffect, useRef, useState } from "react";
import { api } from "@/api";

// ** Components **
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PPReview from "@/components/review/review/PPReview";
import PPReviewSkeleton from "@/components/review/skeleton/PPReviewSkeleton";

const Home = () => {
  const loader = useRef(null);
  const [page, setPage] = useState<number>(1);
  const [scrollDisabled, setScrollDisabled] = useState<boolean>(false);
  const [reviews, setReviews] = useState<any[]>([]);

  const getFeed = async (): Promise<void> => {
    const res = await api("GET", `feed?page=${page}`);

    setReviews([...reviews, ...res.data]);

    if (page === res.meta.totalPages || res.data.length === 0) {
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

      <div className="pp-max-width">
        {reviews.map((review, i) => (
          <PPReview review={review} showUser={true} key={i} />
        ))}

        {scrollDisabled ? null : (
          <div ref={loader} style={{ marginTop: "20px" }}>
            <PPReviewSkeleton amount={reviews.length === 0 ? 5 : 1} showUser />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
