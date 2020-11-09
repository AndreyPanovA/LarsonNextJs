
import MainLayout from "../../../../components/MainLayout";
// import Navigation from "../../components/navigation/Navigation";
// import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "./style.module.scss";
// import Tour from "../../components/panorama/index";
// http://localhost:3000/servis-mercedes-benz/mb
import {data} from "../../../../data";
import LogicServ from "../../../../services/logicService";
import { useState } from "react";
import { useRouter } from 'next/router'
const { cn } = LogicServ;

const MbItems =(props)=>{ 
    const {volvo:{pages:{itemElement:item}}}=data;
    const router = useRouter()
    const id = router.query.id
    console.log( id ,"router")
    const {name}= props;
    const [modal, setModal]= useState(false)
    return (
    <>
    <MainLayout>
       {router.query.id && <div className={cn(cls["car-container"])}>
            <img src={item[id].img} alt="" />
            <p>{item[id].title["ru"]}</p>
        </div>}
    </MainLayout>
    </>
  );}
  export default MbItems;