"use client";

import styles from "./bar.module.css";
import classNames from "classnames";
import { TrackPlay } from "../trackPlay/trackPlay";
import { Volume } from "../volume/volume";
import { PlayerControl } from "../playerControl/playerControl";
import { ProgressBar } from "../progressBar/progressBar";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { setIsPlaying } from "@/app/store/features/playlistSlice";

export default function Bar() {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(`Выбран трек ${currentTrack}`);
    if (currentTrack) {
      const audio = audioRef.current;
      audio.play();
      dispatch(setIsPlaying(true));
      setCurrentTime(0);
      setCurrentTime(0);
    }
  }, [currentTrack, dispatch]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  if (!currentTrack) {
    return null;
  }

  const { name, author, track_file } = currentTrack;

  function playPauseTrack() {
    const audio = audioRef.current;
    if (isPlaying) {
      dispatch(setIsPlaying(false));
      audio.pause();
    } else {
      dispatch(setIsPlaying(true));
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  function loopTrack() {
    const audio = audioRef.current;
    audio.loop = !isLoop;
    setIsLoop(!isLoop);
  }

  return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={track_file}
        className={styles.audio}
        onTimeUpdate={(e) => {
          setCurrentTime(e.currentTarget.currentTime);
          setDuration(e.currentTarget.duration);
        }}
      />
      <div className={styles.bar__content}>
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
        />
        <div className={styles.bar__playerBlock}>
          <div className={classNames(styles.bar__player, styles.player)}>
            <PlayerControl
              isPlaying={isPlaying}
              setIsPlaying={playPauseTrack}
              isLoop={isLoop}
              setIsLoop={loopTrack}
            />
            <TrackPlay name={name} author={author} />
          </div>
          <Volume volume={volume} setVolume={setVolume} />
        </div>
      </div>
    </div>
  );
}
