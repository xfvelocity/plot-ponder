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
  review: Review;
  film: ReviewFilm;
  setFilm: (film: ReviewFilm) => void;
  reset: () => void;
  resetFilm: () => void;
}

const initialFilmState: ReviewFilm = {
  name: "",
  id: 0,
  genres: [],
  release_date: "",
  overview: "",
  image: "",
};

const initialState = {
  review: {},
  film: { ...initialFilmState },
};

export const useReviewStore = create<ReviewStore>()(
  persist(
    devtools((set) => ({
      ...initialState,
      setFilm: (film: ReviewFilm) => set({ film }),
      reset: () => set(initialState),
      resetFilm: () => set({ film: { ...initialFilmState } }),
    })),
    { name: "review" }
  )
);
