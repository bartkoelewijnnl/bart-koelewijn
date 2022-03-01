import { useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useAnimateInView = (initial: string, animate: string) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start(animate);
        } else {
            controls.set(initial);
        }
    }, [initial, animate, controls, inView]);

    return { ref, controls };
};
