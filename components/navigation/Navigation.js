import Link from "next/link"
import Head from "next/head"
import { useRouter } from 'next/router'
import cls from "./navigation.module.scss"
export function Navigation({ language, site, link = "about" }) {


    return (
        <>
            <nav className={cls.nav}>
                <div className="burger hovBtn noscript-hide">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
                <ul className={cls.navLinks}>
                    <Link href={`/${site}/about`}><a className={cls[selectLink("about")]}><li>О нас</li></a></Link>
                    <Link href={`/${site}/corporate`}><a className={cls[selectLink("corporate")]}><li>Клиентам</li></a></Link>
                    <Link href={`/${site}/review`}><a className={cls[selectLink("review")]}><li>Отзывы</li></a></Link>
                    <Link href={`/${site}/tires`}><a className={cls[selectLink("tires")]}><li>Шины</li></a></Link>
                    <Link href={`/${site}/promo`}><a className={cls[selectLink("promo")]}><li>Акции</li></a></Link>
                    <Link href={`/${site}/parts`}><a className={cls[selectLink("parts")]}><li>Запчаси и аксессуары</li></a></Link>
                    <Link href={`/${site}/uslugi/strahovanie-avto`}><a className={cls[selectLink("uslugi/strahovanie-avto")]}><li>Страховка</li></a></Link>
                    <Link href={`/${site}/uslugi/evakuator`}><a className={cls[selectLink("uslugi/evakuator")]}><li>Эвакуация</li></a></Link>
                    <Link href={`/${site}/uslugi/diagnosticheskaya-karta`}><a className={cls[selectLink("uslugi/diagnosticheskaya-karta")]}><li>Диагностическая карта</li></a></Link>
                    {/* <Link href=""><a><li></li></a></Link> */}
                </ul>
            </nav>
            {/* <nav role="navigation">
                <div id="menuToggle">
                    <div className="burger hovBtn noscript-hide">
                        <span className={cls.line1}></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    <ul id="menu" className="links">

                        <a href=""><li>About Larson</li></a>
                        <a href="/servis-volvo/contact"><li className="active">Contact</li></a>
                        <a href="/servis-volvo/corporate"><li>Corporate</li></a>
                        <a href="/servis-volvo/review"><li>Reviews</li></a>
                        <a href="/servis-volvo/tires"><li>Tires</li></a>
                        <a href="/servis-volvo/promo"><li>Promotions</li></a>
                        <a href="/servis-volvo/parts"><li>Parts and accessoires</li></a>
                        <a href="/servis-volvo/uslugi/strahovanie-avto"><li>Insurance</li></a>
                        <a href="/servis-volvo/uslugi/evakuator"><li>Tow</li></a>
                        <a href="/servis-volvo/uslugi/diagnosticheskaya-karta"><li>Diagnostic Card</li></a>
                        <a href="https://3.pragmatica.me" target="_blank"><li>Car Body Service</li></a>

                    </ul>
                </div>
            </nav> */}

        </>
    )
}
function selectLink(link) {
    const router = useRouter()
    const regExp = new RegExp(`${link}$`);
    if (regExp.test(router.route)) {
        return "active"
    }
}