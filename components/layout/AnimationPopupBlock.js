import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import LogoNew from "../icons/LogoNew";
import IconExit from "../icons/IconExit";
import ContactsForm from "../form/ContactsForm";
import {useMobxStores} from "../../store/store";


const AnimationPopupBlock = ({showContacts, ExitShowContacts}) => {
    const {nextStore} = useMobxStores();

    const variants ={
        active: {
            transform: "translateY(0%)",
        },
        unactive: {
            transform: "translateY(100%)",
        },
    }
    return (
        <AnimatePresence exitBeforeEnter>
            {
                showContacts &&
                <motion.section
                    variants={variants}
                    initial='unactive'
                    transition={{
                        duration: .9,
                        ease: [0.10, 0.80, 0.50, 0.90]
                    }}
                    exit='unactive'
                    animate={showContacts ? "active" : 'unactive'}

                    className='popup-contacts'>
                    <div className='popup-wrapper'>
                        <div className='popup-container'>
                            <div className="popup-header">
                                <Link href="/">
                                    <a  className='header-logo'
                                        onClick={
                                        ExitShowContacts}
                                    >
                                        <LogoNew className='header-logo-svg'/>
                                    </a>
                                </Link>
                                <div  className='popup-exit' onClick={()=>{
                                    nextStore.locoScroll.start();
                                    ExitShowContacts();
                                }}>
                                    <IconExit/>
                                </div>
                            </div>
                            <div className="popup-wrap">
                                <div className='h1 popup-title'>
                                    обсудить проект
                                </div>
                                <div className='popup-form-wrap'>
                                    <ContactsForm/>
                                </div>
                            </div>
                        </div>
                        <div className='popup-links'>
                            <a href="tel:+7 (8332) 204-234">
                                +7 (8332) 204-234
                            </a>
                            <a href="mailto:info@diagram.team">
                                info@diagram.team
                            </a>
                            <a href="tg://resolve?domain=digram_bot">
                                telegram
                            </a>
                        </div>

                    </div>


                </motion.section>
            }
        </AnimatePresence>
    );
};

export default AnimationPopupBlock;