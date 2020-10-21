import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
import FetchServ from "../../services/fetchService";

function About({ lang, json: about }) {
  const { about: url } = dataStorage.backgroundsUrl.volvo;
  const { panorama: isPano } = dataStorage.components.tur;

  return (
    <MainLayout url={url}>
      <TextBlack
        isImg={true}
        littleWidth="littleWidth"
        isPano={isPano}
        lang={lang}
      >
        {about.map((el, idx) => (
          <p key={idx}>{el.p[lang]}</p>
        ))}
      </TextBlack>
    </MainLayout>
  );
}

export const getStaticProps = async () => FetchServ.getAbout("volvo");
export default connect(({ lang }) => ({ lang }))(About);
