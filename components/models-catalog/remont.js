
import {data} from "../../data";
// import cls from "../../styles/mb.module.scss";
import cls from "./style.module.scss";
import LogicServ from "../../services/logicService";
import Link from "next/link";
import { useState } from "react";
const { cn } = LogicServ;
import {dop, diagnostics, remont} from "./links-data"
import {InnerComponent} from "./export"
const items =["Техобслуживание","Диагностика","Ремонт","Кузовной ремонт","Установка доп. оборудования"];
const props = {
    indexProps: 0,
}

const Remont = (props)=> { 
    return(
        <InnerComponent {...props} dataLink={remont}/>
    );
}
export default Remont