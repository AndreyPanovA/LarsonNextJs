import cls from "./rating.module.scss";

const Rating = () => (
  <>
    <div className={cls.rating}>
      <h2>Средняя оценка</h2>
      <p>2020</p>
      <ul>
        <li>Коломенская — 4.91</li>
        <li>Кузовной сервис — 5.00</li>
      </ul>
      <p>2019</p>
      <ul>
        <li>Коломенская — 4.88</li>
        <li>Кузовной сервис — 5.00</li>
      </ul>
      <p>2018</p>
      <ul>
        <li>Коломенская — 4.91</li>
        <li>Кузовной сервис — 4.88</li>
      </ul>
      <p>2017</p>
      <ul>
        <li>Коломенская — 4.90</li>
        <li>Кузовной сервис — 4.80</li>
      </ul>
      <p>2016</p>
      <ul>
        <li>Коломенская — 4.83</li>
      </ul>
    </div>
  </>
);
export default Rating;
