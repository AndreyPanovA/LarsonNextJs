
import MainLayout from "../../../../components/MainLayout";
// import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "./style.module.scss";
// http://localhost:3000/servis-mercedes-benz/mb
import {data} from "../../../../data";
import LogicServ from "../../../../services/logicService";
import Tour from "../../../../components/panorama/index";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import ModelsCatalog from "../../../../components/models-catalog/index"
const { cn } = LogicServ;

const MbMap = () => {
  return (
    <div className={cls["serv-map"]} style={{paddingBottom:55}}>
      <div className={cls["serv-map-line"]}></div>
      <div className={cls["serv-container"]}>
        <div className={cls["serv-map-contacts"]}>
          <div className={cls["contacts-container"]}>
            <div className={cls["map-flex"]}>
              <h2>Контакты</h2>
              <img src="/assets/img/larson-white.svg" alt="Larson" />
            </div>
            <p>Ежедневно в 9:00 до 20:00</p>
            <p>Единый телефон: +7 (495) 781-10-81.</p>
            <a href="">
              Larson Коломенская <br />
              (открыть в Яндекс.Навигаторе)
            </a>
            <p>
              115533, г. Москва, проспект Андропова, д. 22, стр. 2 БЦ
              «Нагатинский»
            </p>
            <a href="">
              Larson Можайка
              <br />
              (открыть в Яндекс.Навигаторе)
            </a>
            <p>
              121596, Московская обл., Новоивановское, Можайское шоссе, вл. 167
              54-й км МКАД, внешняя сторона
            </p>
            <p>Внимание! Заезд с дублёра МКАД.</p>
          </div>
        </div>
        <iframe
          style={{marginTop:15, width:"300px", height:"300px"}}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e59348621f8f7d443d881e0e9454b2d4df2ca1b9b90391de232e09144a4129f&amp;source=constructor"
          width="100%"
          height="720"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

const MbItems =(props)=>{ 
  
  const modelPath = ["/volvo.gltf", "/volvo.gltf", "/S40.gltf", "/S60.gltf", "/S80.gltf", "/XC90.gltf"]
  useEffect(()=>{
    if(typeof window !== 'undefined') {
      require('@google/model-viewer');
   }
  },[])
    const {volvo:{pages:{itemElement:item}}}=data;
    const {keys:elements} = data; 
    const router = useRouter();
    let id = 0;

    for (let i = 0; i < item.length; i++) {
      if (router.query.id == item[i].title.eng.toLowerCase()) {
        id = i;
      }
    }
    const pathU = router.asPath.split('/'); 
    console.log(router.asPath.split('/'), elements);
    const {name}= props;
    const [modal, setModal]= useState(false)
    let bread = '';
    for (let i = 0; i<elements.length; i++) {
      if (('/'+pathU[1]) == elements[i].href) {
        bread = elements[i].h2.ru + ' / ' + pathU[2] + ' / ';
      }
    }
    
    return (
    <>
    <MainLayout>

       {router.query.id && <div className={cn(cls["car-container"])}>
            {modal ? 
            <model-viewer src={modelPath[router.query.id]}  loading="eager" reveal="interaction" poster={item[id].img} camera-controls auto-rotate class={cls.model}>
              <div className={cn(cls["lazy-load-poster"])} slot="poster" style={{backgroundImage: `url(${item[id].img})`}}></div>
          
              <p className={cn(cls["button-load"])} slot="poster">Load 3D Model</p>

            </model-viewer> : <img className={cn(cls["top-img"])} src={item[id].img} alt="" onClick={()=> {
              setModal(!modal)
            }}/>}
            <p>{bread}</p>
            <h1 className={cn(cls['title'])}>Диагностика {item[id].title["ru"]}</h1>
            <div className={cn(cls["content"])}>
            <div className={cn(cls["order"])}>
            <ModelsCatalog />
          <div>
          <h2>Записаться на диагностику  {item[id].title["ru"]}</h2>
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
                      <input type="checkbox" value="None" id="slideThree" name="check" />
                      <label for="slideThree"><p>Я подтверждаю свое согласие на обработку персональных данных</p></label>
                  </div>
                </div>
                <div className={cn(cls["form-right"])}>
                  <img src={item[id].img} alt=""/>
                </div>
                
              </form>
              </div>
              
            </div>
            
            </div>
        </div>
        
        
        }
        <div className={cn(cls['container-map'])}>
          <Tour text="Виртуальный тур" />
        <iframe
          style={{marginTop:15, width:"100%", height:"300px"}}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e59348621f8f7d443d881e0e9454b2d4df2ca1b9b90391de232e09144a4129f&amp;source=constructor"
          width="100%"
          height="720"
          frameBorder="0"
        ></iframe>
      </div>
    </MainLayout>
    </>
  );}
  export default MbItems;
