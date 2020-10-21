import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
import FetchServ, { getResourse } from "../../services/fetchService";
import cls from "../../styles/mersTitle.module.scss";
function About({ lang, json: about }) {
  const { about: url } = dataStorage.backgroundsUrl.mers;
  const { panorama: isPano } = dataStorage.components.tur;
  return (
    <MainLayout url={url}>
      <div className={cls.titleCont}>
        <div>
          <p className={cls.little}>{about[0].h1[lang]}</p>
        </div>
        <div>
          <p className={cls.huge}>{about[1].h1[lang]}</p>
        </div>
      </div>
      <TextBlack
        isImg={true}
        littleWidth="littleWidth"
        isPano={isPano}
        lang={lang}
      >
        {about.map((el, idx) => (el.p ? <p key={idx}>{el.p[lang]}</p> : null))}
      </TextBlack>
    </MainLayout>
  );
}
export const getStaticProps = async () => FetchServ.getAbout("mers");
export default connect(({ lang }) => ({ lang }))(About);
