import Router from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/review.module.scss";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
function Parts({ json, lang }) {
  const { ditails: url } = dataStorage.backgroundsUrl.volvo;
  const { parts: urlText } = dataStorage.volvo.textImages;
  const [reviews, setReview] = useState([]);
  const { h1, p } = dataStorage.volvo.pages.ditails;
  return (
    <MainLayout url={url}>
      <TextBlack url={urlText} littleWidth="littleWidth">
        <h1>{h1[lang]}</h1>
        {p.map((p, idx) => (
          <p key={idx}>{p[lang]}</p>
        ))}
      </TextBlack>
    </MainLayout>
  );
}
export default connect(({ lang }) => ({ lang }))(Parts);
