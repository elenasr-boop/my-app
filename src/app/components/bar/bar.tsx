'use client';

import { useCurrentTrack } from "@/app/context/CurrentTrackProvider";
import styles from "./bar.module.css";
import classNames from "classnames";
import { TrackPlay } from "../trackPlay/trackPlay";
import { Volume } from "../volume/volume";
import { PlayerControl } from "../playerControl/playerControl";
import { ProgressBar } from "../progressBar/progressBar";

export default function Bar () {
  const {currentTrack} = useCurrentTrack();

  if(!currentTrack) {
    return null;
  }

  const {name, author} = currentTrack;

    return (
        <div className={styles.bar}>
          <div className={styles.bar__content}>
            <ProgressBar />
            <div className={styles.bar__playerBlock}>
              <div className={classNames(styles.bar__player, styles.player)}>
                <PlayerControl />
                <TrackPlay name={name} author={author} />
              </div>
              <Volume />
            </div>
          </div>
        </div>
    )
}