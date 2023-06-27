import React, {useEffect, useState} from 'react';
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Arrow from "../icons/Arrow";
import {useMobxStores} from "../../store/store";
import {observer} from "mobx-react";


const ContactsAnimationCircles = ({setOpenPopupForm}) => {
    const {nextStore} = useMobxStores();

    useEffect(()=>{
        if(window.innerWidth < 800){
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    },[]);

    useEffect(()=>{
       const circleWrapLeft = document.querySelector('.contacts-circle-left');
       const circleWrapRight = document.querySelector('.contacts-circle-right');
       const circleLeft = document.querySelector('.contacts-circle-left');
       const textWrap = document.createElement('div');
             textWrap.classList.add('text-wrap');
             textWrap.classList.add('small-circle-left');

       for(let i = 0; i < 10; i++){
           let circleChildLeft = document.createElement('div');
               circleChildLeft.classList.add('small-circle-left');
               circleWrapLeft.append(circleChildLeft);
       }
       for( let i = 0; i < 11; i++){
           let circleChildRight = document.createElement('div');
               circleChildRight.classList.add('small-circle-right');
               circleWrapRight.append(circleChildRight);
       }

       circleLeft.append(textWrap);

       const textInCircle = document.createElement('span');
             textInCircle.classList.add('text-circle')
             textWrap.append(textInCircle);
             textInCircle.innerText = 'расширяем окружающее пространство';

    }, []);

    const [smallWindow, setSmallWindow] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            let widthCircle = 371;
            let widthSmallCircle = 340;
            let koef = 31;
            let smallCirclesLeft = gsap.utils.toArray('.small-circle-left');
            let smallCirclesRight = gsap.utils.toArray('.small-circle-right');

            if(window.innerWidth < 1050){
                widthCircle = 298;
                widthSmallCircle = 298;
                koef = 27;
                setSmallWindow(true);
            }
            if(window.innerWidth < 800){
                widthCircle = 127;
                widthSmallCircle = 127;
                koef = 11;
            }

            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: '.contacts-pin',
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: '400% bottom',
                    scroller: "#smooth-scroll",
                }
            })
                .to(smallCirclesLeft,{
                    width: i => 2000 - i * koef
                })
                .to('.contacts-circle-left', {
                    width: 2000,
                }, "<")
                .to(smallCirclesRight, {
                    width: i => 2000 - i * koef
                }, '<')
                .to('.contacts-circle-right', {
                    width: 2000,
                }, "<")
                .to('.text-circle',{
                   x: 15
                }, "<")
                .to(smallCirclesLeft, {
                    width: i => widthSmallCircle - i * koef
                })
                .to('.contacts-circle-left', {
                    width: widthCircle,
                }, "<")
                .to('.contacts-circle-wrap', {
                    right: "53%"
                }, '<')
                .to(smallCirclesRight, {
                    width: i => widthSmallCircle - i * koef
                }, '<')
                .to('.contacts-circle-right', {
                    width: widthCircle,
                }, "<")
                .to('.text-circle',{
                    x: 0
                }, '<')
                .fromTo('.contacts-links-item',{
                    opacity: 0,
                    y:100
                },{
                    opacity: 1,
                    y: 0,
                    stagger: 0.5
                }, '<')
                .fromTo('.contacts-subtitle span',{
                    opacity: 0,
                    y: 100
                }, {
                    opacity: 1,
                    stagger: 0.4,
                    y: 0
                }, "<")


            ScrollTrigger.addEventListener("refresh", () => nextStore.locoScroll.update());

            ScrollTrigger.refresh();
        },200)
    }, []);

    return (
        <section className='contacts '>
            <div className='contacts-pin large-container'>
                <div className='contacts-title-wrap'>
                    <h1 className='h2 contacts-title'>мы на связи</h1>
                    <div className='contacts-subtitle'>
                        {
                            !smallWindow?
                                <>
                                    <span>Мы всегда за удобство, поэтому здесь</span>
                                    <span>точно найдется удобный для вас способ связи.</span>
                                </> :
                                <>
                                    <span>Мы всегда за удобство, поэтому здесь точно найдется удобный </span>
                                    <span>для вас способ связи.</span>
                                </>
                        }
                    </div>
                </div>

                <div className="contacts-circle-container">
                    <div className='contacts-circle-wrap'>
                        <div className='contacts-left-wrapper'>
                            <div className='contacts-circles contacts-circle-left'/>
                        </div>
                        <div className='contacts-circle-mid'/>
                        <div className='contacts-right-wrapper'>
                            <div className='contacts-circles contacts-circle-right'/>
                        </div>
                    </div>
                </div>
                <div className='contacts-links'>
                    <a href="mailto:info@diagram.team" className='contacts-links-item'>
                        <Arrow/>
                        <span>почта</span>
                    </a>
                    <a href="tg://resolve?domain=digram_bot" className='contacts-links-item'>
                        <Arrow/>
                        <span>telegram</span>
                    </a>
                    <a href='tel:+7 (8332) 204-234' className='contacts-links-item'>
                        <Arrow/>
                        <span>телефон</span>
                    </a>
                    <div onClick={()=> {
                        setOpenPopupForm();
                        nextStore.locoScroll.stop();
                    }} className='contacts-links-item'>
                        <Arrow/>
                        <span>оставить заявку</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default observer(ContactsAnimationCircles);