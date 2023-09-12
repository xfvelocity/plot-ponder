import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  uuid: string;
  name: string;
  email: string;
}

interface UserStore {
  user: User;
  setUser: (user: User) => void;
}

/*
    Zustand: https://github.com/pmndrs/zustand
    Allows you to use variables anywhere in the app

    - devtools: Allows you to use the redux devtools extension to 
    see the values/changes: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

    - persist: stores the data in local storage with the name "user"
*/
export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: {
          uuid: "",
          name: "",
          email: "",
        },
        setUser: (user) =>
          set(() => ({
            user,
          })),
      }),
      {
        name: "user",
      }
    )
  )
);
