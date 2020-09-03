import cls from "./textBlack.module.scss";
function TextBlack({ url, children, littleWidth }) {
  return (
    <>
      <div className={cls.container}>
        <div className={cls.imgContainer}>
          <img src={url} className="" alt="" />
        </div>
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
