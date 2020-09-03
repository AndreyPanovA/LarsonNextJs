import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { Navigation } from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/corporate.module.scss";
export default function Corporate() {
  const { clients: url } = dataStorage.backgroundsUrl.volvo;
  const { corporateClients } = dataStorage;
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      <div className={cls.container}>
        <h2>Larson для корпоративных Клиентов — это:</h2>
        <ul>
          <li>- Обслуживание с полным НДС (20%)</li>
          <li>
            - Оперативная бухгалтерия (акты сверок, первичная документация)
          </li>
          <li>
            - Авансовые и кредитные договоры с отсрочкой до 30 календарных дней
          </li>
          <li>
            - Гибкая система обслуживания (оригинальные и неоригинальные детали,
            фиксация цен сроком до одного года)
          </li>
        </ul>
        <h2>Уже сегодня нас выбирают:</h2>
        <div className={cls.brandLogos}>
          {corporateClients.map((el) => (
            <img src={el} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
