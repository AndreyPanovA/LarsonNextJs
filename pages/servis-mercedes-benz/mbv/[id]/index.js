
import MainLayout from "../../../../components/MainLayout";
// import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "./style.module.scss";
// http://localhost:3000/servis-mercedes-benz/mb
import {data} from "../../../../data";
import LogicServ from "../../../../services/logicService";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import ModelsCatalog from "../../../../components/models-catalog/index"
const { cn } = LogicServ;
const MbItems =(props)=>{ 
  
  const modelPath = ["/volvo.gltf", "/volvo.gltf", "/S40.gltf", "/S60.gltf", "/S80.gltf", "/XC90.gltf"]
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
    const [modal, setModal]= useState(true)
    return (
    <>
    <MainLayout>
       {router.query.id && <div className={cn(cls["car-container"])}>
            {modal ? 
            <model-viewer src={modelPath[router.query.id]}  loading="eager" reveal="interaction" poster={item[id].img} camera-controls auto-rotate class={cls.model}>
              <div className={cn(cls["lazy-load-poster"])} slot="poster" style={{backgroundImage: `url(${item[id].img})`}}></div>
          
              <p className={cn(cls["button-load"])} slot="poster">Load 3D Model</p>

            </model-viewer> : <img className={cn(cls["top-img"])} src={item[id].img} alt="" onClick={()=> {
              // setModal(!modal)
            }}/>}
       
            <div className={cn(cls["content"])}>
            <div className={cn(cls["order"])}>
          <h1>Записаться на диагностику  {item[id].title["ru"]}</h1>
              <form>
                <div className={cn(cls["form-left"])}>
                  <div className={cn(cls["form-item"])}>
                    <label>Ваше имя</label>
                    <input  type="text"/>
                  </div>
                  <div className={cn(cls["form-item"])}>
                    <label>Ваш телефон</label>
                    <input  type="text"/>
                  </div>
                  <div className={cn(cls["form-item"])}>
                    <p>Я подтверждаю свое согласие на обработку персональных данных</p>
                    <div className={cn(cls["slideThree"])}>  
                      <input type="checkbox" value="None" id="slideThree" name="check" />
                      <label for="slideThree"></label>
                    </div>
                  </div>
                </div>
                <div className={cn(cls["form-right"])}>
                  <img src={item[id].img} alt=""/>
                </div>
                
              </form>
              
            </div>
            <ModelsCatalog />
            </div>
        </div>
        
        
        }
  
    </MainLayout>
    </>
  );}
  export default MbItems;
