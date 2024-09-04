import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";
import Bar from "./components/bar/bar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <nav className={classNames(styles.main__nav, styles.nav)}>
            <div className={classNames(styles.nav__logo, styles.logo)}>
              <Image
                className={styles.logo__image}
                src="/img/logo.png"
                alt=""
                width={113}
                height={17}
              />
            </div>
            <div className={classNames(styles.nav__burger, styles.burger)}>
              <span className={styles.burger__line}></span>
              <span className={styles.burger__line}></span>
              <span className={styles.burger__line}></span>
            </div>
            <div className={classNames(styles.nav__menu, styles.menu)}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <a href="#" className={styles.menu__link}>
                    Главное
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a href="#" className={styles.menu__link}>
                    Мой плейлист
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a href="../signin.html" className={styles.menu__link}>
                    Войти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className={classNames(styles.main__centerblock, styles.centerblock)}
          >
            <div
              className={classNames(styles.centerblock__search, styles.search)}
            >
              <svg className={styles.search__svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className={styles.search__text}
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <div
              className={classNames(styles.centerblock__filter, styles.filter)}
            >
              <div className={styles.filter__title}>Искать по:</div>
              <div
                className={classNames(
                  styles.filter__button,
                  styles.buttonAuthor,
                  styles._btnText
                )}
              >
                исполнителю
              </div>
              <div
                className={classNames(styles.filter__button, styles._btnText)}
              >
                году выпуска
              </div>
              <div
                className={classNames(styles.filter__button, styles._btnText)}
              >
                жанру
              </div>
            </div>
            <div className={classNames(styles.centerblock__content)}>
              <div className={classNames(styles.content__title)}>
                <div
                  className={classNames(
                    styles.playlistTitle__col,
                    styles.col01
                  )}
                >
                  Трек
                </div>
                <div
                  className={classNames(
                    styles.playlistTitle__col,
                    styles.col02
                  )}
                >
                  Исполнитель
                </div>
                <div
                  className={classNames(
                    styles.playlistTitle__col,
                    styles.col03
                  )}
                >
                  Альбом
                </div>
                <div
                  className={classNames(
                    styles.playlistTitle__col,
                    styles.col04
                  )}
                >
                  <svg className={styles.playlistTitle__svg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div
                className={classNames(
                  styles.content__playlist,
                  styles.playlist
                )}
              >
                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Guilt{" "}
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        Nero
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Welcome Reality
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>4:44</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Elektro{" "}
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        Dynoro, Outwork, Mr. Gee
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Elektro
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>2:22</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          I’m Fire{" "}
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        Ali Bakgor
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        I’m Fire
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>2:22</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Non Stop
                          <span className={styles.track__titleSpan}>
                            (Remix)
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        Стоункат, Psychopath
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Non Stop
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>4:12</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Run Run
                          <span className={styles.track__titleSpan}>
                            (feat. AR/CO)
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        Jaded, Will Clarke, AR/CO
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Run Run
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>2:54</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Eyes on Fire
                          <span className={styles.track__titleSpan}>
                            (Zeds Dead Remix)
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        Blue Foundation, Zeds Dead
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Eyes on Fire
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>5:20</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Mucho Bien
                          <span className={styles.track__titleSpan}>
                            (Hi Profile Remix)
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        HYBIT, Mr. Black, Offer Nissim, Hi Profile
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Mucho Bien
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>3:41</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Knives n Cherries
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        minthaze
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Captivating
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Knives n Cherries
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        minthaze
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Captivating
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Knives n Cherries
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        minthaze
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Captivating
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Knives n Cherries
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        minthaze
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Captivating
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Knives n Cherries
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        minthaze
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Captivating
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Knives n Cherries
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        minthaze
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Captivating
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>1:48</span>
                    </div>
                  </div>
                </div>
                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Knives n Cherries
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        minthaze
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Captivating
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>1:48</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          How Deep Is Your Love
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://">
                        Calvin Harris, Disciples
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        How Deep Is Your Love
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>3:32</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          Morena{" "}
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a className={styles.track__authorLink} href="http://}">
                        Tom Boxer
                      </a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://">
                        Soundz Made in Romania
                      </a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}>3:36</span>
                    </div>
                  </div>
                </div>

                <div className={styles.playlist__item}>
                  <div
                    className={classNames(styles.playlist__track, styles.track)}
                  >
                    <div className={styles.track__title}>
                      <div className={styles.track__titleImage}>
                        <svg className={styles.track__titleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className={styles.track__titleText}>
                        <a className={styles.track__titleLink} href="http://">
                          <span className={styles.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={styles.track__author}>
                      <a
                        className={styles.track__authorLink}
                        href="http://"
                      ></a>
                    </div>
                    <div className={styles.track__album}>
                      <a className={styles.track__albumLink} href="http://"></a>
                    </div>
                    <div className={styles.track__time}>
                      <svg className={styles.track__timeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.track__timeText}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(styles.main__sidebar, styles.sidebar)}>
            <div className={styles.sidebar__personal}>
              <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
              <div className={styles.sidebar__icon}>
                <svg>
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className={styles.sidebar__block}>
              <div className={styles.sidebar__list}>
                <div className={styles.sidebar__item}>
                  <a className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/img/playlist01.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
                <div className={styles.sidebar__item}>
                  <a className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/img/playlist02.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
                <div className={styles.sidebar__item}>
                  <a className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/img/playlist03.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Bar />
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
