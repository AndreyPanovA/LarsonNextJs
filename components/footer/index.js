import cls from "./footer.module.scss";
import { connect } from "react-redux";
import dataStorage from "../dataStorage/dataStorage";
import { changeLang } from "../actions";
import { useCallback, useState } from "react";
import LogicServ from "../../services/logicService";
import FooterImages from "./footer-images/index";
const { cn } = LogicServ;
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
        <div className={cn("flex_c", cls["fot_wrap"])}>
          <p>{footerText[lang]}</p>
          <div className={cn("flex_c", cls.appStore)}>{FooterImages}</div>
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
