"use client";

import classNames from "classnames";
import styles from "./filter.module.css";
import { useState } from "react";

export default function Filter() {
  const [isOpen, setIsOpen] = useState({ isOp: false, filter: 0 });

  function handleFiltChange(type: number) {
    if (isOpen.filter === type) {
      setIsOpen({ isOp: !isOpen.isOp, filter: type });
    } else {
      setIsOpen({ isOp: true, filter: type });
    }
  }

  const arr1 = [
    "Michael Jackson",
    "Frank Sinatra",
    "Calvin Harris",
    "Zhu",
    "Arctic Monkeys",
  ];
  const arr2 = ["Рок", "Хип-хоп", "Поп-музыка", "Техно", "Инди"];
  const arr3 = ["По умолчанию", "Сначала новые", "Сначала старые"];

  return (
    <div className={classNames(styles.centerblock__filter, styles.filter)}>
      <div className={styles.filter__title}>Искать по:</div>
      <div>
        <button
          className={classNames(
            styles.filter__button,
            styles.buttonAuthor,
            styles._btnText
          )}
          onClick={() => handleFiltChange(1)}
        >
          исполнителю
        </button>
        {isOpen.isOp && isOpen.filter === 1 && (
          <div className={styles.filt}>
            {arr1.map((el, id) => {
              return (
                <button
                  key={id}
                  className={styles.filt__item}
                  onClick={() => console.log(el, id)}
                >
                  {el}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <button
          className={classNames(styles.filter__button, styles._btnText)}
          onClick={() => handleFiltChange(2)}
        >
          году выпуска
        </button>
        {isOpen.isOp && isOpen.filter === 2 && (
          <div className={styles.filt}>
            {arr2.map((el, id) => {
              return (
                <button
                  key={id}
                  className={styles.filt__item}
                  onClick={() => {
                    console.log(el, id);
                  }}
                >
                  {el}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <button
          className={classNames(styles.filter__button, styles._btnText)}
          onClick={() => handleFiltChange(3)}
        >
          жанру
        </button>
        {isOpen.isOp && isOpen.filter === 3 && (
          <div className={styles.filt}>
            {arr3.map((el, id) => {
              return (
                <button
                  onClick={() => console.log(el)}
                  key={id}
                  className={styles.filt__item}
                >
                  {el}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <></>
    </div>
  );
}
