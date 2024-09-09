import classNames from "classnames";
import styles from "./playerControl.module.css";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type PlayerControlProps = {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
};

export function PlayerControl({ isPlaying, setIsPlaying }: PlayerControlProps) {
  return (
    <div className={styles.player__controls}>
      <div className={styles.player__btnPrev}>
        <svg className={styles.player__btnPrevSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </svg>
      </div>
      <div
        className={classNames(styles.player__btnPlay, styles._btn)}
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
      >
        {!isPlaying && (
          <svg className={styles.player__btnPlaySvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          </svg>
        )}
        {isPlaying && (
          <Image className={styles.player__btnPlaySvg} src="img/icon/pause.svg" alt="" width={22} height={20} />
        )}
      </div>
      <div className={styles.player__btnNext}>
        <svg className={styles.player__btnNextSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </svg>
      </div>
      <div className={classNames(styles.player__btnRepeat, styles._btnIcon)}>
        <svg className={styles.player__btnRepeatSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </svg>
      </div>
      <div className={classNames(styles.player__btnShuffle, styles._btnIcon)}>
        <svg className={styles.player__btnShuffleSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </div>
    </div>
  );
}
