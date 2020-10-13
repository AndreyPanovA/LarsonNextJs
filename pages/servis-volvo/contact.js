import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
import cls from "../../styles/contact.module.scss";
function Contact({ lang }) {
  const { contacts: url } = dataStorage.backgroundsUrl.volvo;
  let {
    contacts: { contact, videoRoute },
  } = dataStorage.volvo.pages;
  console.log(contact);
  return (
    <MainLayout url={url}>
      <div className={cls.container}>
        <div className={cls.row}>
          <div className={cls.card}>
            <h2>Тур</h2>
            <div className="panorama">
              <iframe
                src="https://lk.larsonv.ru/assets/panorama/1/tour.html"
                frameborder="1"
                allowfullscreen="true"
              ></iframe>
            </div>
          </div>
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
        </div>
        <div className={cls.row}>
          <div className={cls.card}>
            <div className={cls.cardPad}>
              <h2>Larson Kolomenskaya</h2>
              <div className="panorama">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa530216490486b1f7b1ae5dcf8db4acfddc4b78beb189f5a8c8695cd1665d510&source=constructor"
                  width="100%"
                  frameborder="0"
                ></iframe>
              </div>
              <div className={cls.blockA}>
                <a>+7 (495) 781-10-81</a>
                <a>info@larsonv.ru</a>
              </div>
            </div>
          </div>
          <div className={cls.card}>
            <div className={cls.cardPad}>
              <h2>Kolomenskaya metro station</h2>
              <div className={cls.videoRow}>
                {/* {videoRoute.row[0].textNode.map((el, idx) =>
                
                  el.type == "iframe" ? (
                    <div className={cls.video} {...el.atributes}>
                      <el.type {...el.atributes}>{el[lang]}</el.type>
                    </div>
                  ) : (
                    // <div className={cls.videoSize}>
                    <el.type>{el[lang]}</el.type>
                    // </div>
                  )
                )} */}
              </div>
              <div className={cls.videoRow}>
                <div className={cls.videoSize}>
                  <p>By car:</p>
                  <p>
                    From the center: along Andropova Av., after the Nagatinsky
                    Bridge, to the right, down to the embankment and to the left
                    to the territory of the Nagatinsky business center in front
                    of the Lukoil gas station.
                  </p>
                </div>
                <div className={cls.video}>
                  <iframe
                    src="https://www.youtube.com/embed/iBTVf8yDd1M"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              {/*
               */}
              <div className={cls.videoRow}>
                <div className={cls.videoSize}>
                  <p>By car:</p>
                  <p>
                    From the center: along Andropova Av., after the Nagatinsky
                    Bridge, to the right, down to the embankment and to the left
                    to the territory of the Nagatinsky business center in front
                    of the Lukoil gas station.
                  </p>
                </div>
                <div className={cls.video}>
                  <iframe
                    src="https://www.youtube.com/embed/iBTVf8yDd1M"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.row}>
          <div className={cls.bigCard}>
            <div className={cls.cardPad}>
              <h2>By metro or by feet:</h2>
              {/* <div className={cls.flex}></div> */}
              <div className={cls.videoRow}>
                <div className={cls.videoSize}>
                  <p>By car:</p>
                  <p>
                    From the center: along Andropova Av., after the Nagatinsky
                    Bridge, to the right, down to the embankment and to the left
                    to the territory of the Nagatinsky business center in front
                    of the Lukoil gas station.
                  </p>
                </div>
                <div className={cls.video}>
                  <iframe
                    src="https://www.youtube.com/embed/iBTVf8yDd1M"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default connect(({ lang }) => ({ lang }))(Contact);
