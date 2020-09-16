import Router from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/review.module.scss";
import PromoText from "../../components/promoText/PromoText";
// import {fetch} from "iso"
export default function Review({ json }) {
  const { promo: url } = dataStorage.backgroundsUrl.volvo;
  const { promoPage: promo } = dataStorage.volvo;
  const [reviews, setReview] = useState([]);
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      {promo.map((el, idx) =>
        idx == 0 ? (
          <PromoText
            name={el.h2.ru}
            text={el.text}
            url={el.url}
            first={true}
            key={idx}
          />
        ) : (
          <PromoText name={el.h2.ru} text={el.text} url={el.url} key={idx} />
        )
      )}
    </MainLayout>
  );
}
