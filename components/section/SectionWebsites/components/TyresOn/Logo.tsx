import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const curtainVariants: Variants = {
    initial: { x: 0, y: 0 },
    animate: { x: -6.5, y: 27.6 }
};

interface LogoAnimationProps {
    width: number | string;
    height: number | string;
    className?: string;
    onClick?(): void;
    isHover: boolean;
}

const LogoAnimation = ({ className, width, isHover, height, onClick }: LogoAnimationProps) => {

    return (
        <svg
            onClick={onClick}
            width={width}
            height={height}
            x="0px"
            y="0px"
            viewBox="0 0 208 26"
            className={className}
        >
            <path fill="#009982" d="M29.5,0.8h9.1L41.4,11l7.7-10.2h10.4L44.3,18l-1.6,7.2h-8.8l1.7-7.4L29.5,0.8z" />
            <path
                fill="#009982"
                d="M61.1,0.8h15.5c2.8,0.1,9.2,0.3,9.2,7c0,1-0.3,2.3-0.9,3.6c-1.4,2.6-3.5,3.4-5.5,4.1l4,9.6h-8.8l-3.2-8.5H66l-2,8.5h-8.6
L61.1,0.8L61.1,0.8z M67.3,11.1c5.8,0.1,7.5,0.1,8.4-0.5c0.7-0.5,1.4-1.4,1.4-2.2c0-1.6-1.3-2.1-2.5-2.1h-6.1L67.3,11.1L67.3,11.1z"
            />
            <path fill="#009982" d="M90.7,0.8H116l-1.3,5.4H98.1l-0.9,4H113l-1.3,5.4H95.9l-1,4h16.6l-1.3,5.5H85L90.7,0.8L90.7,0.8z" />
            <path
                fill="#009982"
                d="M121.6,17.4c0,0.7,0.1,1.6,1.1,2.3c1.1,0.8,2.7,1,4.2,0.9c2.6-0.1,4.1-1,4.1-2.5c0-1.6-1.5-1.8-4.1-2.5l-4.3-1.3
	c-1.8-0.6-4.5-1.4-5.6-3.9c-0.3-0.8-0.5-1.6-0.5-2.3c0-3,1.8-5.3,4.6-6.6c1.9-0.9,4.4-1.5,8.7-1.5c2.3,0,4.6,0.2,6.7,1
	c4.3,1.7,4.4,4.5,4.4,6.1L133,7.8c0.2-1.5-1.4-2.4-4.3-2.4c-2.7,0-3.8,1-3.8,1.9c0,1.2,1.7,1.8,3,2.2l5.2,1.5
	c2.5,0.8,4.6,1.4,5.7,3.4c0.5,0.9,0.8,2,0.8,3c0,1.8-0.9,5.1-5.2,7.2c-2.4,1.1-5.2,1.5-8.4,1.5c-6,0-9.2-1.7-10.4-2.8
	c-1.9-1.8-2-3.8-2-5.5L121.6,17.4L121.6,17.4z"
            />
            <path fill='#dedc00' d="M178,0.8h7.9l8.3,15.4l3.6-15.4h7.9L200,25.2h-7.9l-8.2-15.3l-3.5,15.3h-8.2L178,0.8L178,0.8z" />
            <path
                fill='#dedc00'
                d="M205.3,25.2c-1,0-1.9-0.8-1.9-1.9s0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9C207.2,24.3,206.4,25.1,205.3,25.2
	L205.3,25.2z M205.3,21.6c-1,0-1.7,0.8-1.7,1.7c0,0.9,0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7S206.3,21.6,205.3,21.6L205.3,21.6z
	 M205.3,22.1c0.2,0,0.4,0,0.6,0.1c0.3,0.1,0.4,0.4,0.4,0.6c0,0.4-0.3,0.5-0.4,0.6c0.1,0.1,0.2,0.2,0.3,0.5s0.1,0.5,0.2,0.8h-0.7
	c-0.1-0.1-0.1-0.3-0.1-0.5c-0.1-0.5-0.1-0.5-0.5-0.5v1h-0.6v-2.4L205.3,22.1L205.3,22.1z M205,23h0.3c0.2,0,0.3,0,0.3,0
	c0.1,0,0.1-0.1,0.1-0.2c0-0.2-0.1-0.2-0.2-0.2c0,0-0.1,0-0.5,0L205,23L205,23z"
            />
            <path fill="#009982" d="M26.8,6.4l1.3-5.6H1.3L0,6.4H26.8z" />
            <path fill="#009982" d="M4.8,25.2h8.8l4.5-18.5L8.5,8.9L4.8,25.2z" />
            <motion.g variants={curtainVariants} initial="initial" animate={isHover ? 'animate' : 'initial'}>
                <path
                    fill='#dedc00'
                    d="M164.6-20c1.1,0,2.2,0.1,3.2,0.3s2.1,0.4,3.1,0.7c1,0.3,1.9,0.8,2.8,1.3c0.9,0.5,1.6,1.2,2.3,1.9
            c0.6,0.6,1,1.3,1.3,1.9c0.3,0.6,0.5,1.3,0.7,1.9c0.2,0.6,0.3,1.1,0.3,1.6c0,0.5,0.1,0.9,0.1,1.2c0,1-0.1,2-0.3,3.2
            c-0.2,1.1-0.6,2.3-1.2,3.4c-0.5,1.1-1.3,2.2-2.2,3.2s-2,2-3.3,2.8s-2.8,1.4-4.5,1.9c-1.7,0.5-3.7,0.7-6,0.7c-1,0-2.1-0.1-3.1-0.2
            c-1-0.1-2-0.3-3-0.6c-0.9-0.3-1.8-0.7-2.7-1.1c-0.8-0.5-1.6-1-2.3-1.7c-0.4-0.4-0.7-0.8-1.1-1.3c-0.4-0.5-0.7-1.1-1-1.7
            c-0.3-0.6-0.5-1.3-0.7-2.1c-0.2-0.8-0.3-1.6-0.3-2.5c0-1,0.1-2,0.4-3.1c0.3-1.1,0.7-2.2,1.3-3.4c0.6-1.1,1.3-2.2,2.3-3.2
            s2-1.9,3.4-2.7c1.3-0.8,2.8-1.4,4.6-1.8C160.4-19.9,162.4-20.1,164.6-20z M163.9-14.6c-1.5,0-2.7,0.3-3.8,0.9
            c-1.1,0.6-1.9,1.3-2.6,2.2c-0.7,0.9-1.2,1.9-1.5,2.9s-0.5,2.1-0.5,3.1c0,0.8,0.1,1.6,0.4,2.4c0.3,0.8,0.6,1.4,1.1,2
            c0.5,0.6,1.1,1,1.8,1.3c0.7,0.3,1.6,0.5,2.6,0.5c1.2,0,2.3-0.2,3.3-0.7c1-0.5,1.9-1.1,2.6-1.9c0.7-0.8,1.3-1.8,1.7-3
            c0.4-1.1,0.6-2.4,0.6-3.7c0-1.2-0.2-2.3-0.6-3s-0.9-1.4-1.4-1.8c-0.6-0.4-1.2-0.7-1.9-0.9C165.2-14.5,164.5-14.6,163.9-14.6z"
                />
                <path
                    fill='#dedc00'
                    d="M171.1-47.6c1.1,0,2.2,0.1,3.2,0.3c1.1,0.2,2.1,0.4,3.1,0.7c1,0.3,1.9,0.8,2.8,1.3c0.9,0.5,1.6,1.2,2.3,1.9
            c0.6,0.6,1,1.3,1.3,1.9c0.3,0.6,0.5,1.3,0.7,1.9c0.2,0.6,0.3,1.1,0.3,1.6c0,0.5,0.1,0.9,0.1,1.2c0,1-0.1,2-0.3,3.2
            c-0.2,1.1-0.6,2.3-1.2,3.4c-0.5,1.1-1.3,2.2-2.2,3.2s-2,2-3.3,2.8c-1.3,0.8-2.8,1.4-4.5,1.9c-1.7,0.5-3.7,0.7-6,0.7
            c-1,0-2.1-0.1-3.1-0.2c-1-0.1-2-0.3-3-0.6c-0.9-0.3-1.8-0.7-2.7-1.1c-0.8-0.5-1.6-1-2.3-1.7c-0.4-0.4-0.7-0.8-1.1-1.3
            c-0.4-0.5-0.7-1.1-1-1.7c-0.3-0.6-0.5-1.3-0.7-2.1c-0.2-0.8-0.3-1.6-0.3-2.5c0-1,0.1-2,0.4-3.1c0.3-1.1,0.7-2.2,1.3-3.4
            c0.6-1.1,1.3-2.2,2.3-3.2c0.9-1,2-1.9,3.4-2.7c1.3-0.8,2.8-1.4,4.6-1.8C167-47.5,168.9-47.7,171.1-47.6z M170.5-42.2
            c-1.5,0-2.7,0.3-3.8,0.9s-1.9,1.3-2.6,2.2c-0.7,0.9-1.2,1.9-1.5,2.9c-0.3,1.1-0.5,2.1-0.5,3.1c0,0.8,0.1,1.6,0.4,2.4
            c0.3,0.8,0.6,1.4,1.1,2c0.5,0.6,1.1,1,1.8,1.3c0.7,0.3,1.6,0.5,2.6,0.5c1.2,0,2.3-0.2,3.3-0.7c1-0.5,1.9-1.1,2.6-1.9
            c0.7-0.8,1.3-1.8,1.7-3c0.4-1.1,0.6-2.4,0.6-3.7c0-1.2-0.2-2.3-0.6-3s-0.9-1.4-1.4-1.8c-0.6-0.4-1.2-0.7-1.9-0.9
            C171.7-42.1,171.1-42.2,170.5-42.2z"
                />
                <path
                    fill='#dedc00'
                    d="M158.1,7.5c1.1,0,2.2,0.1,3.2,0.3c1.1,0.2,2.1,0.4,3.1,0.7c1,0.3,1.9,0.8,2.8,1.3c0.9,0.5,1.6,1.2,2.3,1.9
            c0.6,0.6,1,1.3,1.3,1.9c0.3,0.6,0.5,1.3,0.7,1.9c0.2,0.6,0.3,1.1,0.3,1.6c0,0.5,0.1,0.9,0.1,1.2c0,1-0.1,2-0.3,3.2
            c-0.2,1.1-0.6,2.3-1.2,3.4c-0.5,1.1-1.3,2.2-2.2,3.2s-2,2-3.3,2.8c-1.3,0.8-2.8,1.4-4.5,1.9c-1.7,0.5-3.7,0.7-6,0.7
            c-1,0-2.1-0.1-3.1-0.2c-1-0.1-2-0.3-3-0.6c-0.9-0.3-1.8-0.7-2.7-1.1c-0.8-0.5-1.6-1-2.3-1.7c-0.4-0.4-0.7-0.8-1.1-1.3
            c-0.4-0.5-0.7-1.1-1-1.7c-0.3-0.6-0.5-1.3-0.7-2.1c-0.2-0.8-0.3-1.6-0.3-2.5c0-1,0.1-2,0.4-3.1c0.3-1.1,0.7-2.2,1.3-3.4
            c0.6-1.1,1.3-2.2,2.3-3.2c0.9-1,2-1.9,3.4-2.7s2.8-1.4,4.6-1.8C153.9,7.7,155.9,7.5,158.1,7.5z M157.4,13c-1.5,0-2.7,0.3-3.8,0.9
            c-1.1,0.6-1.9,1.3-2.6,2.2c-0.7,0.9-1.2,1.9-1.5,2.9c-0.3,1.1-0.5,2.1-0.5,3.1c0,0.8,0.1,1.6,0.4,2.4c0.3,0.8,0.6,1.4,1.1,2
            c0.5,0.6,1.1,1,1.8,1.3c0.7,0.3,1.6,0.5,2.6,0.5c1.2,0,2.3-0.2,3.3-0.7c1-0.5,1.9-1.1,2.6-1.9c0.7-0.8,1.3-1.8,1.7-3
            c0.4-1.1,0.6-2.4,0.6-3.7c0-1.2-0.2-2.3-0.6-3c-0.4-0.8-0.9-1.4-1.4-1.8c-0.6-0.4-1.2-0.7-1.9-0.9C158.6,13.1,158,13,157.4,13z"
                />
            </motion.g>
        </svg>
    );
};

export default LogoAnimation;
