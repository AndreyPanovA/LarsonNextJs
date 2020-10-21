import cls from "./index.module.scss";

const Tour = ({ text, src }) => {
  return (
    <div className={cls.card}>
      <h2>{text}</h2>
      <div className="panorama">
        <iframe src={src} frameborder="1" allowfullscreen="true"></iframe>
      </div>
    </div>
  );
};
export default Tour;
