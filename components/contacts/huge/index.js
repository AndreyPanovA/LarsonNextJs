import cls from "./index.module.scss";
import dataStorage from "../../dataStorage/dataStorage";

const ContactHugePath = ({
  page = "mers",
  id = 0,
  lang,
  src = "https://www.youtube.com/embed/iBTVf8yDd1M",
}) => {
  const { p, title } = dataStorage[page].pages.contacts.videoPath[id];
  return (
    <div className={cls.bigCard}>
      <div className={cls.cardPad}>
        <div className={cls.videoRow}>
          <div className={cls.videoSize}>
            <h4>{title[lang]}</h4>
            <div className={cls.textbig}>
              {p.map((el, idx) => {
                return <p key={idx}>{el[lang]}</p>;
              })}
            </div>
          </div>
          <div className={cls.video}>
            <iframe
              src={src}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactHugePath;
