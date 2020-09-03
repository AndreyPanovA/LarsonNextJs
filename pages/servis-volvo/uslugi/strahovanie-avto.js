import Router from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../../components/MainLayout";
import Footer from "../../../components/footer/Footer";
import { Navigation } from "../../../components/navigation/Navigation";
import dataStorage from "../../../components/dataStorage/dataStorage";
import TextBlack from "../../../components/textBlack/TextBlack";

// import {fetch} from "iso"
export default function Inshurance({ json }) {
  const { inshurance: url } = dataStorage.backgroundsUrl.volvo;
  const { insurance: urlText } = dataStorage.volvo.textImages;
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      <TextBlack url={urlText} littleWidth="littleWidth">
        <h1>Insurance</h1>
        <p>
          «Larson» сотрудничает с крупнейшей универсальной страховой компанией
          «РЕСО». Для наших Клиентов предусмотрен весь перечень страхования, в
          том числе страхование домов и квартир, выездов за рубеж, корпоративное
          страхование и др.
        </p>

        <p>
          Получите комфортные условия страхования по промокоду Larson у
          персонального менеджера:
        </p>

        <p>Мария Иванова</p>
        <p>
          <a href="tel:+79099538952">+7 (909) 953-89-52 </a>(есть Telegram,
          WhatsApp)
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
