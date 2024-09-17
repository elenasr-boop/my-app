"use client";

import classNames from "classnames";
import styles from "./playlist.module.css";
import { TrackType } from "@/app/types/tracks";
import Track from "../track/track";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { setTracksState } from "@/app/store/features/playlistSlice";

type PlayListProps = {
  tracks: TrackType[];
};

export default function PlayList({ tracks }: PlayListProps) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={classNames(styles.content__playlist, styles.playlist)}
      onClick={() => {
        dispatch(setTracksState(tracks));
      }}
    >
      {tracks.map((track) => { return (
        <Track key={track._id} track={track} />
      )})}
    </div>
  );
}
