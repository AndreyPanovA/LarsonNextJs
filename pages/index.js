import Link from "next/link"
import cls from '../styles/Home.module.scss'
import { MainLayout } from "../components/MainLayout"
import textContent from "../components/language/lang"

export default function Home() {
  return (
    <MainLayout color="white" title="larsonvolvo">
      <div className={cls.keysWrapper + " flex_c"}>
        <img src="/assets/img/larson-start.svg" alt="LARSON" className={cls.backLogo} />
        <div className={cls.keysLine + " flex_cw"}>
          {textContent.keys.map((key, idx) => {
            return (
              <Link href={key.href} key={idx}>
                <a className={cls.keyCard}>
                  <div className={cls.keyCard + " flex_cc"}>
                    <div className={cls.keyImg}>
                      <img src={key.img} alt={key.alt} />
                    </div>
                    <h2>{key.h2ru}</h2>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </MainLayout >
  )
}
