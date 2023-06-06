import { create } from "zustand";

interface AuthDrawerState {
  isOpen: boolean;
  activeAuthState:
    | "login"
    | "register"
    | "forgotPassword"
    | "confirmRegistarion"
    | "resetPassword";
  setActiveAuthState: (state: AuthDrawerState["activeAuthState"]) => void;
  isLoading: boolean;
  setLoading: (loading: AuthDrawerState["isLoading"]) => void;
  onOpen: () => void;
  onClose: () => void;
  tempEmail: string;
  setTempEmail: (email: string) => void;
}

const useAuthDrawer = create<AuthDrawerState>(set => ({
  isOpen: false,
  tempEmail: "",
  setTempEmail: (email: AuthDrawerState["tempEmail"]) =>
    set({ tempEmail: email }),
  activeAuthState: "login",
  isLoading: false,
  setLoading: (loading: AuthDrawerState["isLoading"]) =>
    set({ isLoading: loading }),
  setActiveAuthState: (state: AuthDrawerState["activeAuthState"]) =>
    set({ activeAuthState: state }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthDrawer;
