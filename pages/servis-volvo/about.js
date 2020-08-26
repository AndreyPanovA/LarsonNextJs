import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"
import Footer from "../../components/footer/Footer"
import { Navigation } from "../../components/navigation/Navigation"
import dataStorage from "../../components/dataStorage/dataStorage"
export default function About() {
    const { about: url } = dataStorage.backgroundsUrl
    return (
        <MainLayout url={url}>
            <Navigation site="servis-volvo" />
        </MainLayout>
    )
}