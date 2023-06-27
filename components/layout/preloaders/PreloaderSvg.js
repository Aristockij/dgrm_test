import React, {useEffect, useRef} from 'react';
import {gsap} from "gsap";
import lottie from "lottie-web";
import animation from "../../animation/preloader2.json";
import animation2 from "../../animation/preloader11.json";
import animationPath from "../../animation/eye2.json";
import {useMobxStores} from "../../../store/store";
import Menu from "../Menu";
import {AnimatePresence, motion} from "framer-motion";

const PreloaderSvg = () => {

    const {nextStore} = useMobxStores();
    const anime = useRef();

    useEffect(()=>{
        window.addEventListener('load', ()=>{
            lottie.loadAnimation({
                container: anime.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: animation2,
            });

        })

    }, []);

    const animationPreloader ={
        active: {
            opacity: 1,
            duration: 100,
        },
        unactive: {
            opacity: 0,
            duration: 100,
        },
    }

    return (
        <motion.div className={`preloader ${nextStore.pageFullLoad ? "unactive" : ' active'}`}
                    variants={animationPreloader}
                    initial='active'
                    exit='unactive'
                    animate={nextStore.pageFullLoad ? "unactive" : 'active '}
        >
            <div className='preloader-wrap'>
                <div ref={anime} className="preloader-render"/>
            </div>
        </motion.div>
    );
};

export default PreloaderSvg;