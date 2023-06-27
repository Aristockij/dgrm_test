import React from 'react';
import Svg404 from "../components/icons/Svg404";
import Link from "next/link";
import Arrow from "../components/icons/Arrow";

const page404 = () => {
    return (
        <div className='page404'>
            <Svg404/>
            <Link href="/">
                <a className='page404-link'>
                    <Arrow/>
                </a>
            </Link>
        </div>
    );
};

export default page404;