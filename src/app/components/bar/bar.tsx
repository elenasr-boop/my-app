"use client";

import styles from "./bar.module.css";
import classNames from "classnames";
import { TrackPlay } from "../trackPlay/trackPlay";
import { Volume } from "../volume/volume";
import { PlayerControl } from "../playerControl/playerControl";
import { ProgressBar } from "../progressBar/progressBar";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import {
  setCurrentTrackState,
  setIsPlaying,
} from "@/app/store/features/playlistSlice";

export default function Bar() {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const dispatch = useAppDispatch();
  let playlist = useAppSelector((state) => state.playlist.tracks);
  const origPlaylist = useAppSelector((state) => state.playlist.tracks);
  const indexCurrentTrack = playlist.indexOf(currentTrack!);
  const nextTrack = playlist[indexCurrentTrack + 1];
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    if (currentTrack) {
      const audio = audioRef.current as HTMLAudioElement;
      let playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
        })
        .catch(error => {
          console.error("Error playing audio", error);
        });
      }
      dispatch(setIsPlaying(true));
      setCurrentTime(0);
    }
  }, [currentTrack, dispatch]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const handleEnded = () => {
      dispatch(setIsPlaying(false));
      if (isShuffle) {
        dispatch(
          setCurrentTrackState(
            playlist[Math.floor(Math.random() * playlist.length)]
          )
        );
      } else {
        if (indexCurrentTrack < playlist.length - 1) {
          dispatch(setCurrentTrackState(nextTrack));
        } else {
          if (isLoop) {
            dispatch(setCurrentTrackState(playlist[0]));
          }
        }
      }
    };

    if (currentTrack) {
      const audio = audioRef.current as HTMLAudioElement;
      audio.src = playlist[indexCurrentTrack].track_file;
      audio.addEventListener("ended", handleEnded);

      audio.play();

      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [currentTrack, indexCurrentTrack, playlist, dispatch, isLoop, nextTrack, isShuffle]);

  if (!currentTrack) {
    return null;
  }

  const { name, author, track_file } = currentTrack;

  function playPauseTrack() {
    const audio = audioRef.current as HTMLAudioElement;
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
    const audio = audioRef.current as HTMLAudioElement;
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
          max={isNaN(duration) ? 0 : duration}
          value={currentTime}
          step={0.01}
          onChange={(e) =>
            (audioRef.current!.currentTime = Number(e.target.value))
          }
        />
        <div className={styles.bar__playerBlock}>
          <div className={classNames(styles.bar__player, styles.player)}>
            <PlayerControl
              origPlaylist={origPlaylist}
              setIsPlaying={playPauseTrack}
              isLoop={isLoop}
              setIsLoop={loopTrack}
              isShuffle={isShuffle}
              setIsShuffle={setIsShuffle}
            />
            <TrackPlay name={name} author={author} />
          </div>
          <Volume volume={volume} setVolume={setVolume} />
        </div>
      </div>
    </div>
  );
}
