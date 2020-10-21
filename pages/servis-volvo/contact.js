import MainLayout from "../../components/MainLayout";
import dataStorage from "../../components/dataStorage/dataStorage";
import TextBlack from "../../components/textBlack/TextBlack";
import { connect } from "react-redux";
import cls from "../../styles/contact.module.scss";
import ContactHugePath from "../../components/contacts/huge/index";
import ContactDescr from "../../components/contacts/contactDescr/index";

function Contact({ lang }) {
  const { contacts: url } = dataStorage.backgroundsUrl.volvo;
  let {
    contacts: { contact, videoRoute },
  } = dataStorage.volvo.pages;
  console.log(contact);
  return (
    <MainLayout url={url}>
      <div className={cls.container}>
        <ContactDescr lang={lang} />
        <div className={cls.row}>
          <ContactHugePath lang={lang} />
        </div>
        <div className={cls.row + " " + cls.mb}>
          <ContactHugePath
            lang={lang}
            src="https://www.youtube.com/embed/a-LqCwChWO8"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default connect(({ lang }) => ({ lang }))(Contact);
