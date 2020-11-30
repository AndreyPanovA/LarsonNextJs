import cls from "./index.module.scss";

const Tour = ({
  text,
  src = "https://yandex.ru/map-widget/v1/-/CCQh4GuthC",
}) => {
  return (
    <div className={cls.card}>
      <h2>{text}</h2>
      <div className="panorama">
        <iframe src={src} frameBorder="1" allowFullScreen={true}></iframe>
      </div>
    </div>
  );
};
export default Tour;
