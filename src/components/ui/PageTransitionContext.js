import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const PageTransitionContext = createContext(null);
export const PageTransitionProvider = ({ children, }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const startTransition = () => {
        if (isLoading)
            return;
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
    return (_jsx(PageTransitionContext.Provider, { value: {
            isLoading,
            progress,
            startTransition,
        }, children: children }));
};
export default PageTransitionContext;
