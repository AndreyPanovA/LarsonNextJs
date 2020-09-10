import Router from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../../components/MainLayout";
import Footer from "../../../components/footer/Footer";
import Navigation from "../../../components/navigation/Navigation";
import dataStorage from "../../../components/dataStorage/dataStorage";
import TextBlack from "../../../components/textBlack/TextBlack";
import { connect } from "react-redux";

// import {fetch} from "iso"
function Tow({ json, lang }) {
  const { tow: url } = dataStorage.backgroundsUrl.volvo;
  const { tow: urlText } = dataStorage.volvo.textImages;
  const { h1, p } = dataStorage.volvo.pages.tow;
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      <TextBlack url={urlText} littleWidth="littleWidth">
        <h1>{h1[lang]}</h1>
        {p.map((p, idx) =>
          idx == 0 ? (
            <p key={idx}>
              {p[lang]}
              <a href="tel:+7 (495) 781-10-81" style={{ whiteSpace: "nowrap" }}>
                +7 (495) 781-10-81.
              </a>
            </p>
          ) : (
            <p key={idx}>{p[lang]}</p>
          )
        )}
      </TextBlack>
    </MainLayout>
  );
}
export default connect(({ lang }) => ({ lang }))(Tow);
