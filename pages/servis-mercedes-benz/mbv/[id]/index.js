
import MainLayout from "../../../../components/MainLayout";
// import Navigation from "../../components/navigation/Navigation";
// import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "./style.module.scss";
// import Tour from "../../components/panorama/index";
// http://localhost:3000/servis-mercedes-benz/mb
import {data} from "../../../../data";
import LogicServ from "../../../../services/logicService";
import { useState } from "react";
import { useRouter } from 'next/router'
const { cn } = LogicServ;


// 


// 

const MbItems =(props)=>{ 
    const {volvo:{pages:{itemElement:item}}}=data;
    const router = useRouter()
    const id = router.query.id
    console.log( id ,"router")
    const {name}= props;
    const [modal, setModal]= useState(false)
    return (
    <>
    <MainLayout>
       {router.query.id && <div className={cn(cls["car-container"])}>
            <img src={item[id].img} alt="" />
            <p>{item[id].title["ru"]}</p>
        </div>}
        
    </MainLayout>
    </>
  );}
  export default MbItems;
// import React, { useRef, useState, useEffect, Suspense } from 'react'
// import * as THREE from 'three'
// import { Canvas, useFrame, useLoader } from 'react-three-fiber'

// let GLTFLoader

// const Bird = ({ speed, factor, url, ...props }) => {
//   const gltf = useLoader(GLTFLoader, url)
//   const group = useRef()
//   const [mixer] = useState(() => new THREE.AnimationMixer())
//   useEffect(
//     () => void mixer.clipAction(gltf.animations[0], group.current).play(),
//     [gltf.animations, mixer]
//   )
//   useFrame((state, delta) => {
//     group.current.rotation.y +=
//       Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5
//     mixer.update(delta * speed)
//   })
//   return (
//     <group ref={group}>
//       <scene name="Scene" {...props}>
//         <mesh
//           name="Object_0"
//           morphTargetDictionary={gltf.__$[1].morphTargetDictionary}
//           morphTargetInfluences={gltf.__$[1].morphTargetInfluences}
//           rotation={[1.5707964611537577, 0, 0]}
//         >
//           <bufferGeometry attach="geometry" {...gltf.__$[1].geometry} />
//           <meshStandardMaterial
//             attach="material"
//             {...gltf.__$[1].material}
//             name="Material_0_COLOR_0"
//           />
//         </mesh>
//       </scene>
//     </group>
//   )
// }

// const Birds = () => {
//   return new Array(5).fill().map((_, i) => {
//     const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
//     const y = -10 + Math.random() * 20
//     const z = -5 + Math.random() * 10
//     const bird = ['stork', 'parrot', 'flamingo'][Math.round(Math.random() * 2)]
//     let speed = bird === 'stork' ? 0.5 : bird === 'flamingo' ? 2 : 5
//     let factor =
//       bird === 'stork'
//         ? 0.5 + Math.random()
//         : bird === 'flamingo'
//         ? 0.25 + Math.random()
//         : 1 + Math.random() - 0.5
//     return (
//         // <MainLayout>
//       <Bird
//         key={i}
//         position={[x, y, z]}
//         rotation={[0, x > 0 ? Math.PI : 0, 0]}
//         speed={speed}
//         factor={factor}
//         url={`/glb/${bird}.glb`}
//       />
//     //   </MainLayout>
//     )
//   })
// }

// const BirdsPage = props => {
//   useEffect(() => {
//     GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader
//   }, [])
//   return (
//     <>
//     <MainLayout>
//       <Canvas camera={{ position: [0, 0, 35] }}>
//         <ambientLight intensity={2} />
//         <pointLight position={[40, 40, 40]} />
//         <Suspense fallback={null}>
//           <Birds />
//         </Suspense>
//       </Canvas>
//       </MainLayout>
//     </>
//   )
// }

// export default BirdsPage
