import Link from "next/link"
import cls from '../styles/Home.module.scss'
import { MainLayout } from "../components/MainLayout"
import textContent from "../components/language/lang"
import { connect } from "react-redux"
import React, { Component } from "react"
import store from "../components/store"
import lang from "../components/language/lang"

class Home extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  state = {
    lang: "ru"
  }

  componentDidMount() {

  }
  render() {
    const { lang } = this.props
    console.log("before:", lang)

    return (
      <MainLayout color="white" title="larsonvolvo">
        <div className={cls.keysWrapper + " flex_c"}>
          <img src="/assets/img/larson-start.svg" alt="LARSON" className={cls.backLogo} />
          <div className={cls.keysLine + " flex_cw"} onClick={(lang) => {

            this.props.changeLang("ru");



          }}>
            {textContent.keys.map((key, idx) => {
              return (
                <Link href={key.href} key={idx}>
                  <a className={cls.keyCard}>
                    <div className={cls.keyCard + " flex_cc"}>
                      <div className={cls.keyImg}>
                        <img src={key.img} alt={key.alt} />
                      </div>
                      {lang == "ru" ? <h2>{key.h2ru}</h2> : <h2>{key.h2eng}</h2>}
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </MainLayout >

    )
  }
}

const mapStateToProps = ({ lang }) => {
  return { lang }
}
const mapDispatchToProps = (dispatch) => {


  return {
    changeLang: (lang) => {
      console.log(lang, "after")
      dispatch({
        type: "CHANGE_LANG",
        lang: `${lang}`
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

