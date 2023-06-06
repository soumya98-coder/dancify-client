import { create } from "zustand";

interface AuthDrawerState {
  userData: {
    userID: string;
    email: string;
    email_verified: boolean;
  };
  setUserData: (userData: AuthDrawerState["userData"]) => void;
}

const useUserData = create<AuthDrawerState>(set => ({
  userData: {
    userID: "",
    email: "",
    email_verified: false,
  },
  setUserData: (userData: AuthDrawerState["userData"]) =>
    set({ userData: userData }),
}));

export default useUserData;
