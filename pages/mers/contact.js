import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import { connect } from "react-redux";
import cls from "../../styles/contact.module.scss";
import ContactHugePath from "../../components/contacts/huge/index";
import ContactDescr from "../../components/contacts/contactDescr/index";

let {
  contacts: { contact, videoRoute },
} = dataStorage.mers.pages;
function Contact({ lang }) {
  const { contacts: url } = dataStorage.backgroundsUrl.volvo;
  let { tur, map, pathDescr } = dataStorage.components;
  return (
    <MainLayout url={url}>
      <div className={cls.container}>
        <div className={cls.row}>
          <ContactDescr lang={lang} />
        </div>
        <div className={cls.row}>
          <ContactHugePath lang={lang} />
        </div>
        <div className={cls.row + " " + cls.mb}>
          <ContactHugePath
            lang={lang}
            src="https://www.youtube.com/embed/a-LqCwChWO8"
          />
        </div>
      </div>
    </MainLayout>
  );
}
const Row = ({ lang, idx }) => (
  <div className={cls.videoRow}>
    {videoRoute.row[idx].textNode.map((el, idx) =>
      el.type == "iframe" ? (
        <div className={cls.video} {...el.atributes}>
          <el.type {...el.atributes}>{el[lang]}</el.type>
        </div>
      ) : (
        <div className={cls.videoSize}>
          <el.type>{el[lang]}</el.type>
        </div>
      )
    )}
  </div>
);

const Map = ({
  text,
  src = "https://yandex.ru/map-widget/v1/?um=constructor%3Aa530216490486b1f7b1ae5dcf8db4acfddc4b78beb189f5a8c8695cd1665d510&source=constructor",
}) => {
  return (
    <div className={cls.card}>
      <div className={cls.cardPad}>
        <h2>{text} </h2>
        <div className="panorama">
          <iframe src={src} width="100%" frameBorder="0"></iframe>
        </div>
        <div className={cls.blockA}>
          <a>+7 (495) 781-10-81</a>
          <a>info@larsonv.ru</a>
        </div>
      </div>
    </div>
  );
};
const PathDescr = ({ text, lang }) => {
  const counter = [0, 1, 2];
  return (
    <div className={cls.card}>
      <div className={cls.cardPad}>
        <h2>{text}</h2>
        {counter.map((el, idx) => (
          <Row lang={lang} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default connect(({ lang }) => ({ lang }))(Contact);
