
import {data} from "../../data";
// import cls from "../../styles/mb.module.scss";
import cls from "./style.module.scss";
import LogicServ from "../../services/logicService";
import Link from "next/link";
import { useState } from "react";
const { cn } = LogicServ;
const items =["Техобслуживание","Диагностика","Ремонт","Кузовной ремонт","Установка доп. оборудования"]


const Links = ()=> {
    const {volvo:{pages:{itemElement:item}}}=data;
    return (
        <>
        {item.map((el,idx)=> {
        return ( 
        <Link key={idx} href={`/servis-mercedes-benz/mbv/[id]`} as={`/servis-mercedes-benz/mbv/${idx}`}>
          <a className={cn(cls["serv-item"])}>
              <img src={el.img} alt="" />
              <p>{el.title["ru"]}</p>
          </a>
        </Link>)
    })}
    </>)
}


const Diagnostic = ()=> {
    return(
        <div className={cn(cls["diacnostic-nav"], "shadShine")}>
            {/* <Link href={`/servis-mercedes-benz/mbv/[id]`} as={`/servis-mercedes-benz/mbv/${idx}`}>
              <a className={cn(cls["serv-item"])}>
                  <img src={el.img} alt="" />
                  <p>{el.title["ru"]}</p>
              </a>
            </Link> */}
            {/* <div> */}
                <a href="#">Диагностика дизельного двигателя</a>
                <a href="#">Диагностика двигателя</a>
            {/* </div>
            <div> */}
                <a href="#">Диагностика АКПП</a>
                <a href="#">Диагностика подвески</a>
            {/* </div>
            <div> */}
                <a href="#">Диагностика дизельного двигателя</a>
                <a href="#">Диагностика двигателя</a>
                <a href="#">Компьютерная диагностика</a>
            {/* </div> */}
        </div>
    );
}

const components =[<Links />,<Diagnostic />]
const ModelsCatalog = () => {

    const {volvo:{pages:{itemElement:item}}}=data;
    const [taber, setTabber] = useState({index: 0})
    const callbacks = {
        onClick: (idx)=> {
            setTabber((prev)=> ({...prev, index:idx}))
        }
    }
    return(
      <div className={cls["serv-container"]}>
      <div className={cls["tab-menu"]}>
    {items.map((el,idx)=> {
        return (
            <p key={idx} onClick={()=>callbacks.onClick(idx)}>{el}</p>
        )
    })}
      </div>
        <div className={cn(cls["catalog_row"], [cls["flex_c"],cls["show"]], [true, true])}>
            
        { components[taber.index]}
         
        </div>
      </div>
    )
  
  }
  export default ModelsCatalog;