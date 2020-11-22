
import {data} from "../../data";
// import cls from "../../styles/mb.module.scss";
import cls from "./style.module.scss";
import LogicServ from "../../services/logicService";
import Link from "next/link";
const { cn } = LogicServ;
const ModelsCatalog = () => {

    const {volvo:{pages:{itemElement:item}}}=data;
    return(
      <div className={cls["serv-container"]}>
      <div className={cls["tab-menu"]}>
       <p >Техобслуживание</p>
       <p>Диагностика</p>
       <p>Ремонт</p>
       <p>Кузовной ремонт</p>
       <p>Установка доп. оборудования</p>
      </div>
        <div className={cn(cls["catalog_row"], cls.flex_c)}>
        {item.map((el,idx)=> {
            return ( 
            <Link href={`mbv/[id]`} as={`/servis-mercedes-benz/mbv/${idx}`}>
              <a className={cn(cls["serv-item"])}>
                  <img src={el.img} alt="" />
                  <p>{el.title["ru"]}</p>
              </a>
            </Link>)
        })}
         
        </div>
      </div>
    )
  
  }
  export default ModelsCatalog;