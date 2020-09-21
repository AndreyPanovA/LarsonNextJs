import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import cls from "./navigation.module.scss";
import dataStorage from "../dataStorage/dataStorage";
import { connect } from "react-redux";
function Navigation({ language, site, link = "about", lang }) {
  const [classes, setClasses] = useState(false);
  console.log(site, "coooler");
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
          {dataStorage.nav.map((el, idx) => {
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
function selectLink(link) {
  const router = useRouter();
  const regExp = new RegExp(`${link}$`);
  if (regExp.test(router.route)) {
    return "active";
  }
}

export default connect(({ lang }) => ({ lang }))(Navigation);
