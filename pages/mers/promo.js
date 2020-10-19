import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import PromoText from "../../components/promoText/PromoText";
import { connect } from "react-redux";
function Review({ json, lang }) {
  const { promo: url } = dataStorage.backgroundsUrl.volvo;
  const { promoPage: promo } = dataStorage.volvo;
  const [reviews, setReview] = useState([]);
  return (
    <MainLayout url={url}>
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
