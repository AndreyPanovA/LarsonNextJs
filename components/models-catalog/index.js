
import {data} from "../../data";
// import cls from "../../styles/mb.module.scss";
import cls from "./style.module.scss";
import LogicServ from "../../services/logicService";
import Link from "next/link";
import { useState } from "react";
const { cn } = LogicServ;
import {setCar, setDiagnosticsTitle} from "../reducers"
import {connect} from "react-redux"
import {dop, diagnostics, remont} from "./links-data"
import {Links,Diagnostic,Dops,Remont} from "./export"
const items =["Техобслуживание","Диагностика","Ремонт","Кузовной ремонт","Установка доп. оборудования"];
const props = {
    indexProps: 0,
}

const ModelsCatalog = (props) => {
    const {style} = props
    const components =[<Links  {...props} />,<Diagnostic {...props}/>, <Remont {...props} />, <Dops {...props}/>]
    const {volvo:{pages:{itemElement:item}}}=data;
    const [taber, setTabber] = useState({index: props.indexProps})
    const callbacks = {
        onClick: (idx)=> {
            setTabber((prev)=> ({...prev, index:idx}))
        }
    }
    return(
      <div className={cls["serv-container"]}>
      <div className={cls["tab-menu"]}>
        {items.map((el,idx)=> <p key={idx} onClick={()=>callbacks.onClick(idx)} style={style}>{el}</p>)}
      </div>
        <div className={cn(cls["catalog_row"], [cls["flex_c"],cls["show"]], [true, true])}>
        { components[taber.index]}
        </div>
      </div>
    )
  
  }
  export default connect(
    ({ site, lang, carItem }) => ({ site, lang, carItem }),
    (dispatch)=> {
        return {
            setCar: setCar(dispatch),
            setDiagnosticsTitle: setDiagnosticsTitle(dispatch)
        }
    }
  )(ModelsCatalog)
