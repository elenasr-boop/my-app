import styles from "./navbar.module.css";
import classNames from "classnames";
import Image from "next/image";

export default function Navbar() {
  return (
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
  );
}
