"use client";

import { TrackType } from "@/app/types/tracks";
import styles from "./track.module.css";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { setCurrentTrackState, setIsPlaying } from "@/app/store/features/playlistSlice";

type TrackProps = {
  track: TrackType;
};

export default function Track({ track }: TrackProps) {
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const { name, author, album, duration_in_seconds } = track;
  const time = `${Math.floor(duration_in_seconds / 60)}:${
    duration_in_seconds % 60 < 10
      ? `0${duration_in_seconds % 60}`
      : duration_in_seconds % 60
  }`;

  function handleClick() {
    dispatch(setCurrentTrackState(track));
    dispatch(setIsPlaying(true));
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
          <div className={styles.cont}>
            <svg className={styles.track__timeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            {currentTrack === track && isPlaying && <div className={classNames(styles.purple, styles.playingTrack)} />}
            {currentTrack === track && !isPlaying && <div className={styles.purple} />}
          </div>
          <span className={styles.track__timeText}>{time}</span>
        </div>
      </div>
    </div>
  );
}
