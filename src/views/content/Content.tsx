import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { api } from "@/api";

// ** Types **
import type { Content, Review } from "@/types/review.types";

// ** Components **
import ContentSummary from "@/components/content-summary/ContentSummary";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PPReviewSkeleton from "@/components/review/skeleton/PPReviewSkeleton";
import PPReview from "@/components/review/review/PPReview";

const Content = () => {
  const params = useParams();

  // ** Data **
  const loader = useRef(null);
  const [page, setPage] = useState<number>(1);
  const [scrollDisabled, setScrollDisabled] = useState<boolean>(false);
  const [content, setContent] = useState<Content>();
  const [contentReviews, setContentReviews] = useState<Review[]>([]);

  // ** Methods **
  const getContent = async (): Promise<void> => {
    const type = params.type === "film" ? "movie" : "tv";
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${params.id}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      },
    );

    const { title, id, genres, release_date, overview, poster_path } = res.data;

    setContent({
      name: title,
      id,
      genres: genres.map((x: any) => x.name),
      release_date,
      overview,
      image: `https://image.tmdb.org/t/p/original${poster_path}`,
    });
  };

  const getContentReview = async (): Promise<void> => {
    const res = await api("GET", `/content/${params.id}/reviews`);

    setContentReviews([...contentReviews, ...res.data]);

    if (page === res.meta.totalPages || res.data.length === 0) {
      setScrollDisabled(true);
    } else {
      setPage(page + 1);
    }
  };

  // ** Pagination **
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getContentReview();
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
  }, [contentReviews]);

  useEffect(() => {
    getContent();
    getContentReview();
  }, []);

  return (
    <>
      <Navbar />

      {content ? (
        <div className="pp-max-width">
          <ContentSummary content={content} />

          <div style={{ margin: "20px 10px" }}>
            {contentReviews.map((review, i) => (
              <PPReview
                review={review}
                showUser={true}
                showContent={false}
                key={i}
              />
            ))}

            {scrollDisabled ? null : (
              <div ref={loader}>
                <PPReviewSkeleton
                  amount={contentReviews.length === 0 ? 5 : 1}
                  showUser
                  showContent={false}
                />
              </div>
            )}
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  );
};

export default Content;
