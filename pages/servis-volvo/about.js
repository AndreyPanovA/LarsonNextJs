import { MainLayout } from "../../components/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
function About({ lang }) {
  const { about: url } = dataStorage.backgroundsUrl.volvo;
  let { about } = dataStorage.volvo.pages;
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      <TextBlack isImg={true}>
        {about.map((el, idx) => (
          <p key={idx}>{el.p[lang]}</p>
        ))}
      </TextBlack>
    </MainLayout>
  );
}

export default connect(({ lang }) => ({ lang }))(About);
