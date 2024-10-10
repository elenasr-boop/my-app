import classNames from "classnames";
import styles from "./playerControl.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { setCurrentTrackState } from "@/app/store/features/playlistSlice";
import { TrackType } from "@/app/types/tracks";

type PlayerControlProps = {
  origPlaylist: TrackType[];
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  isLoop: boolean;
  setIsLoop: Dispatch<SetStateAction<boolean>>;
  isShuffle: boolean;
  setIsShuffle: Dispatch<SetStateAction<boolean>>
};

export function PlayerControl({
  origPlaylist,
  setIsPlaying,
  isLoop,
  setIsLoop,
  isShuffle,
  setIsShuffle
}: PlayerControlProps) {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const dispatch = useAppDispatch();
  let playlist = origPlaylist;

  function shuffle() {
    setIsShuffle(!isShuffle);
  }

  function prevTrack() {
    const indexCurrentTrack = playlist.indexOf(currentTrack!);
    if (!isShuffle) {
      if (indexCurrentTrack === 0) {
        return;
      }
      dispatch(setCurrentTrackState(playlist[indexCurrentTrack - 1]));
    } else {
      dispatch(setCurrentTrackState(playlist[Math.floor(Math.random() * playlist.length)]))
    }
  }

  function nextTrack() {
    const indexCurrentTrack = playlist.indexOf(currentTrack!);
    if (!isShuffle) {
      if (indexCurrentTrack === playlist.length - 1) {
        return;
      }
      dispatch(setCurrentTrackState(playlist[indexCurrentTrack + 1]));
    } else {
      dispatch(setCurrentTrackState(playlist[Math.floor(Math.random() * playlist.length)]))
    }
  }

  return (
    <div className={styles.player__controls}>
      <div className={styles.player__btnPrev} onClick={() => prevTrack()}>
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
          <Image
            className={styles.player__btnPlaySvg}
            src="img/icon/pause.svg"
            alt=""
            width={22}
            height={20}
          />
        )}
      </div>
      <div className={styles.player__btnNext} onClick={() => nextTrack()}>
        <svg className={styles.player__btnNextSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </svg>
      </div>
      <div
        className={classNames(styles.player__btnRepeat, styles._btnIcon)}
        onClick={() => {
          setIsLoop(!isLoop);
        }}
      >
        <svg
          className={styles.player__btnRepeatSvg}
          style={{ stroke: `${isLoop ? "white" : "#696969"}` }}
        >
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </svg>
      </div>
      <div
        className={classNames(styles.player__btnShuffle, styles._btnIcon)}
        onClick={() => shuffle()}
      >
        <svg
          className={styles.player__btnShuffleSvg}
          style={{ stroke: `${isShuffle ? "white" : "#696969"}` }}
        >
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </div>
    </div>
  );
}
