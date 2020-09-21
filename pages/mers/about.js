import { MainLayout } from "../../components/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
import LazyLoad from "../../components/lazyLoad/lazyLoad";
function About({ lang }) {
  const { about: url } = dataStorage.backgroundsUrl.mers;
  let { about } = dataStorage.mers.pages;
  return (
    <MainLayout url={url}>
      <Navigation site="mers" />
      <div style={{ position: "relative", fontSize: 55 }}>
        {about[0].h1[lang]}
      </div>
      <div style={{ position: "relative", fontSize: 55 }}>
        {about[1].h1[lang]}
      </div>
      <TextBlack isImg={true}>
        {about.map((el, idx) => (el.p ? <p key={idx}>{el.p[lang]}</p> : null))}
      </TextBlack>
    </MainLayout>
  );
}

export default connect(({ lang }) => ({ lang }))(About);
