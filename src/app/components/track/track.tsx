'use client';

import { TrackType } from "@/app/types/tracks";
import styles from "./track.module.css";
import classNames from "classnames";
import { useAppDispatch } from "@/app/store/store";
import { setCurrentTrackState } from "@/app/store/features/CurrentTrack";

type TrackProps = {
  track: TrackType;
};

export default function Track({ track }: TrackProps) {
  const dispatch = useAppDispatch();
  const { name, author, album, duration_in_seconds } = track;
  const time = `${Math.floor(duration_in_seconds / 60)}:${
    duration_in_seconds % 60 < 10
      ? `0${duration_in_seconds % 60}`
      : duration_in_seconds % 60
  }`;

  function handleClick() {
    dispatch(setCurrentTrackState(track));
  }

  return (
    <div className={styles.playlist__item} onClick={() => handleClick()}>
      <div className={classNames(styles.playlist__track, styles.track)}>
        <div className={styles.track__title}>
          <div className={styles.track__titleImage}>
            <svg className={styles.track__titleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={styles.track__titleText}>
            <span className={styles.track__titleLink}>
              {name} <span className={styles.track__titleSpan}></span>
            </span>
          </div>
        </div>
        <div className={styles.track__author}>
          <span className={styles.track__authorLink}>{author}</span>
        </div>
        <div className={styles.track__album}>
          <span className={styles.track__albumLink}>{album}</span>
        </div>
        <div className={styles.track__time}>
          <svg className={styles.track__timeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.track__timeText}>{time}</span>
        </div>
      </div>
    </div>
  );
}
