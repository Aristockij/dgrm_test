import React, {useEffect} from 'react';
import {gsap} from "gsap";


const PreloaderCircle = () => {
    useEffect(()=>{
        const linesBlock = document.querySelector('.preloader-circle');
        // const radius = linesBlock.clientWidth / 2;

        // const line = document.createElement('span');
        setTimeout(() => {
            gsap.fromTo('.preloader-circle', {
              backgroundImage: 'linear-gradient(90deg, transparent 50%, black 50%), linear-gradient(90deg, black 50%, transparent 50%)'
          }, {
              backgroundImage: 'linear-gradient(90deg, transparent 50%, black 50%), linear-gradient(180deg, black 50%, transparent 50%)'
          })
              gsap.to('.preloader-circle', {
                delay: 100,
                duration: 100,
                rotation: "270_ccw",
            })
        }, 200);

    }, [])
    return (
        <div className='preloader'>
            <div className="preloader-circle">
            </div>
        </div>
    );
};

export default PreloaderCircle;