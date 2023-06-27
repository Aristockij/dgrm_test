import React, {useEffect, useState} from 'react';
import Arrow from "../../icons/Arrow";
import Link from "next/link";
import Image from "next/image";
import {useMobxStores} from "../../../store/store";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {observer} from "mobx-react";
gsap.registerPlugin(ScrollTrigger);

const ProjectView = () => {
    const {nextStore} = useMobxStores();
    const [fontSizeLink, setFontSizeLink]=useState(24);
    useEffect(()=>{
        if(window.innerWidth < 800){
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    },[]);
    useEffect(()=>{
        const text = document.querySelectorAll('.examples-frame-title');


        function spanWrap(text) {
            if(window.innerWidth > 1050){
                for(let i = 0; i < text.length; i++){
                    // const splitText = text[i].innerHTML.split(' ')
                    //     for(let a = 0; a < splitText.length; a++){
                    //         text[i].innerHTML = text[i].innerHTML.replace(splitText[a], '<div class="examples-word-wrap" >$&</div>');
                    //         const textInside = document.querySelectorAll('.examples-word-wrap');
                            // textInside[a].innerHTML =  textInside[a].innerHTML.replace(/(.)/g, '<span>$&</span>');

                            // for(let l = 0; l < textInside.length; l++){
                                // textInside[a].innerHTML =  textInside[a].innerHTML.replace(/(.)/g, '<span>$1</span>');
                            // }
                    // }

                    text[i].innerHTML =  text[i].innerHTML.replace(/(.)/g, '<span>$1</span>');
                }
            }
        }
        spanWrap(text);
    },[]);

    const projectContent = [
        {
            title: 'Alive media',
            subTitle: 'promo web site',
            img: '/images/project.jpg',
            width: '1440',
            height: '900',
        },
        {
            title: 'Alive media',
            subTitle: 'promo web site',
            img: '/images/project.jpg',
            width: '1440',
            height: '900',
        },
        {
            title: 'Alive media',
            subTitle: 'promo web site',
            img: '/images/project.jpg',
            width: '1440',
            height: '900',
        },
    ]


    useEffect(()=>{
        if(window.innerWidth < 800){
            setFontSizeLink(20)
        }
        if(window.innerWidth < 580){
            setFontSizeLink(14)
        }
        if(nextStore.pageFullLoad){
            setTimeout(() => {
                let pinWrap = document.querySelector('.examples-wrap');
                let pinWrapWidth = pinWrap.scrollWidth;
                let horizontalScrollLenght = pinWrapWidth - window.innerWidth;

                // let positionLastLink = 3;
                // if(window.innerWidth < 650){
                //     positionLastLink = 0;
                // }

                // gsap.registerPlugin(ScrollTrigger);
                const examplesPin = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.examples-pin',
                        scrub: true,
                        pin: true,
                        start: `top top`,
                        end: `${pinWrapWidth}`,
                        scroller: "#smooth-scroll",
                    }
                })
                    .to('.examples-links-text', {
                        opacity: 1,
                        stagger: 0.4,
                        duration: .2,
                    })
                    .to('.examples-links-wrap', {
                        top: 0,
                        left: 0,
                        duration: .2,
                    })
                    .to('.examples-links-text', {
                        fontSize: fontSizeLink,
                        duration: .2,
                    }, "<")
                    .to('.examples-links-last', {
                        top: 3,
                        left: 272,
                        duration: .2,
                    }, '<')
                    .to('.examples-top', {
                        opacity: 1,
                        x: 0,
                        ease: 'expo.out'
                    })
                    .to('.examples-links-arrow', {
                        opacity: 1,
                        x: 0,
                        ease: 'expo.out'
                    }, '<')
                    .to('.examples-wrap', {
                        opacity: 1,
                        x: 0,
                        ease: 'expo.out'
                    }, '<')
                    .to('.examples-footer', {
                        opacity: 1,
                        x: 0,
                        ease: 'expo.out'
                    }, "<")
                    .to('.examples-wrap', {
                        x: -`${horizontalScrollLenght}`,
                        ease: 'none',
                    })

                ScrollTrigger.addEventListener("refresh", () => nextStore.locoScroll.update());

                ScrollTrigger.refresh();
            }, 200)
        }
    },[nextStore.pageFullLoad])

    return (
        <div className='examples'>
                <div className='examples-pin'>
                    <div className="examples-top">
                        <div className="examples-lines-top"/>
                        <div className="examples-lines-bottom"/>
                    </div>
                    <div className='examples-wrap cols'>
                        {
                            projectContent.map((item ,index)=>
                                <div key={index} className='examples-frame'>
                                    <Link href="/">
                                        <a>
                                            <div className=''>
                                                <div className='examples-frame-left'>
                                                    <div className='examples-frame-title'>
                                                        {
                                                            item.title
                                                        }
                                                    </div>
                                                    <div className='examples-frame-subtitle'>
                                                        {
                                                            item.subTitle
                                                        }
                                                    </div>
                                                </div>
                                                <div className='examples-frame-right'>
                                                    <Image
                                                        alt='name'
                                                        src={item.img}
                                                        width={item.width}
                                                        height={item.height}
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                    <div className=''>
                        <div className='examples-links'>
                            <div className='examples-links-left'>
                                <Link  href="/projects/">
                                    <a className='examples-links-arrow'>
                                        <Arrow/>
                                        <span>перейти к кейсам</span>
                                    </a>
                                </Link>
                                <Link  href="/contacts/">
                                    <a className='examples-links-arrow'>
                                        <Arrow/>
                                        <span>на связи</span>
                                    </a>
                                </Link>
                            </div>
                            <div className='examples-links-right'>
                                <div className='examples-links-wrap'>
                                    <Link  href="/example/">
                                        <a className='examples-links-text'>
                                            да.
                                        </a>
                                    </Link>
                                    <Link  href="/team/">
                                        <a className='examples-links-text'>
                                            мы.
                                        </a>
                                    </Link>
                                    <Link  href="/projects/">
                                        <a className='examples-links-text examples-links-last'>
                                            можем.
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='examples-footer'>
                            <div className='examples-footer-top' />
                            <div className='examples-footer-bottom' />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default  observer(ProjectView);
