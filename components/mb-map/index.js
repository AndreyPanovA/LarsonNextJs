

import cls from "../../styles/mb.module.scss";
import LogicServ from "../../services/logicService";

const { cn } = LogicServ;
const MbMap = ({only}) => {
    if(only) {
      return (
      <div className={cls.card}>
        <h1 style={{textAlign:"center", paddingBottom:15}}>Карта</h1>
      <div className="panorama">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e59348621f8f7d443d881e0e9454b2d4df2ca1b9b90391de232e09144a4129f&amp;source=constructor"
        width="100%"
        height="720"
        frameBorder="0"
      ></iframe>
      </div>
    </div>
      )
    }
    return (
      <div className={cls["serv-map"]} style={{paddingBottom:55}}>
        <div className={cls["serv-map-line"]}></div>
        <div className={cls["serv-container"]}>
          <div className={cls["serv-map-contacts"]}>
            <div className={cls["contacts-container"]}>
              <div className={cls["map-flex"]}>
                <h2>Контакты</h2>
                <img src="/assets/img/larson-white.svg" alt="Larson" />
              </div>
              <p>Ежедневно в 9:00 до 20:00</p>
              <p>Единый телефон: +7 (495) 781-10-81.</p>
              <a href="">
                Larson Коломенская <br />
                (открыть в Яндекс.Навигаторе)
              </a>
              <p>
                115533, г. Москва, проспект Андропова, д. 22, стр. 2 БЦ
                «Нагатинский»
              </p>
              <a href="">
                Larson Можайка
                <br />
                (открыть в Яндекс.Навигаторе)
              </a>
              <p>
                121596, Московская обл., Новоивановское, Можайское шоссе, вл. 167
                54-й км МКАД, внешняя сторона
              </p>
              <p>Внимание! Заезд с дублёра МКАД.</p>
            </div>
          </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e59348621f8f7d443d881e0e9454b2d4df2ca1b9b90391de232e09144a4129f&amp;source=constructor"
            width="100%"
            height="720"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    );
  };
  
export default MbMap