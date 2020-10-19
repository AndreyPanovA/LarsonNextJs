import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";

import { connect } from "react-redux";
import cls from "../../styles/contact.module.scss";
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
          <TourKolomensk text={tur[lang]} />
          <ContactDescr lang={lang} />
        </div>
        <div className={cls.row}>
          <Map text={map[lang]} />
          <PathDescr text={pathDescr[lang]} lang={lang} />
        </div>
        <div className={cls.row}>
          <ContactHugePath lang={lang} />
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
const TourKolomensk = ({ text }) => {
  return (
    <div className={cls.card}>
      <h2>{text}</h2>
      <div className="panorama">
        <iframe
          src="https://lk.larsonv.ru/assets/panorama/1/tour.html"
          frameborder="1"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
};
const Map = ({
  text,
  src = "https://yandex.ru/map-widget/v1/?um=constructor%3Aa530216490486b1f7b1ae5dcf8db4acfddc4b78beb189f5a8c8695cd1665d510&source=constructor",
}) => {
  return (
    <div className={cls.card}>
      <div className={cls.cardPad}>
        <h2>{text} </h2>
        <div className="panorama">
          <iframe src={src} width="100%" frameborder="0"></iframe>
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
const ContactDescr = ({ lang }) => {
  return (
    <div className={cls.card}>
      <div className={cls.cardPad}>
        <h1>{contact.h2[lang]}</h1>
        <div className={cls.cardTextBlock}>
          {contact.textNode.map((el, idx) => (
            <el.type key={idx} style={el.style}>
              {el[lang]}
            </el.type>
          ))}
        </div>
      </div>
    </div>
  );
};
const ContactHugePath = ({
  lang,
  src = "https://www.youtube.com/embed/iBTVf8yDd1M",
}) => {
  return (
    <div className={cls.bigCard}>
      <div className={cls.cardPad}>
        <h2>By metro or by feet:</h2>
        <div className={cls.videoRow}>
          <div className={cls.videoSize}>
            <p>By car:</p>
            <p>
              From the center: along Andropova Av., after the Nagatinsky Bridge,
              to the right, down to the embankment and to the left to the
              territory of the Nagatinsky business center in front of the Lukoil
              gas station.
            </p>
          </div>
          <div className={cls.video}>
            <iframe
              src={src}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ lang }) => ({ lang }))(Contact);
