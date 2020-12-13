
import MainLayout from "../../components/MainLayout";
import cls from "./style.module.scss";
import {data} from "../../data";
import LogicServ from "../../services/logicService";
import Tour from "../../components/panorama/index";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import ModelsCatalog from "../../components/models-catalog/index"
import {connect} from "react-redux"
import Link from "next/link";
import {dop, diagnostics, remont} from "../../components/models-catalog/links-data"
const { cn } = LogicServ;
import MbMap from "../../components/mb-map"

// const MbMap = ({only}) => {
//   if(only) {
//     return (
//     <div className={cls.card}>
//       <h1 style={{textAlign:"center", paddingBottom:15}}>Карта</h1>
//     <div className="panorama">
//     <iframe
//       src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e59348621f8f7d443d881e0e9454b2d4df2ca1b9b90391de232e09144a4129f&amp;source=constructor"
//       width="100%"
//       height="720"
//       frameBorder="0"
//     ></iframe>
//     </div>
//   </div>
//     )
//   }
//   return (
//     <div className={cls["serv-map"]} style={{paddingBottom:55}}>
//       <div className={cls["serv-map-line"]}></div>
//       <div className={cls["serv-container"]}>
//         <div className={cls["serv-map-contacts"]}>
//           <div className={cls["contacts-container"]}>
//             <div className={cls["map-flex"]}>
//               <h2>Контакты</h2>
//               <img src="/assets/img/larson-white.svg" alt="Larson" />
//             </div>
//             <p>Ежедневно в 9:00 до 20:00</p>
//             <p>Единый телефон: +7 (495) 781-10-81.</p>
//             <a href="">
//               Larson Коломенская <br />
//               (открыть в Яндекс.Навигаторе)
//             </a>
//             <p>
//               115533, г. Москва, проспект Андропова, д. 22, стр. 2 БЦ
//               «Нагатинский»
//             </p>
//             <a href="">
//               Larson Можайка
//               <br />
//               (открыть в Яндекс.Навигаторе)
//             </a>
//             <p>
//               121596, Московская обл., Новоивановское, Можайское шоссе, вл. 167
//               54-й км МКАД, внешняя сторона
//             </p>
//             <p>Внимание! Заезд с дублёра МКАД.</p>
//           </div>
//         </div>
//         <iframe
//           src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e59348621f8f7d443d881e0e9454b2d4df2ca1b9b90391de232e09144a4129f&amp;source=constructor"
//           width="100%"
//           height="720"
//           frameBorder="0"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

const MbItems =(props)=>{ 
  console.log(props.carItem, "props.carItem")
  const modelPath = ["/volvo.gltf", "/volvo.gltf", "/S40.gltf", "/S60.gltf", "/S80.gltf", "/XC90.gltf"]
  
  useEffect(()=>{
    if(typeof window !== 'undefined') {
      require('@google/model-viewer');
   }
  },[])
    const {volvo:{pages:{itemElement:item}}}=data;
    const {keys:elements} = data; 

    let actualIdex =0
    for (let i=0; i<item.length;i++) {
  
      const len = item[i].img.split("/").length-1
      const carInfo = item[i].img.split("/")[len].split(".")[0].toLowerCase()
     
      if(props.carItem.toLowerCase()==carInfo) {
        actualIdex =i
      }
    }
    const router = useRouter();
    let id = 0;

    for (let i = 0; i < item.length; i++) {
      if (router.query.id == item[i].title.eng.toLowerCase()) {
        id = i;
      }
    }
    const pathU = router.asPath.split('/'); 
    const {name}= props;
    const [modal, setModal]= useState(false)
    let bread = '';
    for (let i = 0; i<elements.length; i++) {
      if (('/'+pathU[1]) == elements[i].href) {
        bread = elements[i].h2.ru + ' / ' + 'Сервис Volvo' + ' / ';
      }
      bread = (<div style={{display:"flex"}}>
        <Link href="/"><a>Главная /</a></Link>
        <Link href="/servis-volvo"><a>Сервис Volvo /</a></Link>
        <Link href={router.asPath}><a>{item[actualIdex].title["ru"]}</a></Link>
     
      </div>)
      // 'Главная / Сервис Volvo / Услуги / '+item[actualIdex].title["ru"];
    }
    let text = ""
    const getBase = (data)=> {
      data.forEach((el ,idx)=> {
        let substring =el.url.split("/")[1],
        str =router.asPath.split("/")[3]
        console.log(substring, str, "fuck")
        if (str?.includes(substring)) {
          console.log(router.asPath.split("/")[3], "super1")
          text=el.ru
        } 
      })
    }
    if (router.asPath.split("/")[2]=="diagnostika") {
      getBase(diagnostics)
    }else if (router.asPath.split("/")[2]=="remont") {
      getBase(remont)
    }
    else if (router.asPath.split("/")[2]=="ustanovka-dop-oborudovaniya") {
      getBase(dop)
    }

    return (
    <>
    <MainLayout>
       <div className={cn(cls["car-container"])}>
         <div className={cn(cls["test"])}>
          <model-viewer src={modelPath[actualIdex]}  loading="eager" reveal="interaction" poster={item[actualIdex].img} camera-controls auto-rotate class={cls.model}>
              <div className={cn(cls["lazy-load-poster"])} slot="poster" style={{backgroundImage: `url(${item[actualIdex].img})`}}></div>
          
              <p className={cn(cls["button-load"])} slot="poster">Load 3D Model</p>

            </model-viewer>
          </div>
          <div className={cn(cls['title'])}>

        
            <p >{bread}</p>
            <h1 >{props.diagnosticsTitle|| text} {item[actualIdex].title["ru"]}</h1>
            </div>
            <ModelsCatalog indexProps={1} style={{color: "white"}}  />
              <div className={cn(cls["content"])}>
              <div className={cn(cls["order"])}><div>
            <h2>Записаться на диагностику  {item[actualIdex].title["ru"]}</h2>
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
                      <label for="slideThree">
                        <p>Я подтверждаю свое согласие на обработку персональных данных</p>
                      </label>
                  </div>
                </div>
                <div className={cn(cls["form-right"])}>
                  <img src={item[actualIdex].img} alt=""/>
                </div>
                
              </form>
              </div>
              
            </div>
            
            </div>
        </div>
        <div className={cn(cls['container-map'])}>
          <Tour text="Виртуальный тур" />
      </div>
 
           <MbMap />

      <div>
     
      </div>
    </MainLayout>
    </>
  );}

  export default connect(
    ({ site, lang, carItem, diagnosticsTitle}) => ({ site, lang, carItem, diagnosticsTitle })
  )(MbItems)
  // export default MbItems;
