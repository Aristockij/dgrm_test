import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import LogoNew from "../icons/LogoNew";
import IconExit from "../icons/IconExit";
import {observer} from "mobx-react";
import {useMobxStores} from "../../store/store";
import ContactsForm from "../form/ContactsForm";
import AnimationPopupBlock from "../layout/AnimationPopupBlock";

const PopupWithForm = ({openPopupContacts, setOpenPopupContacts}) => {
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
        <AnimationPopupBlock showContacts={openPopupContacts}  ExitShowContacts={setOpenPopupContacts}/>
    );
};

export default observer(PopupWithForm);