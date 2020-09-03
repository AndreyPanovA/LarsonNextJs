import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Footer from "../../components/footer/Footer";
import { Navigation } from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
export default function About() {
  const { about: url } = dataStorage.backgroundsUrl.volvo;
  return (
    <MainLayout url={url}>
      <Navigation site="servis-volvo" />
      <TextBlack isImg={true}>
        <p>
          История Larson началась в 2011 году. Открыт первый магазин запчастей
          «Вольво» под названием Part for Life в Румянцево. Спустя год открылся
          и первый слесарный сервис «Вольво».
        </p>
        <p>
          В 2014 году был открыт сервис на Коломенской. Тогда же состоялся
          ребрендинг компании, которая получила имя «Larson» (по фамилии одного
          из основателей марки «Вольво»).
        </p>
        <p>
          В 2020 году Larson расширяет границы и открывает первый филиал по
          обслуживанию автомобилей марки Mercedes-Benz. Как и владельцы Volvo,
          почитатели легендарной немецкой марки уважают безопасность и комфорт.
          Девиз Готлиба Даймлера, основателя концерна Daimler, которому и
          принадлежит марка Mercedes-Benz, «The best or nothing» (англ. лучшее
          или ничего) — прекрасно подходит и Larson, ведь мы стремимся быть
          лучшими и в этом стремлении не готовы отступать.
        </p>
        <p>
          Larson работает с оригинальным программным обеспечением, позволяющим
          полноценно обслуживать весь модельный ряд. У нас прекрасная логистика
          с центральным складом и высокая периодичность поставок, поэтому все
          необходимые запасные части попадают в наши сервисы максимально
          оперативно.
        </p>
        <p>
          Сегодня с нами разумные автовладельцы, которые по-настоящему любят
          свой автомобиль и готовы по достоинству оценить качественный сервис
          без ненужных переплат.
        </p>
        <p>
          Как и наш товарный знак, представляющий собой многоугольник, мы
          затрагиваем много граней обслуживания клиента: от быстрого и
          качественного сервиса до индивидуального отношения к каждому
          обратившемуся к нам. Мы ценим время наших клиентов, поэтому нами была
          создана масса интерактивных возможностей, делающих сотрудничество с
          Larson ещё более комфортным и быстрым. Сайт с понятным и удобным
          интерфейсом. Личный кабинет клиента с возможностью онлайн оплаты.
          Мобильное приложение Larson Car, с помощью которого можно рассчитать
          стоимость регулярного технического обслуживания и популярных работ,
          записаться на сервис, заказать обратный звонок, пообщаться онлайн с
          мастером-консультантом или оставить отзыв о работе сервиса. На любую
          обратную связь я лично и мои сотрудники незамедлительно реагируем. Мы
          всегда готовы решить любую поставленную задачу, потому что наша цель
          состоит в том, чтобы после посещения «Ларсон» каждый клиент чувствовал
          себя максимально уверенным в своем сервисе.
        </p>
      </TextBlack>
    </MainLayout>
  );
}
