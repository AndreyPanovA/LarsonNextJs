import { MainLayout } from "../../components/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import useSWR from "swr";
import FetchServ, { getResourse } from "../../services/fetchService";

// const fetcher = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   if (res.status !== 200) {
//     throw new Error(data.message);
//   }
//   return data;
// };

function About({ lang, json }) {
  console.log("new", json);
  const { about: url } = dataStorage.backgroundsUrl.mers;
  let { about } = dataStorage.mers.pages;
  return (
    <MainLayout url={url}>
      <Navigation site="mers" />
      <div style={{ position: "relative", fontSize: 55 }}>
        {about[0].h1[lang]}
      </div>
      <div style={{ position: "relative", fontSize: 55 }}>
        {about[1].h1[lang]}
      </div>
      <TextBlack isImg={true}>
        {about.map((el, idx) => (el.p ? <p key={idx}>{el.p[lang]}</p> : null))}
      </TextBlack>
    </MainLayout>
  );
}
export const getStaticProps = async () => FetchServ.getResourse("navbar");
export default connect(({ lang }) => ({ lang }))(About);
