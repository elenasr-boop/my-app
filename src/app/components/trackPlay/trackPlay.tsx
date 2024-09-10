'use client';

import classNames from "classnames";
import styles from "./trackPlay.module.css";

type TrackPlayProps = {
    name: string|undefined,
    author: string|undefined,
}

export function TrackPlay ({name, author}: TrackPlayProps) {
    return (<div
        className={classNames(
          styles.player__trackPlay,
          styles.trackPlay
        )}
      >
        <div className={styles.trackPlay__contain}>
          <div className={styles.trackPlay__image}>
            <svg className={styles.trackPlay__svg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={styles.trackPlay__author}>
            <a
              className={styles.trackPlay__authorLink}
              href="http://"
            >
              {name}
            </a>
          </div>
          <div className={styles.trackPlay__album}>
            <a className={styles.trackPlay__albumLink} href="http://">
              {author}
            </a>
          </div>
        </div>

        <div className={styles.trackPlay__likeDis}>
          <div
            className={classNames(
              styles.trackPlay__like,
              styles._btnIcon
            )}
          >
            <svg className={styles.trackPlay__likeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
          </div>
          <div
            className={classNames(
              styles.trackPlay__dislike,
              styles._btnIcon
            )}
          >
            <svg className={styles.trackPlay__dislikeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
            </svg>
          </div>
        </div>
      </div>)
}