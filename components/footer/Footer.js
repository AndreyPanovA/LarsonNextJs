import cls from "./footer.module.scss"
export function Footer({ color = "black" }) {
    return (
        <>
            <footer className={cls[color]}>
                <div className={cls.fot_wrap + " flex_c"}>
                    <p>
                        C «Larson Бонус» выгоднее! Наше приложение:</p>
                    <div className={cls.appStore + " flex_c"}>
                        <a href="https://lk.larsonv.ru" target="_blank">
                            <img src="/assets/img/larson-white.svg" alt="" />
                        </a>
                        <a href="https://itunes.apple.com/us/app/larson-car/id1190680675" target="_blank" className="app-apple">
                            <img src="/assets/img/social/apple.svg" alt=""
                                href="https://itunes.apple.com/us/app/larson-car/id1190680675" /></a><a
                                    href="https://play.google.com/store/apps/details?id=com.larson.car" target="_blank" className="app-google">
                            <img src="/assets/img/social/google.svg" alt=""
                                href="https://itunes.apple.com/us/app/larson-car/id1190680675" /></a>
                    </div>
                    <button>
                        Русский
                    </button>
                </div>
            </footer>

        </>
    )
}