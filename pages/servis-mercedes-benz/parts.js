import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
function Parts({ json, lang }) {
  const { ditails: url } = dataStorage.backgroundsUrl.mers;
  const { parts: urlText } = dataStorage.mers.textImages;
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
