import cls from "../styles/Home.module.scss";
import MainLayout from "../components/MainLayout";
import textContent from "../components/dataStorage/dataStorage";
import { connect } from "react-redux";
import React, { Component } from "react";
import store from "../components/store";
import { selectNav } from "../components/actions/index";
import Router from "next/router";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  router = (site) => {
    Router.push(`${site}`);
  };
  render() {
    const { lang } = this.props;
    return (
      <MainLayout
        color="white"
        title="larsonvolvo"
        background="black"
        btn="btn"
        logo={false}
      >
        <div className={cls.keysWrapper + " flex_c"}>
          <img
            src="/assets/img/larson-start.svg"
            alt="LARSON"
            className={cls.backLogo}
          />
          <div className={cls.keysLine + " flex_cw"}>
            {textContent.keys.map((key, idx) => {
              return (
                <div
                  href={key.href}
                  key={idx}
                  onClick={() => {
                    this.props.selectNavigation(key.href);
                    this.router(key.href + "/about");
                  }}
                >
                  <a className={cls.keyCard}>
                    <div className={cls.keyCard + " flex_cc"}>
                      <div className={cls.keyImg}>
                        <img src={key.img} alt={key.alt} />
                      </div>
                      {lang === "ru" ? (
                        <h2>{key.h2ru}</h2>
                      ) : (
                        <h2>{key.h2eng}</h2>
                      )}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
    );
  }
}

const mapStateToProps = ({ lang }) => {
  return { lang };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectNavigation: (site) => {
      dispatch(selectNav(site));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
