import { create } from "zustand";
import { devtools } from "zustand/middleware";

// ** Types **
interface Snackbar {
  text: string;
  type: "success" | "error";
  isOpen: boolean;
}

interface SnackbarStore {
  snackbar: Snackbar;
  showAuthModal: boolean;
  setSnackbar: (snackbar: Snackbar) => void;
  setShowAuthModal: (value: boolean) => void;
}

export const useAppStore = create<SnackbarStore>()(
  devtools((set) => ({
    snackbar: {
      text: "",
      type: "success",
      isOpen: false,
    },
    showAuthModal: false,
    setSnackbar: (snackbar) => set({ snackbar }),
    setShowAuthModal: (value) => set({ showAuthModal: value }),
  })),
);
