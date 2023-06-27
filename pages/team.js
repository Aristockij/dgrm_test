import React, {useEffect, useState} from 'react';
import Layout from "../components/layout";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useMobxStores} from "../store/store";
import {observer} from "mobx-react";
import { motion } from 'framer-motion';
import Image from "next/image";
import Footer from "../components/layout/Footer";

const Team = () => {

    const meta = {
        title: "Diagram",
        description: "Description",
        img: "/public/images/pic.jpeg"
    }

    const {nextStore} = useMobxStores();

    useEffect(()=>{
         setTimeout(() => {

                    if(window.innerWidth < 800){
                        let vh = window.innerHeight * 0.01;
                        document.documentElement.style.setProperty('--vh', `${vh}px`);
                    }

                    let imgArr = document.querySelectorAll('.team-img-any');


                    for(let i = 0; i < imgArr.length; i++){
                        let randomSpeed = Math.floor(Math.random() * (6 - 1) + 1);
                        let randomDelay = Math.random() * (0.6 - 0.2) + 0.2;

                        imgArr[i].setAttribute('data-scroll-speed', `${randomSpeed}`);
                        imgArr[i].setAttribute('data-scroll-delay', `${randomDelay}`);
                    }

                    let pinWrapTitle = document.querySelector('.team-title');
                    let pinWrapWidth = pinWrapTitle.scrollWidth;
                    let horizontalScrollLenght = pinWrapWidth - window.innerWidth + 80;

                    gsap.registerPlugin(ScrollTrigger);

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: '.team-title-pin',
                            pin: true,
                            scrub: true,
                            // markers: true,
                            start: 'top top',
                            end: `${pinWrapWidth}`,
                            scroller: "#smooth-scroll",
                        }
                    })
                        .to('.team-title', {
                            x: -`${horizontalScrollLenght}`,
                            paddingTop: '20vh',
                            rotate: 0,
                        })
                        .fromTo('.team-subtitle', {
                            y: 100,
                            opacity: 0,
                        },{
                            y: 0,
                            opacity: 1,
                        }, "<100%")

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: '.team-top',
                            start: '+=90% 50%',
                            end: `bottom 50%`,
                            scrub: true,
                            scroller: "#smooth-scroll",
                        }
                    })
                        .fromTo('.team',{
                            background: "#000000"
                        },{
                            background: "#ffffff"
                        })
                        .fromTo('.c-scrollbar_thumb',{
                            backgroundColor: "#C8B39A"
                        }, {
                            backgroundColor: "#000"
                        }, "<")
                        .fromTo('.team-info', {
                            color: "#ffffff"
                        },{
                            color: "#000000"
                        })

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: '.team-bottom',
                            start: 'top top',
                            end: `140% bottom`,
                            scrub: true,
                            pin: true,
                            scroller: "#smooth-scroll",
                        }
                    })
                        .fromTo('.team-img-wrap',{
                            width: '90%',
                            minHeight: '100vh'
                        }, {
                            width: '100%',
                            minHeight: '20vh'
                        })
                        .to('.team-img-wrap', {
                            top: "5%",
                            x: "100%",
                            width: "400px",
                            height: "300px"
                        })
                        .to('.team-img-any', {
                            stagger: .3,
                            opacity: 1,
                        })

                    ScrollTrigger.addEventListener("refresh", () => nextStore.locoScroll.update());

                    ScrollTrigger.refresh();
            }, 200)
    },[]);

    const variants ={
        enter: {opacity: 1},
        exit: {opacity: 0},
    }
    const imgSettings = [
        {
            src: '/images/main_photo1.jpg',
            width: '743',
            height: '1115',
            id: 10
        },
        {
            src: '/images/photo6.jpg',
            width: '1695',
            height: '1130',
            id: 14
        },
        {
            src: '/images/photo5.jpg',
            width: '1362',
            height: '908',
            id: 13
        },
        {
            src: '/images/main_photo3.jpg',
            width: '746',
            height: '1120',
            id: 11
        },
        {
            src: '/images/photo4.jpg',
            width: '1559',
            height: '1039',
            id: 12
        },

    ]

    return (
        <Layout title={meta.title} description={meta.description} img={meta.img}>
            <section className="team-wrap">
                <motion.section transition={{duration: 0.5}} variants={variants} initial="exit" animate="enter" exit="exit" >
                    <section className='team'>
                        <div className='team-top'>
                            <div className="team-title-pin">
                                <div className='team-title'>
                                    <div>
                                        мы пишем черным по
                                    </div>
                                    <div>
                                        белому
                                        <span className='team-subtitle'>и ничего лишнего.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='team-info cols large-container'>
                                <div className='h2' data-scroll data-scroll-speed="3" data-scroll-delay="0.2">
                                    мы
                                </div>
                                <div className='team-info-right' data-scroll data-scroll-speed="1" data-scroll-delay="0.3">
                                    <div>
                                        <div >
                                            кто мы?
                                        </div>
                                        <div >
                                            Diagram не просто создает
                                        </div>
                                    </div>
                                    <div>
                                        утилитарные цифровые продукты, но раскрывает потенциал вашего бизнеса через творческие устремления целой команды. Мы настроены получить больше, чем опыт работы — нам нужен опыт соучастия.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-bottom large-container">
                            <span/>
                            <span/>
                            <span/>
                            <div className="team-img-wrap">
                                <div className='team-img'>
                                    <Image
                                        alt='name'
                                        src='/images/main_photo2.jpg'
                                        layout="fill"
                                        objectFit="cover"
                                        loading={'eager'}
                                    />
                                </div>
                            </div>
                            <div className='team-img-grid'>
                                {
                                    imgSettings.map((item)=>
                                        <div className="team-img-any" key={item.id} data-scroll>
                                            <div>
                                                <Image
                                                    alt='name'
                                                    src={item.src}
                                                    width={item.width}
                                                    height={item.height}
                                                    layout={"responsive"}
                                                    loading={'eager'}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                        </div>
                    </section>
                    <Footer/>
                </motion.section>
            </section>
        </Layout>
    );
};

export default observer(Team);