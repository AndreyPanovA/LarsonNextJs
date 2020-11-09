import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import cls from "./navigation.module.scss";
import { connect } from "react-redux";
import dataStorage from "../dataStorage/dataStorage";
import { selectNav } from "../actions/index";

function Navigation(props) {
  const {
    site = "servis-volvo",
    siteURL = "servis-volvo",
    link = "about",
    lang,
    json,
  } = props;
  const [classes, setClasses] = useState(false);
  const { nav: data } = dataStorage;
  const router = useRouter();
  const selectLink = (link) => {
    const regExp = new RegExp(`${link}$`);
    if (regExp.test(router.route)) {
      return "active";
    }
  };
  if (router.route == "/") {
    return null;
  }
  console.log(link, site);
  return (
    <>
      <nav className={cls.nav} style={classes ? { left: 0 } : {}}>
        <div
          className={
            classes ? cls["clicked"] + " " + cls["menu-icon"] : cls["menu-icon"]
          }
          onClick={() => {
            setClasses(!classes);
          }}
        >
          {BurgerBtn}
        </div>
        <ul className={cls.navLinks}>
          <div
            dangerouslySetInnerHTML={{
              __html: json,
            }}
          />

          {data &&
            data.map((el, idx) => {
              return (
                <Link
                  href={`${site || siteURL}/${el.href || el.eng.toLowerCase()}`}
                  key={idx}
                >
                  <a
                    className={
                      cls[selectLink(`${el.href || el.eng.toLowerCase()}`)]
                    }
                  >
                    <li>{el[lang]}</li>
                  </a>
                </Link>
              );
            })}
        </ul>
      </nav>
    </>
  );
}
const BurgerBtn = (
  <>
    <div className={cls.dot}></div>
    <div className={cls.dot}></div>
    <div className={cls.dot}></div>
    <div className={cls.dot}></div>
    <div className={cls.dot}></div>
    <div className={cls.dot}></div>
    <div className={cls.dot}></div>
    <div className={cls.dot}></div>
    <div className={cls.dot}></div>
  </>
);
const mapDispatchToProps = (dispatch) => {
  return {
    selectNavigation: (site) => {
      dispatch(selectNav(site));
    },
  };
};
// export default Navigation;
export default connect(
  ({ lang }) => ({ lang }),
  mapDispatchToProps
)(Navigation);
