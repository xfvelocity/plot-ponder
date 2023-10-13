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
  setSnackbar: (user: Snackbar) => void;
}

export const useAppStore = create<SnackbarStore>()(
  devtools((set) => ({
    snackbar: {
      text: "",
      type: "success",
      isOpen: false,
    },
    setSnackbar: (snackbar) => set({ snackbar }),
  }))
);
