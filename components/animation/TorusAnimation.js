import React,{useRef,Suspense, useState} from 'react';
import { Canvas, extend, useFrame, useLoader,  } from '@react-three/fiber';
import {useTexture, shaderMaterial} from "@react-three/drei";

function Torus(props) {

    const mesh = useRef()



    const texture = useTexture('/images/torus.jpg');
    texture.wrapT = 'RepeatWrapping';

     useFrame((state, delta) => (texture.offset.y += 0.002))

    return (
        <mesh
            {...props}
            rotation-x={2.2}
            rotation-y={-0.3}
            ref={mesh}
            scale={1.5}
            >
            <torusGeometry args={[0.12, 0.028, 32, 100]}/>
            <meshPhongMaterial color={'#ffffff'} shininess={50} map={texture} />


        </mesh>
    )
}



const TorusAnimation = () => {

    return (

        <Canvas style={{width: '100%', height: '100%'}}
        camera={{ fov: 5, near: 0.1, far: 1000, position: [0, 0, 5] }}>
            <Suspense fallback={null}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} color={'#C8B39A'} />
            <pointLight position={[-10, 10, -35]} color={'#C8B39A'} />
            <Torus position={[0, 0, 0]} />
            </Suspense>
        </Canvas>

    );
};

export default TorusAnimation;