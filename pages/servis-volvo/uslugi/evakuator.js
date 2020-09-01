import Router from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../../components/MainLayout";
import Footer from "../../../components/footer/Footer";
import { Navigation } from "../../../components/navigation/Navigation";
import dataStorage from "../../../components/dataStorage/dataStorage";
import TextBlack from "../../../components/textBlack/TextBlack";

// import {fetch} from "iso"
export default function Tow({ json }) {
  const { tow: url } = dataStorage.backgroundsUrl.volvo;
  const { tow: urlText } = dataStorage.volvo.textImages;
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      <TextBlack url={urlText}>
        <div class="little__text">
          <p>
            «Larson» совместно с транспортной компанией «Logic City» предлагает
            для всех своих клиентов услуги по перевозке автомобилей (эвакуация).
            Для заказа Вы можете просто позвонить по многоканальному номеру
            «Larson» .
          </p>
        </div>
        <div class="little__text">
          <p>
            Обращаем Ваше внимание, что автомобиль можно перемещать без
            владельца, но обязательно с передачей водителю эвакуатора
            свидетельства транспортного средства (оригинал СТС, не копия — это
            требование ГИБДД) и ключа от автомобиля. «Larson» и «Logic City»
            осуществляют ответственную застрахованную перевозку. Ключи и
            документы, а что более важно — сам автомобиль, находясь на нашем
            эвакуаторе, застрахованы!
          </p>
        </div>
        <div class="little__text">
          <p>
            Кроме того, помните, что лучше лишний раз «покатать» автомобиль на
            эвакуаторе, чем доехав до сервиса своим ходом, усугубить поломку.
          </p>
        </div>
      </TextBlack>
    </MainLayout>
  );
}
