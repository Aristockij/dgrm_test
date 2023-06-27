import React, {useEffect, useState} from 'react';
import Layout from "../components/layout";
import CreateCircle from "../components/animation/CreateCircle";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useMobxStores} from "../store/store";
import {observer} from "mobx-react";
import {motion} from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const Creating = () => {

    const meta = {
        title: "Diagram",
        description: "Description",
        img: "/public/images/pic.jpeg"
    }

    const {nextStore} = useMobxStores();
    const [hoverText, setHoverText] = useState(false);
    const [hoveredId, setHoveredId] = useState('');
    const [canHovered, setCanHovered] = useState(false);

    useEffect(()=>{
        if(window.innerWidth < 800){
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    },[]);

    useEffect(()=>{
        setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);

            let circlePath = gsap.utils.toArray('.circle-path');
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: '.create-circle',
                    // markers: true,
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: '150% bottom',
                    scroller: "#smooth-scroll",
                }
            })
                .to('#create-circle-1', {
                    y:"140%",
                    x: 100,
                    rotate: -5,
                })
                .to('.create-title',{
                    y: '-100',
                    opacity: 0,
                }, "<")
                .to('#create-circle-2',{
                    y:"160%",
                    x: -30,
                    rotate: -2
                })
                .to('#create-circle-3',{
                    y:"140%",
                    x: 80,
                    rotate: -2,
                })
                .to('#create-circle-4',{
                    y:"90%",
                    x: -30,
                    rotate: -2,
                    // onEnter: ()=>{console.log('enter')}
                    onStart: ()=>{setCanHovered(true)},
                    onReverseComplete: ()=>{setCanHovered(false)}
                })
                .to('#create-circle-5',{
                    y:"130%",
                    x: -50,
                    rotate: -2
                })
                .to('#create-circle-6',{
                    y:"145%",
                    x: 50,
                    rotate: -2
                })
                .fromTo(circlePath, {
                    fill: "#C8B39A",
                    stroke: '#C8B39A'
                },{
                    fill: "#000000",
                })
                .to('#create-circle-1', {
                    y:"140%",
                    x: 50,
                    rotate: -3
                }, '<')
                .to('#create-circle-2',{
                    y:"165%",
                    x: -50,
                    rotate: -3
                }, "<")
                .fromTo('#create-text-1', {
                    opacity:0
                },{
                    x: -50,
                    y:"270%",
                    rotate: -3,
                    opacity: 1,
                }, '<')
                .to('#create-circle-3',{
                    y:"140%",
                    x: 80,
                    rotate: -3
                }, "<")
                .to('#create-circle-4',{
                    y:"90%",
                    x: -50,
                    rotate: -3
                }, "<")
                .fromTo('#create-text-2', {
                    opacity:0
                },{
                    x: -50,
                    y:"270%",
                    rotate: -3,
                    opacity: 1,
                }, '<')
                .to('#create-circle-5',{
                    y:"120%",
                    x: 70,
                    rotate: -3
                }, "<")
                .fromTo('#create-text-3', {
                    opacity:0
                },{
                    x: 50,
                    y:"290%",
                    rotate: -3,
                    opacity: 1,
                }, '<')
                .to('#create-circle-6',{
                    y:"140%",
                    x: -20,
                    rotate: -3
                }, "<")
                .to('#create-circle-7',{
                    y:"100%",
                    x: -20,
                    rotate: -3
                }, "<")

            ScrollTrigger.addEventListener("refresh", () => nextStore.locoScroll.update());

            ScrollTrigger.refresh();
        },200)
    }, [])


    const animationText ={
        active: {
            opacity: 1,
            top: 200,
        },
        unactive: {
            opacity: 0,
            top: 150,
        },
    }
    const hoverFirstText = (e)=>{
        if(window.innerWidth > 1050){
            setHoverText(true);
            setHoveredId(e.target.id);
        }
    }
     const unhoverFirstText = ()=>{
        if(window.innerWidth > 1050){
            setHoverText(false);
            setHoveredId('');
        }
    }
    const clickSvgBlock = (e)=>{
        setHoverText(true);
        setHoveredId(e.target.id);
    }
    const variants ={
        enter: {opacity: 1},
        exit: {opacity: 0},
    }

    return (
        <Layout title={meta.title} description={meta.description} img={meta.img}>
            <section className='create'>
                <motion.section transition={{duration: 0.5}} variants={variants} initial="exit" animate="enter" exit="exit" className={'large-container'}>
                        <div className='create-circle'>
                            <div className="create-title">
                                делаем
                            </div>
                            <motion.div className={`create-hidtext ${canHovered && hoverText && hoveredId === 'create-circle-2' ? 'active' : ''}`}
                                        variants={animationText}
                                        initial='unactive'
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.17, 0.60, 0.70, 0.90]
                            }}
                                        animate={canHovered && hoverText && hoveredId  === 'create-circle-2'  ? "active" : 'unactive'}
                                        exit='unactive'
                            >
                                Берем за точку отсчета
                                <br/>ваш бренд и делаем его
                                <br/> центром большой
                                <br/> истории. Расширяем
                                <br/> окружающее
                                <br/>пространство - от 0 до
                                <br/> 360 градусов.
                            </motion.div>
                            <motion.div className={`create-hidtext2 ${canHovered && hoverText && hoveredId  === 'create-circle-4' ? 'active' : ''}`}
                                        variants={animationText}
                                        initial='unactive'
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.17, 0.60, 0.70, 0.90]
                                        }}
                                        animate={canHovered && hoverText && hoveredId  === 'create-circle-4' ? "active" : 'unactive'}
                                        exit='unactive'
                            >
                                Делаем самые
                                <br/>лучше
                                <br/> сайты
                                <br/> в галактике
                            </motion.div>
                            <motion.div className={`create-hidtext3 ${canHovered && hoverText && hoveredId  === 'create-circle-5' ? 'active' : ''}`}
                                        variants={animationText}
                                        initial='unactive'
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.17, 0.60, 0.70, 0.90]
                                        }}
                                        animate={canHovered && hoverText && hoveredId  === 'create-circle-5' ? "active" : 'unactive'}
                                        exit='unactive'
                            >
                                И помним
                                <br/>про
                                <br/> адаптивы

                            </motion.div>
                            <CreateCircle clickBlock={clickSvgBlock} showFirstText={hoverFirstText} hiddenFirstText={unhoverFirstText}/>
                        </div>
                </motion.section>
            </section>
        </Layout>
    );
};

export default observer(Creating);