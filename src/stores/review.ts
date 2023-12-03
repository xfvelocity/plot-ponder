import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface ReviewContent {
  name: string;
  id: number;
  genres: string[];
  release_date?: string;
  first_air_date?: string;
  overview: string;
  image: string;
}

interface Review {
  type: string;
}

interface ReviewStore {
  review: Review;
  content: ReviewContent;
  setContent: (content: ReviewContent) => void;
  reset: () => void;
  resetContent: () => void;
}

const initialContentState: ReviewContent = {
  name: "",
  id: 0,
  genres: [],
  release_date: "",
  overview: "",
  image: "",
};

const initialState = {
  review: {
    type: "",
  },
  content: { ...initialContentState },
};

export const useReviewStore = create<ReviewStore>()(
  persist(
    devtools((set) => ({
      ...initialState,
      setContent: (content: ReviewContent) => set({ content }),
      reset: () => set(initialState),
      resetContent: () => set({ content: { ...initialContentState } }),
    })),
    { name: "review" }
  )
);
