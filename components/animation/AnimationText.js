import React from 'react';
import {motion} from "framer-motion";

const AnimationText = ({text, className, animationProps}) => {

    const animationText ={
        active: {

            transform: "translateY(0%)",
            opacity: 1,
        },
        unactive: {
            transform: "translateY(-100%)",
            opacity: 0,
        },
    }

    return (
        <motion.div
            key={'1'}
            variants={animationText}
            initial='unactive'
            transition={{
                duration: 0.5,
                ease: [0.17, 0.60, 0.70, 0.90]
            }}
            animate={animationProps  ? "active" : 'unactive'}
            exit='unactive'
            className={className}
        >
            {text}
        </motion.div>
    );
};

export default AnimationText;