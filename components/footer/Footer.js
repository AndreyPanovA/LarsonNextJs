import cls from "./footer.module.scss";
import { connect } from "react-redux";
import dataStorage from "../dataStorage/dataStorage";
import store from "../store";
function Footer(props) {
  const { footerText } = dataStorage;
  return (
    <>
      <footer className={cls[props.color]}>
        <div className={cls.fot_wrap + " flex_c"}>
          <p>{footerText[props.lang]}</p>
          <div className={cls.appStore + " flex_c"}>
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
          <button
            className={cls[props.btn]}
            onClick={() => {
              //   console.log(store);
              store.getState().lang == "ru"
                ? store.dispatch({
                    type: "CHANGE_LANG",
                    lang: `eng`,
                  })
                : store.dispatch({
                    type: "CHANGE_LANG",
                    lang: `ru`,
                  });
            }}
          >
            {props.lang}
          </button>
        </div>
      </footer>
    </>
  );
}

// export default Footer;
const mapStateToProps = ({ lang }) => {
  return { lang };
};
export default connect(mapStateToProps)(Footer);
