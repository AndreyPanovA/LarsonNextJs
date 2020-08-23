import Head from 'next/head'
import Link from "next/link"
import cls from '../styles/Home.module.scss'
import { MainLayout } from "../components/MainLayout"
import { Footer } from "../components/footer/Footer"

export default function Home() {
  return (

    <MainLayout>
      <div className={cls.keysWrapper + " flex_c"}>
        <img src="/assets/img/larson-start.svg" alt="LARSON" className={cls.backLogo} />
        <div className={cls.keysLine + " flex_cw"}>
          <Link href="/kuzov">
            <a className={cls.keyCard}>
              <div className={cls.keyCard + " flex_cc"}>
                <div className={cls.keyImg}>
                  <img src="/assets/img/keys/myKey1.png" alt="LARSON" />
                </div>
                <h2>Кузовной сервис</h2>
              </div>
            </a>

          </Link>
          <Link href="/volvo">
            <a className={cls.keyCard + " flex_cc"}>
              <div className={cls.keyCard}>
                <div className={cls.keyImg}>
                  <img src="/assets/img/keys/myKey2.png" alt="LARSON" />
                </div>
                <h2>Сервис Вольво</h2>
              </div>
            </a>

          </Link>
          <Link href="/mers">
            <a className={cls.keyCard + " flex_cc"}>
              <div className={cls.keyCard}>
                <div className={cls.keyImg}>
                  <img src="/assets/img/keys/myKey3.png" alt="LARSON" />
                </div>
                <h2>Сервис Мерседес-Бенс</h2>
              </div>
            </a>

          </Link>

        </div>
      </div>
      <Footer color="white" />
    </MainLayout >

  )
}
