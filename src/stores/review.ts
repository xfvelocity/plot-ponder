import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ReviewFilm {
  name: string;
  id: number;
}

interface Review {
  film: ReviewFilm;
}

interface ReviewStore {
  progress: number;
  review: Review;
  setProgress: (progress: number) => void;
  setFilm: (film: ReviewFilm) => void;
}

export const useReviewStore = create<ReviewStore>()(
  devtools((set) => ({
    progress: 1,
    review: {
      film: {
        name: "",
        id: 0,
      },
    },
    setProgress: (progress: number) =>
      set(() => ({
        progress,
      })),
    setFilm: (film: ReviewFilm) =>
      set(() => ({
        review: {
          film,
        },
      })),
  }))
);
