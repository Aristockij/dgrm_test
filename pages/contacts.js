import React, {useState} from 'react';
import Layout from "../components/layout";
import ContactsAnimationCircles from "../components/pages/ContactsAnimationCircles";
import PopupWithForm from "../components/pages/PopupWithForm";
import { motion } from 'framer-motion';
import ContactsPopup from "../components/layout/ContactsPopup";

const Contacts = () => {

    const meta = {
        title: "Diagram",
        description: "Description",
        img: "/public/images/pic.jpeg"
    }
    const [openForm, setOpenForm]=useState(false);
    const isOpen =()=>{
        setOpenForm(true);
    }
    const closeForm =()=>{
        setOpenForm(false);
    }
    const variants ={
        enter: {opacity: 1},
        exit: {opacity: 0},
    }
    return (
        <>
            <Layout title={meta.title} description={meta.description} img={meta.img}>
                <section className="contacts-wrap">
                    <motion.section transition={{duration: 0.5}} variants={variants} initial="exit" animate="enter" exit="exit" >
                        <ContactsAnimationCircles setOpenPopupForm={isOpen}/>
                    </motion.section>
                </section>
            </Layout>
            <PopupWithForm openPopupContacts={openForm} setOpenPopupContacts={closeForm}/>
        </>
    );
};

export default Contacts;