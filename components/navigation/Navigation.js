import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import cls from "./navigation.module.scss";
import dataStorage from "../dataStorage/dataStorage";
import { connect } from "react-redux";
function Navigation({ language, site, link = "about", lang }) {
  const [classes, setClasses] = useState(false);
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
          {/* <Link href={`/${site}/about`}>
            <a className={cls[selectLink("about")]}>
              <li>О нас</li>
            </a>
          </Link>
          <Link href={`/${site}/corporate`}>
            <a className={cls[selectLink("corporate")]}>
              <li>Клиентам</li>
            </a>
          </Link>
          <Link href={`/${site}/review`}>
            <a className={cls[selectLink("review")]}>
              <li>Отзывы</li>
            </a>
          </Link>
          <Link href={`/${site}/tires`}>
            <a className={cls[selectLink("tires")]}>
              <li>Шины</li>
            </a>
          </Link>
          <Link href={`/${site}/promo`}>
            <a className={cls[selectLink("promo")]}>
              <li>Акции</li>
            </a>
          </Link>
          <Link href={`/${site}/parts`}>
            <a className={cls[selectLink("parts")]}>
              <li>Запчаси и аксессуары</li>
            </a>
          </Link>
          <Link href={`/${site}/uslugi/strahovanie-avto`}>
            <a className={cls[selectLink("uslugi/strahovanie-avto")]}>
              <li>Страховка</li>
            </a>
          </Link>
          <Link href={`/${site}/uslugi/evakuator`}>
            <a className={cls[selectLink("uslugi/evakuator")]}>
              <li>Эвакуация</li>
            </a>
          </Link>
          <Link href={`/${site}/uslugi/diagnosticheskaya-karta`}> 
            <a className={cls[selectLink("uslugi/diagnosticheskaya-karta")]}>
              <li>Диагностическая карта</li>
            </a>
          </Link>
          */}
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
