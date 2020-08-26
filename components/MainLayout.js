import Link from "next/link"
import Head from "next/head"
import { Navigation } from "./navigation/Navigation"
import Footer from "../components/footer/Footer"
import cls from "../styles/test.module.scss"
import dataStorage from "./dataStorage/dataStorage"

export function MainLayout({ children, title = "Larson", url, color = "black", background, store, btn = "btnWhite", logo = true }) {
    // console.log(background, "test")
    return (
        <>
            <Head>
                <title>{title} | Larson</title>
            </Head>
            <main className={cls.main, cls[background]}>
                <img src={url} className={cls.backgroundImg} />
                {logo ? <Link href={`/`}><a><img src={dataStorage.headerLogo} className={cls.headerLogo} /></a></Link> : null}
                {children}

            </main>
            <Footer color={color} btn={btn} />
        </>
    )
}

// const linkClickHandler = () => {
//     Router.push("/")
// }
{/* <button onClick={linkClickHandler}>Go back to home</button> */ }