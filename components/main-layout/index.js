import Link from "next/link";
import Head from "next/head";
import Footer from "./footer/index";
import cls from "../styles/test.module.scss";
import dataStorage from "./dataStorage/dataStorage";
import LazyLoad from "./lazyLoad/lazyLoad";
import Navigation from "../navigation/Navigation";

function MainLayout1({
  children,
  title = "Larson",
  url,
  color = "black",
  background,
  btn = "btnWhite",
  logo = true,
  site = "servis-volvo",
}) {
  return (
    <>
      <Head>
        <title>{title} | Larson</title>
      </Head>
      <main className={cls.main + " " + cls[background]}>
        <LazyLoad />
        <div className={cls.backgroundImg}>
          <img src={url} />
        </div>
        {logo && (
          <Link href={`/`}>
            <a>
              <img src={dataStorage.headerLogo} className={cls.headerLogo} />
            </a>
          </Link>
        )}

        <Navigation site={site} />
        {children}
      </main>
      <Footer color={color} btn={btn} />
    </>
  );
}

export default connect(({ site }) => ({ site }))(MainLayout1);
