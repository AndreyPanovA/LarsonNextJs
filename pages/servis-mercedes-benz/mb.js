import MainLayout from "../../components/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/mb.module.scss";
import Tour from "../../components/panorama/index";
import LogicServ from "../../services/logicService";
import { useState } from "react";
import MbItems from "./mbv/[id]/index"
import Link from "next/link";
import {data} from "../../data";
import ModelsCatalog from "../../components/models-catalog/index"
const { cn } = LogicServ;
const MbMap = () => {
  return (
    <div className={cls["serv-map"]}>
      <div className={cls["serv-map-line"]}></div>
      <div className={cls["serv-container"]}>
        <div className={cls["serv-map-contacts"]}>
          <div className={cls["contacts-container"]}>
            <div className={cls["map-flex"]}>
              <h2>Контакты</h2>
              <img src="../assets/img/larson-white.svg" alt="Larson" />
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
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e59348621f8f7d443d881e0e9454b2d4df2ca1b9b90391de232e09144a4129f&amp;source=constructor"
          width="100%"
          height="720"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default function Mb() {
  const { about: url } = dataStorage.backgroundsUrl;
  const {volvo:{pages:{itemElement:item}}}=data;
  const [crew, setCrew]=useState(false);
       
  return (
    <MainLayout>
      <div className={cn("", "", "", cls["blur_container"])}>
        <div className={cn(cls["serv_header"], cls["container_bot"])}>
          <div className={cn(cls["header_descr-top"])}>
            <div className="">
              <p>Главная / Сервис вольво / MB /</p>
              <h1>Сервис Volvo</h1>
              <p>
                Мы специализируемся на автомобилях Volvo и имеем все
                необходимое.
              </p>
            </div>
          </div>
          <div className={cn(cls["serv_header-flex"], cls["flex_bc"])}>
            <div className={cls["serv_header-descr"]}>
              <Tour text="Виртуальный тур" />
            </div>
            <div className={cls["serv_header-btn"] + " " + cls["shad_w"]}>
              <div className={cls["check_1"]}>
                <input
                  type="radio"
                  id="enter"
                  name={cls["service"] + " " + cls.checked + " " + cls.input}
                />
                <label htmlFor="enter">Записаться в сервис Volvo</label>
              </div>
              <div className={cls["check_2"]}>
                <input type="radio" id="tow" name="service" />
                <label htmlFor="tow">Вызвать эвакуатор</label>
              </div>
              <h2>Телефон</h2>
              <div className={cls["flex_cc"]}>
                <input type="text" className={cls["servInp"]} />
                <button className={cls["servBtn"]}>Отправить</button>
                <p>-Напишите нам-</p>
                <div className={cls["socila_serv"]}>
                  <img src="../assets/img/social/telegram.png" alt="" />
                  <img src="../assets/img/social/instagram.png" alt="" />
                  <img src="../assets/img/social/facebook.png" alt="" />
                  <img src="../assets/img/social/youtube.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cls["serv-catalog"]}>
          <div className={cls["srv-catalog-title"]}>
            <img
              src="../assets/img/serv/catalog.png"
              alt="..."
              className={cls["catalog-abs-header"]}
            />
            <div className={cls["srv-catalog_names"]}>
              <h2>Каталог моделей</h2>
              <p>Ремонт Volvo XC901</p>
            </div>
          </div>
          <ModelsCatalog />
          {/* <div className={cls["serv-container"]}>
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
          </div> */}
        </div>
        <div className={cls["serv-comand"]}>
          <h2>Наша команда</h2>
          <div
            className={cls["serv-tab-container"] + " " + cls["serv-container"]}
          >
            <div className={cn(cls["tab-item"], [cls["tab-1"], cls["tab-show"]], [true, !crew])}>
              <p>
                Рассказываем немного о себе и о наших ценностях. Команда Larson
                - это опытные проффесионалы своего дела, которые дадут вам
                ощущение полного комфорта в нашем автосервисе.
              </p>
            </div>
            <div className={cn(cls["tab-item"], [cls["tab-2"],cls["tab-show"]], [true, crew])  }>
              <div className={cls["flex_c"]}>
                <div className={cls["foto"]}>
                  <img src="../assets/img/serv/petr.png" alt="Петр Бакулов" />
                </div>
                <div className={cn(cls["foto"])}>
                  <img
                    src="../assets/img/serv/sergey.jpg"
                    alt="Сергей Тарасов"
                  />
                </div>
                <div className={cls["foto"]}>
                  <img src="../assets/img/serv/fedor.jpg" alt="Федр Бакулов" />
                </div>
              </div>
            </div>
            <div   className={cn(cls["tab-btn-container"],cls["flex_c"])}>
              <div data-orientation="left" onClick={(e)=> {
              if (e.target.dataset.orientation=="left" && crew)
                setCrew(!crew);      
              }}
                className={cn(cls["tab-btn"], [cls["btn-1"], cls["tab-active"]], [true, !crew])}
                id="0"
              >
                Ценности
              </div>
              <div  data-orientation="right" onClick={(e)=> {
                if (e.target.dataset.orientation=="right" && !crew) {

                  setCrew(!crew);
                }
                     
              }} className={cn(cls["tab-btn"], [cls["btn-2"],  cls["tab-active"]],[true, crew]) } id="1">
                Люди
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <MbMap />
      </div>
    </MainLayout>
  );
}
