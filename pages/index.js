import cls from "../styles/Home.module.scss";
import MainLayout from "../components/MainLayout";
import { connect } from "react-redux";
import React, { Component } from "react";
import store from "../components/store";
import { selectNav } from "../components/actions/index";
import Router from "next/router";
import DataServ from "../services/dataService";

import LogicServ from "../services/logicService";
import Item from "../components/item";

// import ModelViewer from 'react-model-viewer';
// import 
// import "../public/scene.bin"

// const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';
// const modelPath = "/scene.gltf"

// const test = ""
const { cn } = LogicServ;
class Home extends Component {
  constructor(props) {

    super(props);
    this.callbacks = {
      onClick: (key) => {
        this.props.selectNavigation(key.href);
        this.router(key.href + "/about");
      },
    };
  }
  router = (site) => {
    Router.push(`${site}`);
  };
  componentDidMount() {
    if(typeof window !== 'undefined') {
       require('@google/model-viewer');
    }

  }

  render() {
    const { lang, json } = this.props;
    return (
      <MainLayout
        color="white"
        title="larsonvolvo"
        background="black"
        btn="btn"
        logo={false}
      >
 {/* <model-viewer src={modelPath}  camera-controls auto-rotate></model-viewer>  */}
        <div className={cn(cls["keysWrapper"], "flex_c")}>
          <img
            src="/assets/img/larson-start.svg"
            alt="LARSON"
            className={cls.backLogo}
          />
          <div className={cn(cls["keysLine"], "flex_cw")}>
            <Item
              json={json}
              lang={lang}
              selectNavigation={this.props.selectNavigation}
            />
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

// export const getServerSideProps = async () => FetchServ.getHomeKeys();

export const getServerSideProps = async () => DataServ.getHomeKeys();
export default connect(mapStateToProps, mapDispatchToProps)(Home);
