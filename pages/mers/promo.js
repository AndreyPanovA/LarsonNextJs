import Router from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/review.module.scss";
import PromoText from "../../components/promoText/PromoText";
import { connect } from "react-redux";
// import {fetch} from "iso"
function Review({ json, lang }) {
  const { promo: url } = dataStorage.backgroundsUrl.volvo;
  const { promoPage: promo } = dataStorage.volvo;
  const [reviews, setReview] = useState([]);
  return (
    <MainLayout url={url}>
      <Navigation site="mers" />
      {promo.map((el, idx) =>
        idx == 0 ? (
          <PromoText
            name={el.h2[lang]}
            text={el.text}
            url={el.url}
            first={true}
            key={idx}
            lang={lang}
          />
        ) : (
          <PromoText
            name={el.h2[lang]}
            text={el.text}
            url={el.url}
            key={idx}
            lang={lang}
          />
        )
      )}
    </MainLayout>
  );
}
export default connect(({ lang }) => ({ lang }))(Review);
