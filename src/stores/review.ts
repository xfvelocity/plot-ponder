import { Content } from "@/types/review.types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ReviewStore {
  review: {
    type: string;
  };
  content: Content;
  setContent: (content: Content) => void;
  reset: () => void;
  resetContent: () => void;
}

const initialContentState: Content = {
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
      setContent: (content: Content) => set({ content }),
      reset: () => set(initialState),
      resetContent: () => set({ content: { ...initialContentState } }),
    })),
    { name: "review" }
  )
);
