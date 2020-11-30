import cls from "../../styles/Home.module.scss";
import React, { Component } from "react";
import Router from "next/router";
import LogicServ from "../../services/logicService";
const { cn } = LogicServ;
const Item = (props) => {
  const { json, lang } = props;
  const router = (site) => {
    Router.push(`${site}`);
  };
  const callbacks = {
    onClick: (key) => {
      props.selectNavigation(key.href);
      router(key.href + "/about");
    },
  };
  return (
    <>
      {json.map((key, idx) => {
        return (
          <div
            href={key.href}
            key={idx}
            onClick={() => callbacks.onClick(key)}
            className={cls.count}
          >
            <a className={cls.keyCard}>
              <div className={cn(cls["keyCard"], "flex_cc")}>
                <div className={cls.keyImg}>
                  <img src={key.img} alt={key.alt} />
                </div>
                <h2>{key["h2"][lang]}</h2>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
};
export default Item;
