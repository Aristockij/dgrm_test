import React, {useEffect, useRef, useState} from 'react';
import Layout from "../components/layout";
import Link from "next/link";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import lottie from "lottie-web";
import PathOne from "../components/animation/circles1.json";
import PathTwo from "../components/animation/circles2.json";
import PathThree from "../components/animation/circles3.json";
import {useMobxStores} from "../store/store";
import {AnimatePresence } from "framer-motion";
import AnimationText from "../components/animation/AnimationText";
import CirclesSvg from "../components/icons/CirclesSvg";
import {motion} from "framer-motion";
import Footer from "../components/layout/Footer";
gsap.registerPlugin(ScrollTrigger);

const Example = () => {

    const meta = {
        title: "Diagram",
        description: "Description",
        img: "/public/images/pic.jpeg"
    }
    const {nextStore} = useMobxStores();

    const card1 =  useRef();
    const card2 =  useRef();
    const card3 =  useRef();


    const [hoverAnimation1, setHoverAnimation1] = useState(false);
    const [hoverAnimation2, setHoverAnimation2] = useState(false);
    const [hoverAnimation3, setHoverAnimation3] = useState(false);

    const [onHoverAnimation1, setOnHoverAnimation1] = useState(false);
    const [onHoverAnimation2, setOnHoverAnimation2] = useState(false);
    const [onHoverAnimation3, setOnHoverAnimation3] = useState(false);

    const [smallScreen, setSmallScreen] = useState(false);

    const controlAnimation = (anim, anim2) =>{
        anim.addEventListener('loopComplete', ()=>{
            anim.goToAndStop(0, true);
        })
        anim2.addEventListener('loopComplete', ()=>{
            anim2.goToAndStop(0, true);
        })
    }
    const controlCompleteAnimation = (anim)=>{
        anim.play();
        anim.addEventListener('loopComplete', ()=>{
            anim.goToAndPlay(0, true);
        })
    }
    useEffect(()=>{
        if(window.innerWidth < 1100){
            setSmallScreen(true);
        }
        setTimeout(() => {
                let circles = gsap.utils.toArray('.example-circle-animate');

                const circleAnimation = gsap.to('.example-circle-animate-1', {
                    rotate: 360,
                    repeat: -1,
                    duration: 20,
                })

                let animation1 = lottie.loadAnimation({
                    container: card1.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: false,
                    animationData: PathOne,
                })
                setHoverAnimation1(animation1)

                let animation2 = lottie.loadAnimation({
                    container: card2.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: false,
                    animationData: PathTwo,
                });
                setHoverAnimation2(animation2)

                let animation3 = lottie.loadAnimation({
                    container: card3.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: false,
                    animationData: PathThree,
                });
                setHoverAnimation3(animation3)


                gsap.timeline({
                    scrollTrigger: {
                        trigger: '.example-animations',
                        // scrub: true,
                        // markers: true,
                        start: 'top 50% ',
                        end: 'top 50%',
                        scroller: "#smooth-scroll",
                        onEnter:()=>{
                            setOnHoverAnimation1(true);
                            animation1.play();
                            gsap.timeline()
                            .fromTo(card1.current, {
                                y: 300,
                            },{
                                duration: .8,
                                y: 0,
                            },'<')

                            .fromTo(card2.current, {
                                    y: 300,
                                },{
                                    duration: 1,
                                    y: 0,
                                },'<')

                            .fromTo(card3.current, {
                                    y: 300,
                                },{
                                    duration: .6,
                                    y: 0,
                            },'<')
                        },
                        onEnterBack:()=>{
                            setOnHoverAnimation1(false);

                            gsap.to(card1.current, {
                                duration: .8,
                                y: 300,
                            })
                            gsap.to(card2.current, {
                                duration: 1,
                                y: 300,
                            })
                            gsap.to(card3.current, {
                                duration: .6,
                                y: 300,
                            })
                        }
                    }
                })


                ScrollTrigger.addEventListener("refresh", () => nextStore.locoScroll.update());

                ScrollTrigger.refresh();

            }, 200)

    },[]);


    const variants = {
        enter: {opacity: 1},
        exit: {opacity: 0},
    }

    return (
        <Layout title={meta.title} description={meta.description} img={meta.img}>
            <section className="example ">
                <motion.section transition={{duration: 0.5}} variants={variants} initial="exit" animate="enter" exit="exit" className='large-container'>
                    <div className='example-wrap'>
                        <div className='example-title'>
                            <div className='h1' data-scroll data-scroll-speed="2" data-scroll-delay="0.3">
                                да,-
                            </div>
                            <div className='cols' data-scroll data-scroll-speed="3" data-scroll-delay="0.3">
                                <Link href='/team/'>
                                    <a>
                                        мы.
                                    </a>
                                </Link>
                                <Link href='/projects/'>
                                    <a>
                                        можем.
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='example-circle'>
                            <div className='example-circle-animate example-circle-animate-1'>
                                <CirclesSvg/>
                            </div>
                        </div>
                    </div>

                    <div className='projects-info-example' data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                        Берем за точку отсчета ваш бренд и делаем его центром большой истории.
                    </div>

                    <div className='example-animations'>
                        <div className='example-text'>
                            <AnimationText animationProps={onHoverAnimation1} text={'Мы верим в силу и красоту минимализма. Верим в способность лаконичных форм убеждать и укреплять доверие.'}/>
                            <AnimationText animationProps={onHoverAnimation2} text={'Верим в особый характер вашего бренда и скрытую в нем гармонию.'}/>
                            <AnimationText animationProps={onHoverAnimation3} text={'Верим, что так выстраивается привлекательное и понятное цифровое пространство.'} />
                        </div>
                        <div className="example-cards">
                            <div className="example-cards-wrapper">
                                <div
                                    className='example-cards-wrap' ref={card1}
                                     onMouseEnter={()=> {
                                         if(smallScreen !== true){
                                             setOnHoverAnimation1(true);
                                             controlAnimation(hoverAnimation2,  hoverAnimation3);
                                             controlCompleteAnimation(hoverAnimation1);

                                             setOnHoverAnimation2(false);
                                             setOnHoverAnimation3(false);
                                         }
                                     }}
                                     onClick={()=>{
                                         if(smallScreen === true){
                                             setOnHoverAnimation1(true);
                                             controlAnimation(hoverAnimation2,  hoverAnimation3);
                                             controlCompleteAnimation(hoverAnimation1);

                                             setOnHoverAnimation2(false);
                                             setOnHoverAnimation3(false);
                                         }
                                     }}
                                />
                                <div
                                    className='example-cards-wrap'  ref={card2}
                                     onMouseEnter={()=> {
                                         if(smallScreen !== true){
                                             setOnHoverAnimation2(true);
                                             controlAnimation(hoverAnimation1,  hoverAnimation3);
                                             controlCompleteAnimation(hoverAnimation2);

                                             setOnHoverAnimation1(false);
                                             setOnHoverAnimation3(false);
                                         }
                                     }}
                                     onClick={()=>{
                                         if(smallScreen === true){
                                             setOnHoverAnimation2(true);
                                             controlAnimation(hoverAnimation1,  hoverAnimation3);
                                             controlCompleteAnimation(hoverAnimation2);

                                             setOnHoverAnimation1(false);
                                             setOnHoverAnimation3(false);
                                         }
                                     }}
                                />
                                <div
                                    className='example-cards-wrap'  ref={card3}
                                     onMouseEnter={()=> {
                                         if(smallScreen !== true){
                                             setOnHoverAnimation3(true);
                                             controlAnimation(hoverAnimation1,  hoverAnimation2);
                                             controlCompleteAnimation(hoverAnimation3);

                                             setOnHoverAnimation1(false);
                                             setOnHoverAnimation2(false);
                                         }
                                     }}
                                     onClick={()=>{
                                         if(smallScreen === true){
                                             setOnHoverAnimation3(true);
                                             controlAnimation(hoverAnimation1,  hoverAnimation2);
                                             controlCompleteAnimation(hoverAnimation3);

                                             setOnHoverAnimation1(false);
                                             setOnHoverAnimation2(false);
                                         }
                                     }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>
                <Footer/>
            </section>
        </Layout>

    );
};

export default Example;