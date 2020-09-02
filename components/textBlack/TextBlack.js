import cls from "./textBlack.module.scss";
function TextBlack({ url, children }) {
  return (
    <>
      <div className={cls.container}>
        <div className={cls.imgContainer}>
          <img src={url} class="" alt="" />
        </div>
        <div className={cls.text}>{children}</div>
      </div>
    </>
  );
}

export default TextBlack;
