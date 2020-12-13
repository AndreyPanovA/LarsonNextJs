
import {data} from "../../data";
// import cls from "../../styles/mb.module.scss";
import cls from "./style.module.scss";
import LogicServ from "../../services/logicService";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'
// import {connect} from "react-redux"
// import {setCar, carItem} from "../reducers"
const { cn } = LogicServ;
const items =["Техобслуживание","Диагностика","Ремонт","Кузовной ремонт","Установка доп. оборудования"];
const props = {
    indexProps: 0,
}

const Links = ({setCar, carItem})=> {
    const router = useRouter().pathname.split("/")[1] 
   const callbacks ={
       onPress: (item)=> {
        setCar(item)
       }
   }
    const {volvo:{pages:{itemElement:item}}}=data;
    return (
        <>
        {item.map((el,idx)=> {
        return ( 
        <Link key={idx} href={`/${router}/[...id]`} as={`/${router}/tekhobsluzhivanie/${el.title.eng.toLowerCase()}`} >
          <a className={cn(cls["serv-item"])} onClick={callbacks.onPress.bind(this, el.title.eng.toLowerCase())}>
              <img src={el.img} alt="" />
              <p>{el.title["ru"]}</p>
          </a>
        </Link>
        )
        
    })
    }
    </>)
}
export default Links