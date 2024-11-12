import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

import styles from "../styles/pages/home.module.scss"; // так імпортувати модульні стилі які лише для цієї сторінки
// className={styles.title} --- ось так їх можна використоуввати, де title це назва класу

const Home = () => {
  return (
    <div>
      <b className={styles.title}>Home page</b>
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
