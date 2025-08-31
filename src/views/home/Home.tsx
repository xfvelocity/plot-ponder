import { useEffect, useRef, useState } from "react";
import { useUserStore } from "@/stores/user";
import { api } from "@/api";

// ** Components **
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PPReview from "@/components/review/review/PPReview";
import PPReviewSkeleton from "@/components/review/skeleton/PPReviewSkeleton";

const Home = () => {
  const { user } = useUserStore();

  // ** Data **
  const loader = useRef(null);
  const [page, setPage] = useState<number>(1);
  const [scrollDisabled, setScrollDisabled] = useState<boolean>(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // ** Methods **
  const getFeed = async (): Promise<void> => {
    setLoading(true);

    const res = await api("GET", `feed?page=${page}`);

    setReviews([...reviews, ...res.data]);

    if (page === res.meta.totalPages || res.data.length === 0) {
      setScrollDisabled(true);
    } else {
      setPage(page + 1);
    }

    setLoading(false);
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
      },
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

  useEffect(() => {
    setPage(1);
    setScrollDisabled(false);
    setReviews([]);

    getFeed();
  }, [user.uuid]);

  return (
    <>
      <Navbar />

      <div className="pp-max-width" style={{ marginTop: "20px" }}>
        {reviews.map((review, i) => (
          <PPReview review={review} showUser={true} key={i} />
        ))}

        {!reviews.length && !loading ? (
          <p style={{ textAlign: "center" }}>No reviews found</p>
        ) : null}

        {scrollDisabled ? null : (
          <div ref={loader}>
            <PPReviewSkeleton amount={reviews.length === 0 ? 5 : 1} showUser />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
