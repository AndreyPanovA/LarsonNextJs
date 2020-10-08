import { useState, useEffect } from "react";
import MainLayout from "../../../components/MainLayout";
import dataStorage from "../../../components/dataStorage/dataStorage";
import TextBlack from "../../../components/textBlack/TextBlack";
import { connect } from "react-redux";
function Tow({ json, lang }) {
  const { tow: url } = dataStorage.backgroundsUrl.volvo;
  const { tow: urlText } = dataStorage.volvo.textImages;
  const { h1, p } = dataStorage.volvo.pages.tow;
  return (
    <MainLayout url={url}>
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
