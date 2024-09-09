'use client';

import { useCurrentTrack } from "@/app/context/CurrentTrackProvider";
import styles from "./bar.module.css";
import classNames from "classnames";
import { TrackPlay } from "../trackPlay/trackPlay";

export default function Bar () {
  const {currentTrack} = useCurrentTrack();

    return (
        <div className={styles.bar}>
          <div className={styles.bar__content}>
            <div className={styles.bar__playerProgress}></div>
            <div className={styles.bar__playerBlock}>
              <div className={classNames(styles.bar__player, styles.player)}>
                <div className={styles.player__controls}>
                  <div className={styles.player__btnPrev}>
                    <svg className={styles.player__btnPrevSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div
                    className={classNames(styles.player__btnPlay, styles._btn)}
                  >
                    <svg className={styles.player__btnPlaySvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                  <div className={styles.player__btnNext}>
                    <svg className={styles.player__btnNextSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div
                    className={classNames(
                      styles.player__btnRepeat,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.player__btnRepeatSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div
                    className={classNames(
                      styles.player__btnShuffle,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.player__btnShuffleSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                  </div>
                </div>

                <TrackPlay />
              </div>
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
            </div>
          </div>
        </div>
    )
}