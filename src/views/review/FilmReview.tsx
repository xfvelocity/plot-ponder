import { useReviewStore } from "@/stores/review";

import Navbar from "@/components/navbar/Navbar";

const FilmReview = () => {
  const { progress, review } = useReviewStore();

  return (
    <>
      <Navbar
        title="Review"
        progress={{
          current: progress,
          total: 2,
        }}
        showBackBtn
      />

      {review.film.name}
    </>
  );
};

export default FilmReview;
