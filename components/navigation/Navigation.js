import Link from "next/link"
import Head from "next/head"
import cls from "./navigation.module.scss"
export function Navigation({ language }) {
    return (
        <>
            <nav className={cls.nav}>
                <div className="burger hovBtn noscript-hide">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
                <ul className={cls.navLinks}>
                    <Link href="/servis-volvo/about"><a><li>О нас</li></a></Link>
                    <Link href="/servis-volvo/corporate"><a><li>Клиентам</li></a></Link>
                    <Link href="/servis-volvo/review"><a><li>Отзывы</li></a></Link>
                    <Link href="/servis-volvo/tires"><a><li>Шины</li></a></Link>
                    <Link href="/servis-volvo/promo"><a><li>Акции</li></a></Link>
                    <Link href="/servis-volvo/parts"><a><li>Запчаси и аксессуары</li></a></Link>
                    <Link href="/servis-volvo/uslugi/strahovanie-avto"><a><li>Страховка</li></a></Link>
                    <Link href="/servis-volvo/uslugi/evakuator"><a><li>Эвакуация</li></a></Link>
                    <Link href="/servis-volvo/uslugi/diagnosticheskaya-karta"><a><li>Диагностическая карта</li></a></Link>
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