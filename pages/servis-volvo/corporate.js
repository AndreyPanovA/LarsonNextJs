import MainLayout from "../../components/MainLayout";
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
          {corporateClients.map((el, idx) => (
            <img src={el} key={idx} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
export default connect(({ lang }) => ({ lang }))(Corporate);
