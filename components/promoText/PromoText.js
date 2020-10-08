import cls from "./promoText.module.scss";
function PromoText({ name, text, url, first, lang }) {
  return (
    <>
      <div className={first ? cls.promo + " " + cls.top : cls.promo}>
        <div className={cls.promoImg}>
          <img src={url} alt="" />
        </div>
        <div className={cls.promoText}>
          <h2>{name}</h2>
          {text.map((p, idx) => (
            <p key={idx}>{p.p[lang]}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default PromoText;
