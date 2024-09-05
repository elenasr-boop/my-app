import classNames from "classnames";
import styles from "./filter.module.css";


export default function Filter() {
  return (
    <div className={classNames(styles.centerblock__filter, styles.filter)}>
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
      <div className={classNames(styles.filter__button, styles._btnText)}>
        году выпуска
      </div>
      <div className={classNames(styles.filter__button, styles._btnText)}>
        жанру
      </div>
    </div>
  );
}
