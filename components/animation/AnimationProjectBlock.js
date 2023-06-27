import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {useMobxStores} from "../../store/store";
import {motion} from "framer-motion";
import {AnimatePresence } from "framer-motion";
import {useRouter} from "next/router";
import Link from "next/link";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


const AnimationProjectBlock = ({index, project, key}) => {
    const {nextStore} = useMobxStores();

    const [active, setActive]=useState(false);
    const [initialActive, setInitialActive]= useState(false);

    const [activeIndex, setActiveIndex]=useState(null);
    const [heightImg, setHeightImg]=useState(335);

    useEffect(()=>{
        if(window.innerWidth < 1050){
            setActive(true)
            setInitialActive(true)
            setActiveIndex(index)
            setHeightImg('auto')
        }
    }, []);


    const animationWrap ={
        active: {
          background: '#ffffff'
        },
        unactive: {
            background: '#000000'
        },
    }
    const animationNum ={
        active: {
          opacity: 1
        },
        unactive: {
            opacity: 0
        },
    }
    const animationImg ={
        active: {
          height: heightImg,
        },
        unactive: {
            height: 0,
        },
    }
    const animationText ={
        active: {
            opacity: 1
        },
        unactive: {
            opacity: 0
        },
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <Link href="/" key={key}>
                <a>
                    <motion.div
                        variants={animationWrap}
                        initial="unactive"
                        transition={{
                            duration: 0.5,
                            ease: [0.17, 0.60, 0.70, 0.90]
                        }}
                        animate={active && index === activeIndex ? "active" : 'unactive'}
                        exit='unactive'
                        className={`projects-examples-block ${ active && index === activeIndex ? 'active' : ''}`}
                        onMouseEnter={()=>{
                            if(!initialActive){
                                setActiveIndex(index);
                                setActive(true);
                            }
                        }}
                        onMouseLeave={()=>{
                            if(!initialActive){
                                setActiveIndex(null);
                                setActive(false);
                            }
                        }}
                    >
                        {
                            active && index === activeIndex &&
                            <motion.div
                                variants={animationNum}
                                initial='unactive'
                                transition={{
                                    duration: 0.5,
                                    ease: [0.17, 0.60, 0.70, 0.90]
                                }}
                                animate={active && index === activeIndex  ? "active" : 'unactive'}
                                exit='unactive'

                                className='projects-examples-num'>
                                {index+1}
                            </motion.div>
                        }
                        {
                            // active && index === activeIndex &&
                            <motion.div
                                variants={animationImg}
                                initial='unactive'
                                transition={{
                                    duration: 0.5,
                                    ease: [0.17, 0.60, 0.70, 0.90]
                                }}
                                animate={active && index === activeIndex  ? "active" : 'unactive'}
                                exit='unactive'

                                className={`projects-examples-img  ${active && index === activeIndex  ? "active" : 'unactive'}`}>
                                <img src={`${project.src}`} alt=""/>
                            </motion.div>
                        }

                        <div className='projects-examples-title'>
                            <div>
                                <div className='projects-examples-rotate'>
                                    {project.title}
                                </div>
                                <span>{index + 1}</span>
                            </div>
                        </div>
                        {
                            <motion.div
                                variants={animationText}
                                initial='unactive'
                                transition={{
                                    duration: 0.5,
                                    ease: [0.17, 0.60, 0.70, 0.90]
                                }}
                                animate={active && index === activeIndex  ? "active" : 'unactive'}
                                exit='unactive'

                                className='projects-examples-text'>
                                <p>
                                    все так хорошо.
                                </p>
                            </motion.div>
                        }
                    </motion.div>
                </a>
            </Link>
        </AnimatePresence>
    );
};

export default AnimationProjectBlock;