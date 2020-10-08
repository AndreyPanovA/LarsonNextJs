import cls from "./footer.module.scss";
import { connect } from "react-redux";
import dataStorage from "../dataStorage/dataStorage";
import { changeLang } from "../actions";
import { useCallback, useState } from "react";
import LogicServ from "../../services/logicService";

function Footer({ changeLanguage, lang, color, btn }) {
  const { footerText } = dataStorage;
  const [state, setState] = useState("ru");
  const callbacks = {
    onClick: useCallback(async () => {
      state == "ru"
        ? setState((prev) => {
            changeLanguage("eng");
            return "eng";
          })
        : setState((prev) => {
            changeLanguage("ru");
            return "ru";
          });
    }),
  };

  return (
    <>
      <footer className={cls[color]}>
        <div className={LogicServ.cn("flex_c", cls["fot_wrap"])}>
          <p>{footerText[lang]}</p>
          <div className={LogicServ.cn("flex_c", cls.appStore)}>
            <a href="https://lk.larsonv.ru" target="_blank">
              <img src="/assets/img/larson-white.svg" alt="" />
            </a>
            <a
              href="https://itunes.apple.com/us/app/larson-car/id1190680675"
              target="_blank"
              className="app-apple"
            >
              <img
                src="/assets/img/social/apple.svg"
                alt=""
                href="https://itunes.apple.com/us/app/larson-car/id1190680675"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.larson.car"
              target="_blank"
              className="app-google"
            >
              <img
                src="/assets/img/social/google.svg"
                alt=""
                href="https://itunes.apple.com/us/app/larson-car/id1190680675"
              />
            </a>
          </div>
          <button className={cls[btn]} onClick={callbacks.onClick}>
            {lang}
          </button>
        </div>
      </footer>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (lang) => {
      dispatch(changeLang(lang));
    },
  };
};
export default connect(({ lang }) => ({ lang }), mapDispatchToProps)(Footer);
