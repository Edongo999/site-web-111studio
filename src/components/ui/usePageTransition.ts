import { useContext } from "react";
import PageTransitionContext from "./PageTransitionContext";

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition doit être utilisé à l'intérieur de PageTransitionProvider",
    );
  }

  return context;
};