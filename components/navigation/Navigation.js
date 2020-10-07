import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import cls from "./navigation.module.scss";
import { connect } from "react-redux";
import useSWR from "swr";
import dataStorage from "../dataStorage/dataStorage";
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

function Navigation(props) {
  console.log(props, "cool");
  const { language, site, link = "about", lang, json } = props;
  const [classes, setClasses] = useState(false);
  const { nav: data } = dataStorage;
  console.log(json, "pls");
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
          {/* {data && <p>{data[0]["ru"]}</p>} */}
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
