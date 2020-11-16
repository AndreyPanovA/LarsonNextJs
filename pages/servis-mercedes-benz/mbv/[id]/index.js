
import MainLayout from "../../../../components/MainLayout";
// import Navigation from "../../components/navigation/Navigation";
// import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "./style.module.scss";
// import Tour from "../../components/panorama/index";
// http://localhost:3000/servis-mercedes-benz/mb
import {data} from "../../../../data";
import LogicServ from "../../../../services/logicService";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
const { cn } = LogicServ;
// import '@google/model-viewer';
// import ModelViewer from 'react-model-viewer';
// import dynamic from 'next/dynamic'


// dynamic(import("@google/model-viewer"))
// const Scroll = dynamic(
//   () => {
//     return import("@google/model-viewer");
//   },
//   { ssr: false }
// );
// 
// const DynamicComponentWithNoSSR = dynamic(import('@google/model-viewer'), {
//   ssr: false
// })



const MbItems =(props)=>{ 
  // const modelPath = "/t/scene.gltf"
  const modelPath = "/volvo.gltf"
  useEffect(()=>{
    if(typeof window !== 'undefined') {
      require('@google/model-viewer');
   }
  },[])

    const {volvo:{pages:{itemElement:item}}}=data;
    const router = useRouter()
    const id = router.query.id
    console.log( id ,"router")
    const {name}= props;
    const [modal, setModal]= useState(false)
    return (
    <>
    <MainLayout>
      {/* <DynamicComponentWithNoSSR /> */}
      <model-viewer src={modelPath}  camera-controls auto-rotate class={cls.model}></model-viewer> 
       {router.query.id && <div className={cn(cls["car-container"])}>
            {/* <img src={item[id].img} alt="" /> */}
            
            <p>{item[id].title["ru"]}</p>
        </div>}
        {/* <Scroll /> */}
       
    </MainLayout>
    </>
  );}
  export default MbItems;
