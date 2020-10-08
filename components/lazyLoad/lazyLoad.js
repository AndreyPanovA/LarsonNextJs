import cls from "./lazyLoad.module.scss";
import { useState } from "react";

function LazyLoad(props) {
  const [loader, setloader] = useState("");
  setTimeout(() => setloader("loaded"), 300);
  return (
    <div className={cls[loader]}>
      <div id={cls["loader-wrapper"]} className={cls[loader]}>
        <div id={cls["loader"]}></div>
        <div
          className={cls["loader-section"] + " " + cls["section-left"]}
        ></div>
        <div
          className={cls["loader-section"] + " " + cls["section-right"]}
        ></div>
      </div>
    </div>
  );
}

export default LazyLoad;
