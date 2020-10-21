import cls from "./index.module.scss";
import dataStorage from "../../dataStorage/dataStorage";
let {
  contacts: { contact },
} = dataStorage.volvo.pages;
const ContactDescr = ({ lang, page = "mers" }) => {
  return (
    <>
      {page == "volvo" ? (
        <div className={cls.card}>
          <div className={cls.cardPad}>
            <h1>{contact.h2[lang]}</h1>
            <div className={cls.cardTextBlock}>
              {contact.textNode.map((el, idx) => (
                <el.type key={idx} style={el.style}>
                  {el[lang]}
                </el.type>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={cls.card}>
          <div className={cls.cardPad}>
            <h1>{contact.h2[lang]}</h1>
            <div className={cls.cardTextBlock}>
              {contact.textNode.map((el, idx) => (
                <el.type key={idx} style={el.style}>
                  {el[lang]}
                </el.type>
              ))}
            </div>
          </div>
          <div className={cls.cardPad}>
            <p>Larson Mozhayka, by car:</p>
            <div className={cls.video}>
              <iframe
                src="https://www.youtube.com/embed/IyYqO61suaI"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className={cls.video}>
              <iframe
                src="https://www.youtube.com/embed/0gSS6Zbr0BY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className={cls.video}>
              <iframe
                src="https://www.youtube.com/embed/LvjWearrcFs"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className={cls.video}>
              <iframe
                src="https://www.youtube.com/embed/TnpIiZt9KlY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactDescr;
