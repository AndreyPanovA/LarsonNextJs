import Link from "next/link"
import Head from "next/head"
import { Navigation } from "./navigation/Navigation"
import cls from "../styles/test.module.scss"

export function MainLayout({ children, title = "Larson" }) {
    return (
        <>
            {/* <Head>
                <title>{title} | Next Js</title>
            </Head> */}
            {/* <Navigation /> */}
            <main className={cls.main}>
                {children}
            </main>
        </>
    )
}