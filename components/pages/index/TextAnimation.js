import React, {useEffect, useRef, useState} from 'react';
import {gsap} from "gsap/dist/gsap";
import lottie from 'lottie-web';
import animationPath from '../../animation/eye4.json'
import {useMobxStores} from "../../../store/store";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {observer} from "mobx-react";
gsap.registerPlugin(ScrollTrigger);


const TextAnimation = () => {
    const {nextStore} = useMobxStores();
    const anime = useRef(null);
    const [squareVector, setSquareVector]= useState(720);

    useEffect(()=>{
        if(window.innerWidth < 800){
            setSquareVector('30vh');
        }
    }, []);

    useEffect(()=>{
        if(nextStore.pageFullLoad){
            setTimeout(() => {

                const findTitle = document.querySelector(".home-title");
                const findBlock = document.querySelector(".home-block");

                const heightLine = findTitle.clientHeight;
                const heightLineBlock = findBlock.clientHeight;
                const heightLineLeft = findBlock.clientHeight;

                const halfTitleHeight = heightLine / 2.5;

                let playhead = {frame: 0},
                    animation = lottie.loadAnimation({
                        container: anime.current,
                        renderer: 'svg',
                        loop: true,
                        autoplay: false,
                        animationData: animationPath,
                    });

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.home-animation',
                        start: "35% 50% ",
                        end: `+=${halfTitleHeight}`,
                        scrub: 1,
                        pin: true,
                        scroller: "#smooth-scroll",
                    }
                })
                tl.to(playhead, {
                    pin: true,
                    frame: animation.totalFrames - 1,
                    opacity: 1,
                    duration: 4,
                    ease: "none",
                    onUpdate: () => animation.goToAndStop(playhead.frame, true),
                })
                const animation1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.home-title',
                        scrub: true,
                        start: `top top`,
                        end: `bottom bottom`,
                        scroller: "#smooth-scroll",
                        // markers: true
                    }
                })
                    .fromTo('.home-title-first', {
                        opacity: 1,
                    }, {
                        opacity: 0,
                        delay: .5
                    })
                    .fromTo('#home-title-sec', {
                        opacity: 0,
                    }, {
                        opacity: 1,
                    })


                const animation2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.home-title',
                        scrub: true,
                        start: `top top`,
                        end: `bottom 50%`,
                        scroller: "#smooth-scroll",
                        pin: '.home-line-pin',
                    }
                })
                    .to('#home-line', {
                        scrollTrigger: {
                            trigger: '.home-title',
                            scrub: true,
                            start: `top top`,
                            end: `93% 50%`,
                            scroller: "#smooth-scroll",
                        },
                        height: `50vh`,
                    })

                const animation3 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.home-block',
                        scrub: true,
                        start: 'top 50%',
                        end: "100% 50%",
                        scroller: "#smooth-scroll",
                    }
                })
                    .to('#home-line-sec', {
                        height: `30vh`,
                    })


                const animation4 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.home-block',
                        scrub: true,
                        start: 'top top',
                        end: "100% 0%",
                        pin: true,
                        scroller: "#smooth-scroll",
                        pinSpacing: "margin"
                    }
                })
                    .to('.home-block-wrap', {
                        rotation: 0,
                    }, '<')
                    .to('.home-block-wrapper', {
                        rotation: 0,
                    }, '<')
                    .to('.home-block-bg', {
                        height: "100%"
                    }, '<')
                    .to('.home-block-title', {
                        opacity: 1,
                    }, '<')

                const animation5 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.home-block',
                        scrub: true,
                        start: '80% 60%',
                        end: '+=300% 0%',
                        scroller: "#smooth-scroll",
                    }
                })
                    .to('.home-line-left', {
                        height: `${heightLineLeft + heightLineBlock}`,
                        duration: 1,
                    })
                    .to('.home-line-right', {
                        height: `${heightLineLeft + heightLineBlock}`,
                    }, '<')


                const animation6 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.figures',
                        scrub: true,
                        pin: true,
                        // markers: true,
                        start: 'top top',
                        end: '+=80% top',
                        scroller: "#smooth-scroll",
                    }
                })
                    .to('.figures-square-line', {
                        height: 600,
                    })
                    .to('.figures-bg', {
                        height: '100%',
                    })
                    .to('.header-logo path', {
                        fill: '#deacac'
                    })
                    .to('.header-menu *', {
                        fill: '#deacac'
                    }, "<")
                    .to('.popup-trigger span', {
                        color: '#000000'
                    }, "<")
                    .to('.popup-trigger svg path', {
                        stroke: '#000000'
                    }, "<")
                    .to('.figures-square-wrap', {
                        bottom: -33,
                        right: squareVector,
                    }, '-=80%')
                    .to('.figures-square-wrap', {
                        transform: 'rotate(257.84deg)'
                    }, "<")
                    .to('.figures-square-line', {
                        width: 0,
                        opacity: 0
                    }, "<")
                    .to('.figures-opacity', {
                        opacity: 0,
                    })
                    .fromTo('.figures-wrap', {
                        zIndex: 5
                    }, {
                        zIndex: 3,
                    }, '<')

                ScrollTrigger.addEventListener("refresh", () => nextStore.locoScroll.update());

                ScrollTrigger.refresh();
            }, 200)
        }
    },[nextStore.pageFullLoad]);

    return (
        <>
            <div  id='home-container' className='container'>
                <div className='home-title '>
                    <div className='home-line-pin'>
                        <span id='home-line' className='home-line'/>
                    </div>

                    <div className='h1 home-title-first'>
                        <div>
                            <span data-scroll data-scroll-delay="0.13" data-scroll-speed="6" >д</span>
                            <span data-scroll data-scroll-delay="0.12" data-scroll-speed="6" >и</span>
                            <span data-scroll data-scroll-delay="0.11" data-scroll-speed="6" >д</span>
                            <span data-scroll data-scroll-delay="0.10" data-scroll-speed="6" >ж</span>
                        </div>
                        <div>
                            <span data-scroll data-scroll-delay="0.23" data-scroll-speed="6" >и</span>
                            <span data-scroll data-scroll-delay="0.12" data-scroll-speed="6" >т</span>
                            <span data-scroll data-scroll-delay="0.41" data-scroll-speed="6" >а</span>
                            <span data-scroll data-scroll-delay="0.10" data-scroll-speed="6" >л</span>
                        </div>
                        <div data-scroll data-scroll-speed="1" data-scroll-delay="1">
                            <span data-scroll  data-scroll-delay="0.23" data-scroll-speed="6">п</span>
                            <span data-scroll  data-scroll-delay="0.12" data-scroll-speed="6">р</span>
                            <span data-scroll  data-scroll-delay="0.41" data-scroll-speed="6">о</span>
                            <span data-scroll  data-scroll-delay="0.10" data-scroll-speed="6">д</span>
                        </div>
                        <div data-scroll data-scroll-speed="1" data-scroll-delay="1">
                            <span data-scroll data-scroll-delay="0.23" data-scroll-speed="6" >а</span>
                            <span data-scroll data-scroll-delay="0.12" data-scroll-speed="6" >к</span>
                            <span data-scroll data-scroll-delay="0.41" data-scroll-speed="6" >ш</span>
                            <span data-scroll data-scroll-delay="0.10" data-scroll-speed="6" >н</span>
                        </div>
                    </div>
                    <div className='h2 home-title-sec'>
                        <div id='home-title-sec' data-scroll data-scroll-speed=".5" data-scroll-delay=".5">
                            <span>присмотритесь  к </span>
                           нашему прошлому,
                        </div>
                    </div>
                    <div className='home-animation' ref={anime}/>
                </div>
                <div className='home-block'>
                    <div className='home-line-pin-two'>
                        <span id='home-line-sec' className='home-line'/>
                    </div>

                    <div className='home-block-wrapper'>
                        <div className='home-block-info'>
                            <div className='home-block-title'>
                                чтобы доверить <br/>свое будущее.
                            </div>
                            <div className='home-block-wrap'>
                                <div className="home-block-bg"/>
                            </div>
                        </div>
                        <div className='home-line-left'/>
                        <div className='home-line-right'/>
                    </div>
                </div>
            </div>
            <div className='figures-wrap'>
                <div className='figures'>
                    <div className='figures-text'>
                        {/*увлеченность технологиями*/}
                        {/*<br/>  с вниманием к дизайну*/}
                    </div>
                    <div className="figures-opacity figures-circle figures-circle-small"/>
                    <div className="figures-opacity figures-circle figures-circle-large"/>
                    <div className='figures-square-wrap'>
                        <div className="figures-opacity figures-square figures-square-left"/>
                        <div className='figures-square-line'/>
                    </div>
                    <div className="figures-opacity figures-square figures-square-right"/>
                    <div className="figures-bg"/>
                </div>
            </div>
        </>
    );
};

export default observer(TextAnimation);