import cls from "./promoText.module.scss";
// import { connect } from "react-redux";
// import store from "../store";
function PromoText({ name, text, url, first }) {
  console.log(url, "cool");
  return (
    <>
      <div className={first ? cls.promo + " " + cls.top : cls.promo}>
        <div className={cls.promoImg}>
          <img src={url} alt="" />
        </div>
        <div className={cls.promoText}>
          <h2>{name}</h2>
          {text.map((p, idx) => (
            <p key={idx}>{p.p.ru}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default PromoText;
// export default connect(mapStateToProps, mapDispatchToProps)(Footer)
