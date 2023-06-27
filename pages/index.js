import Layout from "../components/layout";
import TextAnimation from "../components/pages/index/TextAnimation";
import ProjectView from "../components/pages/index/ProjectView";
import { motion } from 'framer-motion';


export default function Home() {

    const meta = {
        title: "Diagram",
        description: "Description",
        img: "/public/images/pic.jpeg"
    }

    const variants ={
        enter: {opacity: 1},
        exit: {opacity: 0},
    }

    return (
                <Layout title={meta.title} description={meta.description} img={meta.img}>
                    <section  className='home'>
                        <motion.section transition={{duration: 0.5}}  variants={variants} initial="exit" animate="enter" exit="exit">
                            <TextAnimation/>
                            <ProjectView/>
                        </motion.section>
                    </section>
                </Layout>
    )

}
