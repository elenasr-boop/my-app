"use client";

import { useCurrentTrack } from "@/app/context/CurrentTrackProvider";
import styles from "./bar.module.css";
import classNames from "classnames";
import { TrackPlay } from "../trackPlay/trackPlay";
import { Volume } from "../volume/volume";
import { PlayerControl } from "../playerControl/playerControl";
import { ProgressBar } from "../progressBar/progressBar";
import { useEffect, useRef, useState } from "react";

export default function Bar() {
  const { currentTrack } = useCurrentTrack();
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentTrack) {
      const audio = audioRef.current;
      audio.play();
    }
  }, [currentTrack]);

  if (!currentTrack) {
    return null;
  }

  const { name, author, track_file } = currentTrack;

  function playPauseTrack() {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <div className={styles.bar}>
      <audio ref={audioRef} src={track_file} className={styles.audio} />
      <div className={styles.bar__content}>
        <ProgressBar />
        <div className={styles.bar__playerBlock}>
          <div className={classNames(styles.bar__player, styles.player)}>
            <PlayerControl isPlaying={isPlaying} setIsPlaying={playPauseTrack} />
            <TrackPlay name={name} author={author} />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  );
}