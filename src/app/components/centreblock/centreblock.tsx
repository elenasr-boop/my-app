import { getTracks } from "@/app/api";
import Filter from "../filter/filter";
import PlayList from "../playlist/playlist";
import styles from "./centreblock.module.css";
import classNames from "classnames";
import { TrackType } from "@/app/types/tracks";

export default async function CenterBlock() {
  let tracks: TrackType[] = [];
  let isError = "";

  try {
    let tracki = await getTracks();
    tracks = tracki.data;
    isError = "";
  } catch (e: unknown) {
    isError = e instanceof Error ? "Ошибка при загрузке треков " + e.message : "Неизвестная ошибка";
  }

  return (
    <div className={classNames(styles.main__centerblock, styles.centerblock)}>
      <div className={classNames(styles.centerblock__search, styles.search)}>
        <svg className={styles.search__svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblock__h2}>Треки</h2>
      {isError === "" && <span>{isError}</span>}
      <Filter tracks={tracks} />
      <div className={classNames(styles.centerblock__content)}>
        <div className={classNames(styles.content__title)}>
          <div className={classNames(styles.playlistTitle__col, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col04)}>
            <svg className={styles.playlistTitle__svg}>
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <PlayList tracks={tracks}/>
      </div>
    </div>
  );
}
