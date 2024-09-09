import classNames from "classnames";
import styles from "./volume.module.css";

export function Volume () {
    return (
        <div
                className={classNames(styles.bar__volumeBlock, styles.volume)}
              >
                <div className={styles.volume__content}>
                  <div className={styles.volume__image}>
                    <svg className={styles.volume__svg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div
                    className={classNames(styles.volume__progress, styles._btn)}
                  >
                    <input
                      className={classNames(
                        styles.volume__progressLine,
                        styles._btn
                      )}
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
    )
}