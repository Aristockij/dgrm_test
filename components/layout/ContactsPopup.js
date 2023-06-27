import React, {useEffect, useState} from 'react';
import PopupLogo from "../icons/PopupLogo";
import IconExit from "../icons/IconExit";
import Link from "next/link";
import LogoNew from "../icons/LogoNew";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import ContactsForm from "../form/ContactsForm";
import {useMobxStores} from "../../store/store";
import AnimationPopupBlock from "./AnimationPopupBlock";

const ContactsPopup = () => {
    const [showContacts, setShowContacts]= useState(false);
    const {nextStore} = useMobxStores();
    const exitPopup = ()=> setShowContacts(false);


    const router = useRouter();
    return (
        <>
            {
                router.asPath !== '/contacts/' &&

                <>
                    <div className={`popup-trigger ${router.asPath === '/example/' ? "popup-trigger-black" : ''}`} onClick={()=> {
                        setShowContacts(true);
                        nextStore.locoScroll.stop()
                        // togglePauseScroll();
                    }}>
                        <span className='popup-trigger-text'>
                            обсудить проект
                        </span>
                        <PopupLogo/>
                    </div>
                    <AnimationPopupBlock showContacts={showContacts}  ExitShowContacts={exitPopup}/>
                </>
            }
      </>
    );
};

export default ContactsPopup;