import React, {useEffect, useRef, useState} from 'react';
import Layout from "../components/layout";
import Link from 'next/link';
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";
import { motion } from 'framer-motion';
import {observer} from "mobx-react";
import AnimationProjectBlock from "../components/animation/AnimationProjectBlock";
import lottie from "lottie-web";
import {useRouter} from "next/router";
import TorusAnimation from "../components/animation/TorusAnimation";
import Footer from "../components/layout/Footer";
// import bublik from "../components/animation/tubus.json";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

const Projects = () => {
    const meta = {
        title: "Diagram",
        description: "Description",
        img: "/public/images/pic.jpeg"
    }

    const router = useRouter();
    const anim = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            const text = document.querySelectorAll('.projects-examples-rotate');
            function spanWrap(text) {
                for(let i = 0; i < text.length; i++){
                    text[i].innerHTML =  text[i].innerHTML.replace(/(.)/g, '<span>$1</span>');
                }
            }
            if(window.innerWidth > 1050){
                spanWrap(text);
            }
            if(router.asPath === '/projects/'){
                document.querySelector('body').style.background = '#000'
            }
        }, 200)

    },[])


    const projects = [
        {
            title: 'Alive media web',
            src: '/images/img1.jpg',
            id: 1
        },
        {
            title: 'Nomitech web',
            src: '/images/img1.jpg',
            id: 2
        },
        {
            title: 'Giprom web',
            src: '/images/img1.jpg',
            id: 3
        },
        {
            title: 'Alive media web',
            src: '/images/img1.jpg',
            id: 4
        },
        {
            title: 'Nomitech web',
            src: '/images/img1.jpg',
            id: 5
        },
        {
            title: 'Giprom web',
            src: '/images/img1.jpg',
            id: 6
        },
    ]

    const variants ={
        enter: {opacity: 1},
        exit: {opacity: 0},
    }


    return (

        <Layout title={meta.title} description={meta.description} img={meta.img}>
                <section data-scroll-section className='projects'>
                    <motion.section transition={{duration: 0.5}} variants={variants} initial="exit" animate="enter" exit="exit"  className='projects-container large-container'>
                        <div className='projects-main'>
                            <div className='projects-torus'>
                                <TorusAnimation/>
                            </div>
                            <div className='projects-links' data-scroll data-scroll-speed="3" data-scroll-delay="0.1">
                                <div className='projects-links-top'>
                                    <Link href="/example/">
                                        <a>да.</a>
                                    </Link>
                                    <Link href="/team/">
                                        <a>
                                            мы.
                                        </a>
                                    </Link>
                                </div>
                                <div className='projects-links-bottom'>
                                    <div className='h1'>
                                        можем.
                                    </div>
                                </div>
                            </div>
                            <div className='projects-info cols cols--acenter'>
                                <div className='h2' data-scroll data-scroll-speed="2" data-scroll-delay="0.3">
                                    кейсы
                                </div>
                                <div className='projects-info-right cols' data-scroll data-scroll-speed="3" data-scroll-delay="0.1">
                                    <p>
                                        Здесь лишь несколько примеров разработанных нами цифровых продуктов, в которых увлеченность технологиями соседствует с вниманием к дизайну. Присмотритесь к нашему прошлому, чтобы доверить свое будущее.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='projects-examples'>
                            {
                                projects.map((project, index)=>
                                    <div key={project.id + 122}>
                                        <AnimationProjectBlock index={index} project={project}/>
                                    </div>
                                )
                            }

                        </div>
                    </motion.section>
                    <Footer/>
                </section>
        </Layout>

    );
};

export default observer(Projects);