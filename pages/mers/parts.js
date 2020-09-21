import Router from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/review.module.scss";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
// import {fetch} from "iso"
function Parts({ json, lang }) {
  const { ditails: url } = dataStorage.backgroundsUrl.volvo;
  const { parts: urlText } = dataStorage.volvo.textImages;

  const [reviews, setReview] = useState([]);
  const { h1, p } = dataStorage.volvo.pages.ditails;
  return (
    <MainLayout url={url}>
      <Navigation site="mers" />
      <TextBlack url={urlText} littleWidth="littleWidth">
        <h1>{h1[lang]}</h1>
        {p.map((p, idx) => (
          <p key={idx}>{p[lang]}</p>
        ))}
        {/* <p>
          Сертифицированный сервисный центр Larson сотрудничает с АО
          «Мерседес-Бенц РУС» по программе «Независимый специалист». Мы имеем
          доступ к самому надежному каналу поставки оригинальных запасных частей
          Mercedes-Benz от единственного официального дистрибьютора в России.
        </p>
        <p>
          Оригинальные запасные части отвечают требованиям стандартов
          высочайшего качества и имеют оригинальную упаковку и маркировку, что
          является гарантией защиты от контрафакта. Гарантия на оригинальные
          запасные части и аксессуары составляет 2 (два) года без ограничения по
          пробегу.
        </p>
        <p>
          Наш склад имеет необходимое оперативное наличие запасных частей для
          обслуживания и ремонта Вашего Mercedes-Benz. Оперативная доставка с
          центрального склада в России и международного центрального склада в
          Германии позволяет предоставлять нашим клиентам лучший сервис.
        </p>
        <p>
          Благодаря опыту на рынке оптовой торговли запасными частями мы можем
          подобрать оптимальное решение, используя оригинальные детали или
          качественные аналоги. В любом случае, ремонт будет выполнен с
          соблюдением стандартов и рекомендаций завода-изготовителя.
        </p>
        <p>
          Приобретая детали и обслуживая свой автомобиль Larson, Вы становитесь
          участником бонусной программы, которая экономит от 10 до 15% от суммы
          потраченного!
        </p>
        <p>
          Для наших постоянных клиентов действует бесплатная доставка и
          возможность выездной замены деталей (если технически такая возможность
          существует).
        </p>
        <p>
          С выбором оригинальных аксессуаров для своего автомобиля Вам помогут
          наши мастера-консультанты в приложении Larson Car, по телефону или при
          посещении любого из сервисных центров Larson.
        </p> */}
      </TextBlack>
    </MainLayout>
  );
}
export default connect(({ lang }) => ({ lang }))(Parts);
