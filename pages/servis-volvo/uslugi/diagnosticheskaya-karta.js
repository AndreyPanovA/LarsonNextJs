import Router from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../../components/MainLayout";
import Footer from "../../../components/footer/Footer";
import { Navigation } from "../../../components/navigation/Navigation";
import dataStorage from "../../../components/dataStorage/dataStorage";
import TextBlack from "../../../components/textBlack/TextBlack";

// import {fetch} from "iso"
export default function Card({ json }) {
  const { card: url } = dataStorage.backgroundsUrl.volvo;
  const { card: urlText } = dataStorage.volvo.textImages;

  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      <TextBlack url={urlText} littleWidth="littleWidth">
        <h1>Диагностическая карта</h1>
        <p>
          В сервисе «Larson» вы можете получить диагностическую карту,
          необходимую для оформления полиса ОСАГО.
        </p>
        <p>
          При прохождении любого ТО на любой модели «Вольво» вы получите карту
          бесплатно.
        </p>
        <p>
          Просто предупредите нашего оператора во время записи на сервис по ,
          единый для «Larson» Коломенская и «Larson» Можайка.
        </p>
        <p>
          Согласно последним изменениям в законодательстве, итоговым документом,
          подтверждающим технический осмотр транспортного средства, является не
          талон ТО, а диагностическая карта. В ней содержатся сведения о
          соответствии или несоответствии транспортного средства обязательным
          требованиям безопасности. Если техосмотр успешно пройден, в
          диагностическую карту заносится информация о сроке её действия, а
          также фамилия, инициалы и подпись технического эксперта, принявшего
          решение о её выдаче. Сведения о выданной диагностической карте
          передаются операторами в единую информационную систему технического
          осмотра (ЕАИСТО).
        </p>
      </TextBlack>
    </MainLayout>
  );
}
