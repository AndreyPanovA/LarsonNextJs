import Link from "next/link";
import Head from "next/head";
import Footer from "./footer/index";
import cls from "../styles/test.module.scss";
import dataStorage from "./dataStorage/dataStorage";
import LazyLoad from "./lazyLoad/lazyLoad";
import { connect } from "react-redux";
import Navigation from "./navigation/Navigation";
import { selectNav } from "./actions/index";
import Router, { useRouter } from "next/router";
import LogicServ from "../services/logicService";
const { cn } = LogicServ;

function MainLayout({
  children,
  title = "Larson",
  url,
  color = "black",
  background,
  site = "servis-volvo",
  lang,
  btn = "btnWhite",
  logo = true,
  selectNavigation,
  shadowBackground = true,
}) {
  const routerHook = useRouter();
  const router = () => {
    selectNavigation("/");
    Router.push("/");
  };
  return (
    <>
      <Head>
        <title>{title} | Larson</title>
      </Head>
      <main className={cn(cls[background], { main: shadowBackground })}>
        <LazyLoad />
        <div className={cls.backgroundImg}>
          <img src={url} />
        </div>

        {logo && (
          <div href={`/`} onClick={router}>
            <a>
              <img src={dataStorage.headerLogo} className={cls.headerLogo} />
            </a>
          </div>
        )}
        <Navigation site={site} lang={lang} />
        {children}
      </main>
      <Footer color={color} btn={btn} />
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    selectNavigation: (site) => {
      dispatch(selectNav(site));
    },
  };
};
export default connect(
  ({ site, lang }) => ({ site, lang }),
  mapDispatchToProps
)(MainLayout);
