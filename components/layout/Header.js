import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useMobxStores} from "../../store/store";
import {observer} from "mobx-react";
import HeaderBtn from "../icons/headerBtn";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LogoNew from "../icons/LogoNew";
import {useRouter} from "next/router";
import Menu from "./Menu";
import {AnimatePresence} from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {

    const {nextStore} = useMobxStores();

    const [toggleScrollPause, setTogglePause] = useState(false)

    const togglePause = ()=>{
      if(toggleScrollPause===true){
          nextStore.locoScroll.start();
      }else {
          nextStore.locoScroll.stop();
      }
    }

    const router = useRouter();

    const [menuActive, setMenuActive] = useState(false);
    const [headerBlackBg, setHeaderBlackBg]= useState(false);

    useEffect(()=>{
        if(router.asPath === '/example/' || router.asPath === '/contacts/'){
            setHeaderBlackBg(true);
        }
        else{
            setHeaderBlackBg(false);
        }

    },[]);

    const toggleActiveMenu = ()=>{
        setMenuActive(!menuActive)
    }

    return (
        <>
            <header className={`header ${menuActive || headerBlackBg ? 'header-black' : ""}`}>
                <div className=' cols cols--acenter'>
                    <Link href="/">
                        <a  className='header-logo'
                            onClick={()=>{
                                setMenuActive(false);
                                if(router.route !== '/' || toggleScrollPause===true){
                                    setTogglePause(!toggleScrollPause);
                                    togglePause();
                                }
                            }}
                        >
                            <LogoNew className='header-logo-svg'/>
                        </a>
                    </Link>
                    <div className='header-menu'
                         onClick={()=>{
                             setTogglePause(!toggleScrollPause);
                             setMenuActive(!menuActive);
                             togglePause();
                         }}
                    >
                        <HeaderBtn/>
                    </div>
                </div>
            </header>
            <AnimatePresence exitBeforeEnter>
                {
                    menuActive &&
                    <Menu active={menuActive}  isActive={toggleActiveMenu}/>
                }
            </AnimatePresence>
        </>
    )
}

export default observer(Header);