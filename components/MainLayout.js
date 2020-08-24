import Link from "next/link"
import Head from "next/head"
import { Navigation } from "./navigation/Navigation"
import { Footer } from "../components/footer/Footer"
import cls from "../styles/test.module.scss"

export function MainLayout({ children, title = "Larson", color = "black", store }) {

    return (
        <>
            <Head>
                <title>{title} | Larson</title>
            </Head>
            <main className={cls.main}>
                {children}
            </main>
            <Footer color={color} />
        </>
    )
}