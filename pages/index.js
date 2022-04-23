import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/toolbar';

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar/>
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Latest news articles using a news api</h3>
      </div>
    </div>
  );
}

