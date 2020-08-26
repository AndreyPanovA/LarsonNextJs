import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"
import Footer from "../../components/footer/Footer"
import { Navigation } from "../../components/navigation/Navigation"
export default function Corporate() {
    return (
        <MainLayout url="/assets/img/backgrounds/bg-review.jpg">
            <Navigation site="servis-volvo" />
        </MainLayout>
    )
}