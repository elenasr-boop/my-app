'use client'

import styles from "./navbar.module.css";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

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
      <button className={classNames(styles.nav__burger, styles.burger)} onClick={() => setIsBurgerOpen(!isBurgerOpen)} >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </button>
      {isBurgerOpen && (
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
      )}
    </nav>
  );
}
