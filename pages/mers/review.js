import Router from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/review.module.scss";
// import {fetch} from "iso"
export default function Review({ json }) {
  const { review: url } = dataStorage.backgroundsUrl.volvo;
  const [reviews, setReview] = useState([]);

  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      <div className={"flex_cw " + cls.reviewWrap}>
        <div className={cls.rating}>
          <p> wqiuyeiquwyeiuqwyu </p>
        </div>
        <div className={cls.review}>
          <div className={cls.reviewItem}>
            <p> Тут я вывел </p>
            <div
              dangerouslySetInnerHTML={{
                __html: json,
              }}
            />
          </div>
          <div className={cls.reviewItem}>
            <p> Оценка: 5 </p> <p> —Ольга Васильевна К. </p>
          </div>
          <div className={cls.reviewItem}>
            <p> Оценка: 5 </p> <p> —Ольга Васильевна К. </p>
          </div>
          <div className={cls.reviewItem}>
            <p> Оценка: 5 </p> <p> —Ольга Васильевна К. </p>
          </div>
          <div className={cls.reviewItem}>
            <p> Оценка: 5 </p> <p> —Ольга Васильевна К. </p>
          </div>
          <div className={cls.reviewItem}>
            <p> Оценка: 5 </p> <p> —Ольга Васильевна К. </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://larsonv.ru/mobile.php", {
    method: "POST",
    body: JSON.stringify({
      c: "Page",
      m: "phone",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const json = await response.text();
  // setReview(json)
  return {
    props: {
      json,
    },
  };
}

// fetch('https://larsonv.ru/mobile.php', {
//   method: 'POST',
//   body: JSON.stringify({
//     c: 'Page',
//     m: 'phone',

//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8'
//   }
// })
// .then(res => res.text())
