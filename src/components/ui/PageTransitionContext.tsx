import React, { createContext, useState } from "react";

interface PageTransitionContextType {
  isLoading: boolean;
  progress: number;
  startTransition: () => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(
  null,
);

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startTransition = () => {
    if (isLoading) return;

    setIsLoading(true);
    setProgress(0);

    const duration = 1500;
    const intervalTime = duration / 50;

    let currentProgress = 0;

    const progressInterval = window.setInterval(() => {
      currentProgress += 2;

      if (currentProgress >= 100) {
        currentProgress = 100;
        window.clearInterval(progressInterval);
      }

      setProgress(currentProgress);
    }, intervalTime);

    window.setTimeout(() => {
      window.clearInterval(progressInterval);
      setProgress(100);

      window.setTimeout(() => {
        setIsLoading(false);
      }, 150);
    }, duration);
  };

  return (
    <PageTransitionContext.Provider
      value={{
        isLoading,
        progress,
        startTransition,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};

export default PageTransitionContext;
