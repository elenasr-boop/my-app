import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";
import Bar from "./components/bar/bar";
import CenterBlock from "./components/centreblock/centreblock";

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
          <CenterBlock />
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
