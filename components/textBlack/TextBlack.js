import cls from "./textBlack.module.scss";
function TextBlack({ url, children, littleWidth, isImg = false }) {
  return (
    <>
      <div className={cls.container}>
        {isImg ? null : (
          <div className={cls.imgContainer}>
            <img src={url} className="" alt="" />
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
