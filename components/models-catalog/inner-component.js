
import {data} from "../../data";
import cls from "./style.module.scss";
import LogicServ from "../../services/logicService";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'
const { cn } = LogicServ;

const items =["Техобслуживание","Диагностика","Ремонт","Кузовной ремонт","Установка доп. оборудования"];
const props = {
    indexProps: 0,
}

const InnerComponent =(props)=> {
    const {dataLink, setDiagnosticsTitle} = props
    const router =useRouter()
 
    const baseURL = router.pathname.split("/")[1] 

    const more = ['Посмотреть все услуги', 'Свернуть'];
    const [visState, setVisState] = useState({vis: true, text:more[0]}); 
    const {volvo:{pages:{itemElement:item}}}=data;
    const callbacks= {
        onPress: (title)=> {
            setDiagnosticsTitle(title)
        }
    }
    return (
    <div className={cn(cls["diacnostic-nav"], "shadShine")}>
    <div>
        {dataLink.map((item, idx) => {
             
            return ( <>{
                idx < 6 ? <Link href={`/${baseURL}/[...id]`} as={`/${baseURL}/${item.url}-${props.carItem}/`}><a onClick={callbacks.onPress.bind(this, item.ru)} className={cn(cls["link-width"])} style={props.style}>{item.ru}</a></Link>
                :
                <Link href={`/${baseURL}/[...id]`} as={`/${baseURL}/${item.url}-${props.carItem}/`}><a onClick={callbacks.onPress.bind(this, item.ru)} className={cn(cls["link-width"], [cls['visible']], [visState.vis])} style={props.style}>{item.ru}</a></Link>
            }</>
                
            )
        })}
    </div>
<div className={cn(cls['more'])} onClick={() => {setVisState({vis: !visState.vis, text:more[visState.vis ? 1 : 0]})}} style={props.style}>{visState.text}</div>
</div>
)
}
export default InnerComponent