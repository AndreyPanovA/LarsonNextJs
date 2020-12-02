
import {data} from "../../data";
// import cls from "../../styles/mb.module.scss";
import cls from "./style.module.scss";
import LogicServ from "../../services/logicService";
import Link from "next/link";
import { useState } from "react";
const { cn } = LogicServ;
const items =["Техобслуживание","Диагностика","Ремонт","Кузовной ремонт","Установка доп. оборудования"];

const Links = ()=> {
    const {volvo:{pages:{itemElement:item}}}=data;
    return (
        <>
        {item.map((el,idx)=> {
        return ( 
        <Link key={idx} href={`/servis-mercedes-benz/mbv/[id]`} as={`/servis-mercedes-benz/mbv/${el.title.eng.toLowerCase()}`}>
          <a className={cn(cls["serv-item"])}>
              <img src={el.img} alt="" />
              <p>{el.title["ru"]}</p>
          </a>
        </Link>)
    })}
    </>)
}

const dop = [
    {ru:"Установка аксессуаров", eng:"", url:"ustanovka-aksessuarov"},
    {ru:"Установка брызговиков", eng:"", url:"ustanovka-bryzgovikov"},
    {ru:"Установка видеорегистратора", eng:"", url:"ustanovka-videoregistratora"},
    {ru:"Установка защитных сеток", eng:"", url:"ustanovka-zashchitnyh-setok"},
    {ru:"Установка защиты ДВС", eng:"", url:"ustanovka-zashchity-dvs"},
    {ru:"Установка камеры заднего вида", eng:"", url:"ustanovka-kamery-zadnego-vida"},
    {ru:"Установка подкрылка", eng:"", url:"ustanovka-podkrylka"},
    {ru:"Установка порогов", eng:"", url:"ustanovka-porogov"},
    {ru:"Установка регистратора", eng:"", url:"ustanovka-registratora"},
    {ru:"Установка фаркопа", eng:"", url:"ustanovka-farkopa"},
    {ru:"Активация Bluetooth audio", eng:"", url:"aktivaciya-bluetooth-audio"},
    {ru:"Активация Android Auto", eng:"", url:"aktivaciya-android-auto"},
    {ru:"Активация Apple Car Play", eng:"", url:"aktivaciya-apple-car-play"},
    {ru:"Отключение мочевины", eng:"", url:"otklyuchenie-mocheviny"},
    {ru:"Отключение радарных датчиков", eng:"", url:"otklyuchenie-radarnyh-datchikov"},
    {ru:"Отключение системы мертвых зон", eng:"", url:"otklyuchenie-sistemy-mertvyh-zon"},
    {ru:"Отключение системы SCR", eng:"", url:"otklyuchenie-sistemy-scr"},
    {ru:"Отключение Collision Prevention Assist", eng:"", url:"otklyuchenie-collision-prevention-assist"}
];

const diagnostics = [
    {ru:"Диагностика аккумулятора", eng:"", url:"diagnostika"},
    {ru:"Диагностика АКПП", eng:"", url:"diagnostika-akkumulyatora"},
    {ru:"Диагностика двигателя", eng:"", url:"diagnostika-akpp"},
    {ru:"Диагностика коробки передач", eng:"", url:"diagnostika-korobki-peredach"},
    {ru:"Диагностика подвески", eng:"", url:"diagnostika-podveski"},
    {ru:"Диагностика течей", eng:"", url:"diagnostika-techey"},
    {ru:"Диагностика шины CAN", eng:"", url:"diagnostika-shiny-can"},
    {ru:"Диагностика электрики", eng:"", url:"diagnostika-ehlektriki"},
    {ru:"Диагностика течей", eng:"", url:"diagnostika-techey"},
    {ru:"Компьютерная диагностика", eng:"", url:"kompyuternaya-diagnostika"},
    {ru:"Комплексная проверка автомобиля", eng:"", url:"kompleksnaya-proverka-avtomobilya"},
    {ru:"Проверка автомобиля перед покупкой", eng:"", url:"proverka-avtomobilya-pered-pokupkoy"},
];

const remont = [
    {ru:"Антибактериальная обработка кондиционера", eng:"", url:"antibakterialnaya-obrabotka-kondicionera"},
{ru:"Загрузка ПО", eng:"", url:"zagruzka-po"},
{ru:"Замена абсорбера", eng:"", url:"zamena-absorbera"},
{ru:"Замена аккумулятора", eng:"", url:"zamena-akkumulyatora"},
{ru:"Замена амортизаторов", eng:"", url:"zamena-amortizatorov"},
{ru:"Замена антифриза", eng:"", url:"zamena-antifriza"},
{ru:"Замена блока двигателя", eng:"", url:"zamena-bloka-dvigatelya"},
{ru:"Замена воздушного фильтра", eng:"", url:"zamena-vozdushnogo-filtra"},
{ru:"Замена генератора", eng:"", url:"zamena-generatora"},
{ru:"Замена головки блока цилиндров", eng:"", url:"zamena-golovki-bloka-cilindrov"},
{ru:"Замена ГРМ D2", eng:"", url:"zamena-grm-d2"},
{ru:"Замена ГРМ D3", eng:"", url:"zamena-grm-d3"},
{ru:"Замена ГРМ D4", eng:"", url:"zamena-grm-d4"},
{ru:"Замена ГРМ D5", eng:"", url:"zamena-grm-d5"},
{ru:"Замена ГРМ T3", eng:"", url:"zamena-grm-t3"},
{ru:"Замена ГРМ T4", eng:"", url:"zamena-grm-t4"},
{ru:"Замена ГРМ T5", eng:"", url:"zamena-grm-t5"},
{ru:"Замена датчика уровня кузова", eng:"", url:"zamena-datchika-urovnya-kuzova"},
{ru:"Замена дисков", eng:"", url:"zamena-diskov"},
{ru:"Замена жидкости ГУР", eng:"", url:"zamena-zhidkosti-gur"},
{ru:"Замена заднего сальника колнвала", eng:"", url:"zamena-zadnego-salnika-kolnvala"},
{ru:"Замена катушки зажигания", eng:"", url:"zamena-katushki-zazhiganiya"},
{ru:"Замена колодок", eng:"", url:"zamena-kolodok"},
{ru:"Замена компрессора кондиционера", eng:"", url:"zamena-kompressora-kondicionera"},
{ru:"Замена компрессора пневмоподвески", eng:"", url:"zamena-kompressora-pnevmopodveski"},
{ru:"Замена корпуса масляного фильтра", eng:"", url:"zamena-korpusa-maslyanogo-filtra"},
{ru:"Замена ламп", eng:"", url:"zamena-lamp"},
{ru:"Замена лобового стекла", eng:"", url:"zamena-lobovogo-stekla"},
{ru:"Замена масла", eng:"", url:"zamena-masla"},
{ru:"Замена масла в АКПП", eng:"", url:"zamena-masla-v-akpp"},
{ru:"Замена масла в двигателе", eng:"", url:"zamena-masla-v-dvigatele"},
{ru:"Замена масла в муфте полного привода", eng:"", url:"zamena-masla-v-mufte-polnogo-privoda"},
{ru:"Замена масла в муфте Халдекс", eng:"", url:"zamena-masla-v-mufte-haldeks"},
{ru:"Замена масла в муфте Haldex", eng:"", url:"zamena-masla-v-mufte-haldex"},
{ru:"Замена маслоохладителя", eng:"", url:"zamena-masloohladitelya"},
{ru:"Замена масляного фильтра", eng:"", url:"zamena-maslyanogo-filtra"},
{ru:"Замена механизма стеклоочистителя", eng:"", url:"zamena-mekhanizma-stekloochistitelya"},
{ru:"Замена моторчика печки", eng:"", url:"zamena-motorchika-pechki"},
{ru:"Замена муфты генератора", eng:"", url:"zamena-mufty-generatora"},
{ru:"Замена насоса ГУР", eng:"", url:"zamena-nasosa-gur"},
{ru:"Замена насоса муфты полного привода", eng:"", url:"zamena-nasosa-mufty-polnogo-privoda"},
{ru:"Замена насоса муфты Халдекс", eng:"", url:"zamena-nasosa-mufty-haldeks"},
{ru:"Замена насоса муфты Haldex", eng:"", url:"zamena-nasosa-mufty-haldex"},
{ru:"Замена насоса охлаждающей жидкости", eng:"", url:"zamena-nasosa-ohlazhdayushchey-zhidkosti"},
{ru:"Замена насоса Халдекс", eng:"", url:"zamena-nasosa-haldeks"},
{ru:"Замена насоса Haldex", eng:"", url:"zamena-nasosa-haldex"},
{ru:"Замена опроных подшипников", eng:"", url:"zamena-opronyh-podshipnikov"},
{ru:"Замена охлаждающей жидкости", eng:"", url:"zamena-ohlazhdayushchey-zhidkosti"},
{ru:"Замена охлаждющей жидкости", eng:"", url:"zamena-ohlazhdyushchey-zhidkosti"},
{ru:"Замена патрубков наддува воздуха", eng:"", url:"zamena-patrubkov-nadduva-vozduha"},
{ru:"Замена патрубков охлаждающей жидкости", eng:"", url:"zamena-patrubkov-ohlazhdayushchey-zhidkosti"},
{ru:"Замена переднего сальника колнвала", eng:"", url:"zamena-perednego-salnika-kolnvala"},
{ru:"Замена пневмобаллона", eng:"", url:"zamena-pnevmoballona"},
{ru:"Замена пневмостойки", eng:"", url:"zamena-pnevmostoyki"},
{ru:"Замена подушек двигателя", eng:"", url:"zamena-podushek-dvigatelya"},
{ru:"Замена полуоси", eng:"", url:"zamena-poluosi"},
{ru:"Замена помпы", eng:"", url:"zamena-pompy"},
{ru:"Замена предохранителя", eng:"", url:"zamena-predohranitelya"},
{ru:"Замена привода", eng:"", url:"zamena-privoda"},
{ru:"Замена прокладки", eng:"", url:"zamena-prokladki"},
{ru:"Замена прокладки впускного коллектора", eng:"", url:"zamena-prokladki-vpusknogo-kollektora"},
{ru:"Замена прокладки выпускного коллектора", eng:"", url:"zamena-prokladki-vypusknogo-kollektora"},
{ru:"Замена пружин", eng:"", url:"zamena-pruzhin"},
{ru:"Замена радиатора", eng:"", url:"zamena-radiatora"},
{ru:"Замена ремня вспомогательного оборудования", eng:"", url:"zamena-remnya-vspomogatelnogo-oborudovaniya"},
{ru:"Замена ремня генератора", eng:"", url:"zamena-remnya-generatora"},
{ru:"Замена ремня гидроусилителя", eng:"", url:"zamena-remnya-gidrousilitelya"},
{ru:"Замена ремня кондиционера", eng:"", url:"zamena-remnya-kondicionera"},
{ru:"Замена ремня навесного оборудования", eng:"", url:"zamena-remnya-navesnogo-oborudovaniya"},
{ru:"Замена рулевой рейки", eng:"", url:"zamena-rulevoy-reyki"},
{ru:"Замена рулевых наконечников", eng:"", url:"zamena-rulevyh-nakonechnikov"},
{ru:"Замена рулевых тяг", eng:"", url:"zamena-rulevyh-tyag"},
{ru:"Замена рычагов задних поперечных", eng:"", url:"zamena-rychagov-zadnih-poperechnyh"},
{ru:"Замена рычагов задних продольных", eng:"", url:"zamena-rychagov-zadnih-prodolnyh"},
{ru:"Замена рычагов передних", eng:"", url:"zamena-rychagov-perednih"},
{ru:"Замена рычагов передних поперечных", eng:"", url:"zamena-rychagov-perednih-poperechnyh"},
{ru:"Замена рычагов передних продольных", eng:"", url:"zamena-rychagov-perednih-prodolnyh"},
{ru:"Замена сайлентблоков", eng:"", url:"zamena-saylentblokov"},
{ru:"Замена сайлентблоков задних рычагов", eng:"", url:"zamena-saylentblokov-zadnih-rychagov"},
{ru:"Замена сайлентблоков передних рычагов", eng:"", url:"zamena-saylentblokov-perednih-rychagov"},
{ru:"Замена салников АКПП", eng:"", url:"zamena-salnikov-akpp"},
{ru:"Замена салонного фильтра", eng:"", url:"zamena-salonnogo-filtra"},
{ru:"Замена сальника колнвала", eng:"", url:"zamena-salnika-kolnvala"},
{ru:"Замена сальников", eng:"", url:"zamena-salnikov"},
{ru:"Замена сальников раздаточной коробки", eng:"", url:"zamena-salnikov-razdatochnoy-korobki"},
{ru:"Замена свечей зажигания", eng:"", url:"zamena-svechey-zazhiganiya"},
{ru:"Замена свечи накаливания", eng:"", url:"zamena-svechi-nakalivaniya"},
{ru:"Замена стабилизатора", eng:"", url:"zamena-stabilizatora"},
{ru:"Замена стартера", eng:"", url:"zamena-startera"},
{ru:"Замена стекла", eng:"", url:"zamena-stekla"},
{ru:"Замена стоек стабилизатора", eng:"", url:"zamena-stoek-stabilizatora"},
{ru:"Замена стоек стабилизатора задних", eng:"", url:"zamena-stoek-stabilizatora-zadnih"},
{ru:"Замена стоек стабилизатора передних", eng:"", url:"zamena-stoek-stabilizatora-perednih"},
{ru:"Замена стойки стабилизатора", eng:"", url:"zamena-stoyki-stabilizatora"},
{ru:"Замена супортов", eng:"", url:"zamena-suportov"},
{ru:"Замена ТНВД", eng:"", url:"zamena-tnvd"},
{ru:"Замена топливного насоса", eng:"", url:"zamena-toplivnogo-nasosa"},
{ru:"Замена топливного фильтра", eng:"", url:"zamena-toplivnogo-filtra"},
{ru:"Замена топливного шланга", eng:"", url:"zamena-toplivnogo-shlanga"},
{ru:"Замена топливной трубки", eng:"", url:"zamena-toplivnoy-trubki"},
{ru:"Замена топливных форсунок", eng:"", url:"zamena-toplivnyh-forsunok"},
{ru:"Замена тормозного шланга", eng:"", url:"zamena-tormoznogo-shlanga"},
{ru:"Замена тормозной жидкости", eng:"", url:"zamena-tormoznoy-zhidkosti"},
{ru:"Замена тормозной трубки", eng:"", url:"zamena-tormoznoy-trubki"},
{ru:"Замена тормозных дисков", eng:"", url:"zamena-tormoznyh-diskov"},
{ru:"Замена тормозных колодок", eng:"", url:"zamena-tormoznyh-kolodok"},
{ru:"Замена трапеции стеклоочистителя", eng:"", url:"zamena-trapecii-stekloochistitelya"},
{ru:"Замена турбины", eng:"", url:"zamena-turbiny"},
{ru:"Замена тяги вихревых заслонок", eng:"", url:"zamena-tyagi-vihrevyh-zaslonok"},
{ru:"Замена форсунок", eng:"", url:"zamena-forsunok"},
{ru:"Замена Шруса", eng:"", url:"zamena-shrusa"},
{ru:"Замена щеток стеклоочистителя", eng:"", url:"zamena-shchetok-stekloochistitelya"},
{ru:"Заправка кондиционеров", eng:"", url:"zapravka-kondicionerov"},
{ru:"Зарядка аккумулятора", eng:"", url:"zaryadka-akkumulyatora"},
{ru:"Мойка радиаторов", eng:"", url:"moyka-radiatorov"},
{ru:"Обновление ПО", eng:"", url:"obnovlenie-po"},
{ru:"Переуплотнение двигателя", eng:"", url:"pereuplotnenie-dvigatelya"},
{ru:"Прожиг сажевого фильтра", eng:"", url:"prozhig-sazhevogo-filtra"},
{ru:"Промывка топливных форсунок", eng:"", url:"promyvka-toplivnyh-forsunok"},
{ru:"Промывка форсунок", eng:"", url:"promyvka-forsunok"},
{ru:"Регенерация сажевого фильтра", eng:"", url:"regeneraciya-sazhevogo-filtra"},
{ru:"Регулировка фар", eng:"", url:"regulirovka-far"},
{ru:"Ремонт автоматической коробки передач", eng:"", url:"remont-avtomaticheskoy-korobki-peredach"},
{ru:"Ремонт АКПП", eng:"", url:"remont-akpp"},
{ru:"Ремонт генератора", eng:"", url:"remont-generatora"},
{ru:"Ремонт двигателя", eng:"", url:"remont-dvigatelya"},
{ru:"Ремонт замков дверей", eng:"", url:"remont-zamkov-dverey"},
{ru:"Ремонт кондиционеров", eng:"", url:"remont-kondicionerov"},
{ru:"Ремонт лобового стекла", eng:"", url:"remont-lobovogo-stekla"},
{ru:"Ремонт подвески", eng:"", url:"remont-podveski"},
{ru:"Ремонт прикуривателя", eng:"", url:"remont-prikurivatelya"},
{ru:"Ремонт проводки", eng:"", url:"remont-provodki"},
{ru:"Ремонт розетки 12V", eng:"", url:"remont-rozetki-12v"},
{ru:"Ремонт рулевой рейки", eng:"", url:"remont-rulevoy-reyki"},
{ru:"Ремонт салонной розетки", eng:"", url:"remont-salonnoy-rozetki"},
{ru:"Ремонт стартера", eng:"", url:"remont-startera"},
{ru:"Ремонт суппортов", eng:"", url:"remont-supportov"},
{ru:"Ремонт турбины", eng:"", url:"remont-turbiny"},
{ru:"Ремонт электропроводки", eng:"", url:"remont-ehlektroprovodki"},
{ru:"Смазка люка", eng:"", url:"smazka-lyuka"},
{ru:"Чистка дроссельной заслонки", eng:"", url:"chistka-drosselnoy-zaslonki"},
{ru:"Чистка клапана ЕГР", eng:"", url:"chistka-klapana-egr"},
{ru:"Чистка клапана EGR", eng:"", url:"chistka-klapana-egr"}
];

const Diagnostic = ()=> {
    const more = ['Посмотреть все услуги', 'Свернуть'];
    const [visState, setVisState] = useState({vis: true, text:more[0]}); 

    return(
        <div className={cn(cls["diacnostic-nav"], "shadShine")}>
                <div>
                    {diagnostics.map((item, idx) => {
                        // (idx<6) ? return : null 
                        return ( <>{
                            idx < 6 ? <a href={item.url} className={cn(cls["link-width"])}>{item.ru}</a> :
                            <a href={item.url} className={cn(cls["link-width"], [cls['visible']], [visState.vis])}>{item.ru}</a> 
                        }</>
                            
                        )
                    })}
                </div>
            <div className={cn(cls['more'])} onClick={() => {setVisState({vis: !visState.vis, text:more[visState.vis ? 1 : 0]})}}>{visState.text}</div>
        </div>
    );
}

const Remont = ()=> {
    const more = ['Посмотреть все услуги', 'Свернуть'];
    const [visState1, setVisState1] = useState({vis: true, text:more[0]}); 

    return(
        <div className={cn(cls["diacnostic-nav"], "shadShine")}>
                <div>
                    {remont.map((item, idx) => {
                        // (idx<6) ? return : null 
                        return ( <>{
                            idx < 6 ? <a href={item.url} className={cn(cls["link-width"])}>{item.ru}</a> :
                            <a href={item.url} className={cn(cls["link-width"], [cls['visible']], [visState1.vis])}>{item.ru}</a> 
                        }</>
                            
                        )
                    })}
                </div>
            <div className={cn(cls['more'])} onClick={() => {setVisState1({vis: !visState1.vis, text:more[visState1.vis ? 1 : 0]})}}>{visState1.text}</div>
        </div>
    );
}

const Dops = ()=> {
    const more = ['Посмотреть все услуги', 'Свернуть'];
    const [visState2, setVisState2] = useState({vis: true, text:more[0]}); 

    return(
        <div className={cn(cls["diacnostic-nav"], "shadShine")}>
                <div>
                    {dop.map((item, idx) => {
                        // (idx<6) ? return : null 
                        return ( <>{
                            idx < 6 ? <a href={item.url} className={cn(cls["link-width"])}>{item.ru}</a> :
                            <a href={item.url} className={cn(cls["link-width"], [cls['visible']], [visState2.vis])}>{item.ru}</a> 
                        }</>
                            
                        )
                    })}
                </div>
            <div className={cn(cls['more'])} onClick={() => {setVisState2({vis: !visState2.vis, text:more[visState2.vis ? 1 : 0]})}}>{visState2.text}</div>
        </div>
    );
}

const components =[<Links />,<Diagnostic />, <Remont />, <Dops/>]
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