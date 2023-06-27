import React, {useEffect} from 'react';
import Link from 'next/link'
import {observer} from "mobx-react";
import {useMobxStores} from "../../store/store";
import {motion} from "framer-motion";
import {gsap} from "gsap";


const Menu = ({active, isActive}) => {
    const {nextStore} = useMobxStores();

    const animationBlockMenu ={
        active: {
            transform: "translateY(0%)",
        },
        unactive: {
            transform: "translateY(-100%)",
        },
    }

    const link = [
        {link: '/projects/', title: 'кейсы', id: 11},
        {link: '/contacts/', title: 'на связи', id: 22},
        {link: '/team/', title: 'команда', id: 33},
        {link: '/creating/', title: 'делаем', id: 44},
    ]

    useEffect(()=>{
        setTimeout(()=>{
            let menuItemsArray = gsap.utils.toArray('.menu-item');

           if(active){
               gsap.fromTo(menuItemsArray,{
                   y: -1000,
               }, {
                   y: 0,
                   delay:-0.2,
                   stagger: -0.15,
                   duration: 2,
                   ease: "elastic.out(3, 2)"
               })
           }
        }, 200);
    }, [])



    return (
            <motion.section
                    variants={animationBlockMenu}
                    initial='unactive'
                    transition={{
                        duration: .9,
                        ease: [0.10, 0.80, 0.50, 0.90]
                    }}
                    exit='unactive'
                    animate={active ? "active" : 'unactive'}
                    className='menu'>
                <div className='container'>
                    {
                        link.map((item, index)=>
                            <div className='menu-item' key={index}>
                                <Link href={`${item.link}`}>
                                    <a onClick={()=>{
                                        isActive()
                                        nextStore.locoScroll.start();
                                    }}>
                                        <span>{item.title}</span>
                                    </a>
                                </Link>
                                <div className='menu-item-circle-wrapper'>
                                    <div className='menu-item-circle'/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </motion.section>
    )
}

export default observer(Menu);