import { useEffect, useState, useRef } from "react";

interface ViewportSize {
    viewWidth: number;
    viewHeight: number;
}
function useViewportSize(): ViewportSize {
    const [viewport, setViewportSize] = useState<ViewportSize>({
        viewWidth: 0,
        viewHeight: 0,
    });

    const timer = useRef<NodeJS.Timeout>();
    const sizeDebouncer = () => {
        clearTimeout(timer.current);
        timer.current = setTimeout(handleSize, 1000);
    };
    const handleSize = () => {
        setViewportSize({
            viewWidth: window.innerWidth,
            viewHeight: window.innerHeight * 1.01,
        });
    };
    useEffect(() => {
        handleSize();
        window.addEventListener("resize", sizeDebouncer);
        return () => {
            window.removeEventListener("resize", sizeDebouncer);
        };
    }, []);

    return viewport;
}

export default useViewportSize;
