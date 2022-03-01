import { useTheme } from '@emotion/react';
import { motion, Transition, Variants } from 'framer-motion';
import { FC, useMemo } from 'react';

const OFFSET = 12;
const RADIUS = 104;
const STROKE_WIDTH = 32;
const ANGLE = 270;

interface GaugeProps {
    value: number;
    max: number;
}

const transition: Transition = { type: 'spring', stiffness: 60 };

const Gauge: FC<GaugeProps> = ({ value, max }) => {
    const theme = useTheme();

    // Render.
    const center = OFFSET + RADIUS;
    const innerRadius = RADIUS - STROKE_WIDTH / 2;
    const circumference = innerRadius * 2 * Math.PI;
    const arc = circumference * (ANGLE / 360);
    const dashArray = `${arc} ${circumference}`;
    const transform = `rotate(135, ${center}, ${center})`;
    const percentage = value / max;
    const offset = arc - percentage * arc;
    const rotate = -(ANGLE / 2) + percentage * ANGLE;

    // Motion.
    const circleVariants: Variants = {
        initial: { strokeDashoffset: arc },
        animate: { strokeDashoffset: offset }
    };

    const gVariants: Variants = {
        initial: { rotate: -(ANGLE / 2) },
        animate: { rotate }
    };

    return (
        <motion.svg layout style={{ zIndex: 1 }} height={OFFSET * 2 + RADIUS * 2} width={OFFSET * 2 + RADIUS * 2}>
            <circle cx={center} cy={center} fill={theme.colors.awaretrain.primary} r={center} />
            <circle
                cx={center}
                cy={center}
                fill="transparent"
                r={innerRadius}
                stroke={`${theme.colors.awaretrain.white}20`}
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={dashArray}
                transform={transform}
            />
            <motion.circle
                cx={center}
                cy={center}
                transition={transition}
                fill="transparent"
                r={innerRadius}
                stroke={theme.colors.awaretrain.active}
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={dashArray}
                transform={transform}
                // Motion
                variants={circleVariants}
                initial="initial"
                animate="animate"
            />
            <motion.g
                transition={transition}
                style={{ originX: '50%', originY: '50%' }}
                variants={gVariants}
                initial="initial"
                animate="animate"
            >
                <circle cx={center} cy={center} r={16} fill={`${theme.colors.awaretrain.white}20`} />
                <circle cx={center} cy={center} r={9} fill={theme.colors.awaretrain.white} />
                <polygon points={`${center},0 ${center + 9},${center} ${center + -9},${center}`} fill={theme.colors.awaretrain.white} />
                <circle cx={center} cy={center} r={4} fill={theme.colors.awaretrain.primary} />
            </motion.g>
        </motion.svg>
    );
};

export default Gauge;
