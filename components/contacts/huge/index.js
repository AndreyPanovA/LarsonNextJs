import cls from "./index.module.scss";

const ContactHugePath = ({
  lang,
  src = "https://www.youtube.com/embed/iBTVf8yDd1M",
}) => {
  return (
    <div className={cls.bigCard}>
      <div className={cls.cardPad}>
        <h2>By metro or by feet:</h2>
        <div className={cls.videoRow}>
          <div className={cls.videoSize}>
            <p>By car:</p>
            <p>
              From the center: along Andropova Av., after the Nagatinsky Bridge,
              to the right, down to the embankment and to the left to the
              territory of the Nagatinsky business center in front of the Lukoil
              gas station.
            </p>
          </div>
          <div className={cls.video}>
            <iframe
              src={src}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactHugePath;
