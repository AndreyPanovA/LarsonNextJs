import MainLayout from "../../components/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import dataStorage from "../../components/dataStorage/dataStorage";
import cls from "../../styles/mb.module.scss";
import Tour from "../../components/panorama/index";
export default function Mb() {
  const { about: url } = dataStorage.backgroundsUrl;
  return (
    <MainLayout>
      <div class={cls["blur_container"]}>
        <div class={cls["serv_header"] + " " + cls["container_bot"]}>
          <div class={cls["header_descr-top"]}>
            <div class="">
              <h1>Сервис Volvo</h1>
              <p>
                Мы специализируемся на автомобилях Volvo и имеем все
                необходимое.
              </p>
            </div>
          </div>
          <div class={cls["serv_header-flex"] + " " + cls.flex_bc}>
            <div class={cls["serv_header-descr"]}>
              <Tour text="Виртуальный тур" />
            </div>
            <div class={cls["serv_header-btn"] + " " + cls["shad_w"]}>
              <div class={cls["check_1"]}>
                <input
                  type="radio"
                  id="enter"
                  name={cls["service"] + " " + cls.checked + " " + cls.input}
                />
                <label for="enter">Записаться в сервис Volvo</label>
              </div>
              <div class={cls["check_2"]}>
                <input type="radio" id="tow" name="service" />
                <label for="tow">Вызвать эвакуатор</label>
              </div>
              <h2>Телефон</h2>
              <div class={cls["flex_cc"]}>
                <input type="text" class={cls["servInp"]} />
                <button class={cls["servBtn"]}>Отправить</button>
                <p>-Напишите нам-</p>
                <div class={cls["socila_serv"]}>
                  <img src="../assets/img/social/telegram.png" alt="" />
                  <img src="../assets/img/social/instagram.png" alt="" />
                  <img src="../assets/img/social/facebook.png" alt="" />
                  <img src="../assets/img/social/youtube.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class={cls["serv-catalog"]}>
          <div class={cls["srv-catalog-title"]}>
            <img
              src="../assets/img/serv/catalog.png"
              alt="..."
              class={cls["catalog-abs-header"]}
            />
            <div class={cls["srv-catalog_names"]}>
              <h2>Каталог моделей</h2>
              <p>Ремонт Volvo XC901</p>
            </div>
          </div>
          <div class={cls["serv-container"]}>
            <div class={cls["catalog_row"] + " " + cls.flex_c}>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>

              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>

              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>

              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>

              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>

              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
              <div class={cls["serv-item"]}>
                <img src="../assets/img/toyota_RAV4/1.jpg" alt="" />
                <p>Toyota RAV4</p>
              </div>
            </div>
          </div>
        </div>
        <div class={cls["serv-comand"]}>
          <h2>Наша команда</h2>
          <div class={cls["serv-tab-container"] + " " + cls["serv-container"]}>
            <div class="tab-item tab-1 tab-show">
              <p>
                Рассказываем немного о себе и о наших ценностях. Команда Larson
                - это опытные проффесионалы своего дела, которые дадут вам
                ощущение полного комфорта в нашем автосервисе.
              </p>
            </div>
            <div class={cls["tab-item"] + " " + cls["tab-2"]}>
              <div class={cls["flex_c"]}>
                <div class={cls["foto"]}>
                  <img src="../assets/img/serv/petr.png" alt="Петр Бакулов" />
                </div>
                <div class="foto">
                  <img
                    src="../assets/img/serv/sergey.jpg"
                    alt="Сергей Тарасов"
                  />
                </div>
                <div class={cls["foto"]}>
                  <img src="../assets/img/serv/fedor.jpg" alt="Федр Бакулов" />
                </div>
              </div>
            </div>
            <div class={cls["tab-btn-container"] + " " + cls["flex_c"]}>
              <div
                class={
                  cls["tab-btn"] + " " + cls["btn-1"] + " " + cls["tab-active"]
                }
                id="0"
              >
                Ценности
              </div>
              <div class={cls["tab-btn"] + " " + cls["btn-2"]} id="1">
                Люди
              </div>
            </div>
          </div>
        </div>
        <div class={cls["serv-map"]}>
          <div class={cls["serv-map-line"]}></div>
          <div class={cls["serv-container"]}>
            <div class={cls["serv-map-contacts"]}>
              <div class={cls["contacts-container"]}>
                <div class={cls["map-flex"]}>
                  <h2>Контакты</h2>
                  <img src="../assets/img/larson-white.svg" alt="Larson" />
                </div>
                <p>Ежедневно в 9:00 до 20:00</p>
                <p>Единый телефон: +7 (495) 781-10-81.</p>
                <a href="">
                  Larson Коломенская <br />
                  (открыть в Яндекс.Навигаторе)
                </a>
                <p>
                  115533, г. Москва, проспект Андропова, д. 22, стр. 2 БЦ
                  «Нагатинский»
                </p>
                <a href="">
                  Larson Можайка
                  <br />
                  (открыть в Яндекс.Навигаторе)
                </a>
                <p>
                  121596, Московская обл., Новоивановское, Можайское шоссе, вл.
                  167 54-й км МКАД, внешняя сторона
                </p>
                <p>Внимание! Заезд с дублёра МКАД.</p>
              </div>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e59348621f8f7d443d881e0e9454b2d4df2ca1b9b90391de232e09144a4129f&amp;source=constructor"
              width="100%"
              height="720"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
