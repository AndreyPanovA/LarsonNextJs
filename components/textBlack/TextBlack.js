import cls from "./textBlack.module.scss";
import Tour from "../../components/panorama/index";
function TextBlack({
  url,
  children,
  littleWidth,
  isImg = false,
  isPano = false,
  text = "Tur",
  lang,
}) {
  return (
    <>
      <div className={cls.container}>
        {isImg ? null : (
          <div className={cls.imgContainer}>
            <img src={url} className="" alt="" />
          </div>
        )}
        {isPano && (
          <div className={cls.imgContainer}>
            <h2 className="tcenter">{text[lang]}</h2>
            {isPano.map(({ url, text }, idx) => {
              return <Tour src={url} text={text[lang]} key={url} />;
            })}
          </div>
        )}
        <div
          className={littleWidth ? cls.text + " " + cls[littleWidth] : cls.text}
        >
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default TextBlack;
