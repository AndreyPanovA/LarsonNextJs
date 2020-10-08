import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import cls from "./navigation.module.scss";
import { connect } from "react-redux";
import dataStorage from "../dataStorage/dataStorage";

function Navigation(props) {
  const { site, link = "about", lang, json } = props;
  const [classes, setClasses] = useState(false);
  const { nav: data } = dataStorage;
  const selectLink = (link) => {
    const router = useRouter();
    const regExp = new RegExp(`${link}$`);
    if (regExp.test(router.route)) {
      return "active";
    }
  };
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
          <div className={cls.dot}></div>
          <div className={cls.dot}></div>
          <div className={cls.dot}></div>
          <div className={cls.dot}></div>
          <div className={cls.dot}></div>
          <div className={cls.dot}></div>
          <div className={cls.dot}></div>
          <div className={cls.dot}></div>
          <div className={cls.dot}></div>
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
                  href={`/${site}/${el.href || el.eng.toLowerCase()}`}
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
export default connect(({ lang }) => ({ lang }))(Navigation);
