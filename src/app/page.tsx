import styles from "./page.module.css";
import Bar from "./components/bar/bar";
import CenterBlock from "./components/centreblock/centreblock";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import { CurrentTrackProvider } from "./context/CurrentTrackProvider";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CurrentTrackProvider>
          <main className={styles.main}>
            <Navbar />
            <CenterBlock />
            <Sidebar />
          </main>
          <Bar />
        </CurrentTrackProvider>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
