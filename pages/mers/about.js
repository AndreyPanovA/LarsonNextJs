import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
import FetchServ, { getResourse } from "../../services/fetchService";
function About({ lang, json: about }) {
  const { about: url } = dataStorage.backgroundsUrl.mers;
  return (
    <MainLayout url={url}>
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
export const getStaticProps = async () => FetchServ.getAbout("mers");
export default connect(({ lang }) => ({ lang }))(About);
