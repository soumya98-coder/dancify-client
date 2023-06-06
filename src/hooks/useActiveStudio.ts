import { Studio } from "@/API";
import { create } from "zustand";

interface AuthDrawerState {
  activeStudio: Studio | undefined;
  setActiveStudio: (studio: Studio) => void;
}

const useActiveStudio = create<AuthDrawerState>(set => ({
  activeStudio: undefined,
  setActiveStudio: (studio: Studio) => {
    set({ activeStudio: studio });
  },
}));

export default useActiveStudio;
