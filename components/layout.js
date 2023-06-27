import HeadMeta from "./layout/HeadMeta";
import React, {useEffect, useState} from "react";
import Header from "./layout/Header";
import {observer} from "mobx-react-lite";
import { useMobxStores } from '../store/store';
import Menu from "./layout/Menu";
import {SmoothScrollProvider} from '../components/hooks/smoothScrollProvider';
import {AnimatePresence } from "framer-motion";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PreloaderCircle from "./layout/preloaders/PreloaderCircle";
import Preloader from "./layout/preloaders/Preloader";
import PreloaderSvg from "./layout/preloaders/PreloaderSvg";
import PopupLogo from "./icons/PopupLogo";
import ContactsPopup from "./layout/ContactsPopup";
import ContactsForm from "./pages/PopupWithForm";
import Footer from "./layout/Footer";

gsap.registerPlugin(ScrollTrigger);


const Layout = observer(({ children, home, title, description, img })=>{

    const {nextStore} = useMobxStores();

    useEffect ( ()  =>  {

        nextStore.setLoaded(false);
        nextStore.setViewLoader(true);
        window.addEventListener('load', () => {
            nextStore.setGlobalLoaded(true);
            nextStore.setLoaded(true);
            nextStore.locoScroll.stop();
            setTimeout(()=>{
                nextStore.setPageFullLoad(true);
                nextStore.locoScroll.start();
            },3600);
        });

    },[]);

    return (
        <>
            <HeadMeta title={title} description={description} img={img}/>
            <AnimatePresence exitBeforeEnter>
                {
                    !nextStore.pageFullLoad && <PreloaderSvg/>
                }
            </AnimatePresence>
            <Header/>
            <div id='main-container' className={`wrap`}>
                <SmoothScrollProvider>
                    <main className={'main-content'}>{children}</main>
                </SmoothScrollProvider>
            </div>
            <ContactsPopup/>
        </>

    );
})
export default Layout;