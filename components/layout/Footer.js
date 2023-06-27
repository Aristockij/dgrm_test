import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import Arrow from "../icons/Arrow";


const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    const router = useRouter();
    const [showFooter, setShowFooter] = useState(true);
    const [greyFooter,setGreyFooter] = useState(false);
    const [whiteFooter, setWhiteFooter] = useState(false);
    useEffect(()=>{
        if(router.asPath === '/' || router.asPath === '/contacts/' ){
            setShowFooter(false)
        }
        if(router.asPath === '/projects/'){
            setGreyFooter(true)
        }
        if(router.asPath === '/team/'){
            setWhiteFooter(true)
        }
        },[])
    return (
        <>
            {
                showFooter &&
                <footer className={`footer ${greyFooter ? 'footer-grey':''} ${whiteFooter ? 'footer-white' : ''}`} >
                    <div className='footer-links'>
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
                            <Link  href="/example/">
                                <a className=''>
                                    да.
                                </a>
                            </Link>
                            <Link  href="/team/">
                                <a className=''>
                                    мы.
                                </a>
                            </Link>
                            <Link  href="/projects/">
                                <a className=''>
                                    можем.
                                </a>
                            </Link>
                        </div>
                    </div>
                </footer>
            }
        </>
    )
}

export default Footer;