import classNames from "classnames";
import styles from "./playlist.module.css";
import { TrackType } from "@/app/types/tracks";
import Track from "../track/track";

type PlayListProps = {
  tracks: TrackType[];
}

export default function PlayList ({ tracks }: PlayListProps) {
    return (
        <div className={classNames(styles.content__playlist, styles.playlist)}>
          {tracks.map((track) => 
            <Track track={track} key={track.id}/>
          )}
        </div>
    )
}