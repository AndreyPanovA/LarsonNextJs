import { useState } from "react";
import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/review.module.scss";
import FetchServ from "../../services/fetchService";
import Rating from "../../components/rating";

export default function Review({ json }) {
  const { review: url } = dataStorage.backgroundsUrl.volvo;
  const [reviews, setReview] = useState({ count: 0, json });
  const callbacks = {
    onScroll: async (e) => {
      if (e.target.scrollTop + e.target.clientHeight == e.target.scrollHeight) {
        const result = await FetchServ.getReviewById(reviews.count);
        setReview((prev) => {
          return {
            ...prev,
            count: (prev.count += 7),
            json: prev.json + result,
          };
        });
      }
    },
  };
  return (
    <MainLayout url={url}>
      <div className={"flex_cw " + cls.reviewWrap}>
        <Rating />
        <div className={cls.review} onScroll={callbacks.onScroll}>
          <div
            dangerouslySetInnerHTML={{
              __html: reviews.json,
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
}
