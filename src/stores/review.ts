import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface ReviewFilm {
  name: string;
  id: number;
  genres: string[];
  release_date: string;
  overview: string;
  image: string;
}

interface Review {}

interface ReviewStore {
  progress: number;
  review: Review;
  film: ReviewFilm;
  setProgress: (progress: number) => void;
  setFilm: (film: ReviewFilm) => void;
  reset: () => void;
}

const initialState = {
  progress: 1,
  review: {},
  film: {
    name: "",
    id: 0,
    genres: [],
    release_date: "",
    overview: "",
    image: "",
  },
};

export const useReviewStore = create<ReviewStore>()(
  persist(
    devtools((set) => ({
      ...initialState,
      setProgress: (progress: number) => set({ progress }),
      setFilm: (film: ReviewFilm) => set({ film }),
      reset: () => set(initialState),
    })),
    { name: "review" }
  )
);
