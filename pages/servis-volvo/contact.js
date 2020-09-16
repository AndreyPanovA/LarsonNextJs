import { MainLayout } from "../../components/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
import cls from "../../styles/contact.module.scss";
function Contact({ lang }) {
  const { contacts: url } = dataStorage.backgroundsUrl.volvo;
  let { about } = dataStorage.volvo.pages;
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      {/* <div className={cls.leftContainer}> */}
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
              <h1>Contact</h1>
              <div className={cls.cardTextBlock}>
                <p>Mon-Sun from 09:00 until 20:00</p>
                <div className={cls.flex}>
                  <p>Phone number:</p>
                  <a>+7 (495) 781-10-81</a>
                </div>
              </div>
              <div className={cls.cardTextBlock}>
                <a>Larson Kolomenskaya (open in Yandex.Navigator)</a>
                <p>Kolomenskaya metro station,</p>
                <p>Andropova Av., 22, bld.2, Nagatinsky business centre.</p>
              </div>
              <div className={cls.cardTextBlock}>
                <a>Larson Mozhayka (open in Yandex.Navigator)</a>
                <p>Mozhayskoe highway, pl. 167,</p>
                <p>54-th km MKAD, outer side.</p>
                <p>Attention! Entrance from MKAD sidepath.</p>
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
      {/* </div> */}
      {/* <TextBlack isImg={true}>
        {about.map((el, idx) => (
          <p key={idx}>{el.p[lang]}</p>
        ))}
      </TextBlack> */}
    </MainLayout>
  );
}

export default connect(({ lang }) => ({ lang }))(Contact);
