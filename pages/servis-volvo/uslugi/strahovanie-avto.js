import Router from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../../components/MainLayout";
import dataStorage from "../../../components/dataStorage/dataStorage";
import TextBlack from "../../../components/textBlack/TextBlack";
import { connect } from "react-redux";
function Inshurance({ json, lang }) {
  const { inshurance: url } = dataStorage.backgroundsUrl.volvo;
  const { insurance: urlText } = dataStorage.volvo.textImages;
  const { h1, p } = dataStorage.volvo.pages.inshurance;
  return (
    <MainLayout url={url}>
      <TextBlack url={urlText} littleWidth="littleWidth">
        <h1>{h1[lang]}</h1>
        {p.map((el, idx) => (
          <p key={idx}>{el[lang]}</p>
        ))}

        <p>
          <a href="tel:+79099538952">+7 (909) 953-89-52 </a>(Telegram, WhatsApp)
        </p>
        <p>
          <a href="mailto:resopro@reso.ru">resopro@reso.ru</a>
        </p>

        <p>И в ближайших партнерских офисах:</p>
        <p>ул.Садовники, д.3</p>
        <p>
          <a href="tel:+74951345842">+7 (495) 134-58-42</a>
        </p>

        <p>ул.Речников, д.21, стр.4</p>
        <p>
          <a href="tel:+74951345835">+7 (495) 134-58-35</a>
        </p>
      </TextBlack>
    </MainLayout>
  );
}

export default connect(({ lang }) => ({ lang }))(Inshurance);
