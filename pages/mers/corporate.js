import MainLayout from "../../components/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/corporate.module.scss";
import { connect } from "react-redux";
function Corporate({ lang }) {
  const { clients: url } = dataStorage.backgroundsUrl.volvo;
  const {
    corporateClients,
    volvo: {
      pages: {
        clients: { h2, li },
      },
    },
  } = dataStorage;
  // console.log(h2[0].ru);
  return (
    <MainLayout url={url}>
      <div className={cls.container}>
        <h2>{h2[0][lang]}</h2>
        <ul>
          {li.map((l, idx) => (
            <li key={idx}>{l[lang]}</li>
          ))}
        </ul>
        <h2>{h2[1][lang]}</h2>
        <div className={cls.brandLogos}>
          {corporateClients.map((el) => (
            <img src={el} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
export default connect(({ lang }) => ({ lang }))(Corporate);
