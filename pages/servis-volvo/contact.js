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
          <div className={cls.card}></div>
          <div className={cls.card}></div>
        </div>
        <div className={cls.row}>
          <div className={cls.card}></div>
        </div>
      </div>
      {/* <div>
        <div class="card__block card root">
          <p>м. Коломенская</p>
          <p>На автомобиле:</p>
          <div class="flex_container">
            <div class="card__block">
              <small class="circle_1">
                {" "}
                Из центра: по проспекту Андропова, после Нагатинского моста
                направо, вниз к набережной и налево на территорию БЦ
                «Нагатинский» перед АЗС «Лукойл».
              </small>
            </div>
            <div class="card__block">
              <iframe
                src="https://www.youtube.com/embed/iBTVf8yDd1M"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="flex_container">
            <div class="card__block">
              <small class="circle_2">
                {" "}
                По Нагатинской набережной: направо перед Нагатинским мостом,
                далее вверх от набережной, сразу после АЗС «Лукойл» направо на
                территорию БЦ «Нагатинский».
              </small>
            </div>
          </div>
          <div class="flex_container">
            <div class="card__block">
              <small class="circle_3">
                {" "}
                Из области: по проспекту Андропова, разворот под Нагатинским
                мостом, далее вверх от набережной, сразу после АЗС «Лукойл»
                направо на территорию БЦ «Нагатинский».
              </small>
            </div>
          </div>
        </div>

        <div class="flex_container cardBG">
          <div class="flex_container">
            <div class="card__block">
              <h4>На метро или пешком:</h4>
              <small>
                - По замоскворецкой линии метро (зеленая ветка) до станции
                Коломенская, последний вагон из центра, выход налево, из
                стеклянных дверей налево, в сторону улиц: проспект Андропова и
                Высокая улица (Выходы номер 5 и 6), далее по лестнице направо
                (выход номер 6).
              </small>
              <small>
                - Выйдя на улицу идете прямо, вдоль проспекта Андропова вниз к
                набережной до торгово-развлекательного комплекса «НОРА».
              </small>
              <small>
                - Поворачиваете налево и идете прямо вдоль
                торгово-развлекательного комплекса “НОРА”, так чтобы он
                оставался по правую руку.
              </small>
              <small>
                - Далее увидите вывеску «Кузовной центр Larson». Проходите мимо
                до угла здания и поворачиваете направо, затем прямо до вывески
                “Larson” и снова направо, входите в дверь и на КПП говорите
                “Здравствуйте, я в Larson”.
              </small>
              <small>
                - После КПП, во внутреннем дворе двигаетесь прямо, слева одно
                отдельно стоящее здание — это «Larson».
              </small>
              <small>Добро пожаловать!</small>
            </div>
            <div class="card__block">
              <div class="video bigVideo finOpen">
                <iframe
                  src="https://www.youtube.com/embed/a-LqCwChWO8"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <TextBlack isImg={true}>
        {about.map((el, idx) => (
          <p key={idx}>{el.p[lang]}</p>
        ))}
      </TextBlack> */}
    </MainLayout>
  );
}

export default connect(({ lang }) => ({ lang }))(Contact);
