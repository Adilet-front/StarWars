import styles from "../styles/HomePages.module.scss";
import { Starfield } from "../components/Starfield";

export const HomePages = () => {
  const setBodyTheme = (...classes) => {
    document.body.classList.remove("light", "dark", "solo");
    if (classes.length) {
      document.body.classList.add(...classes);
    }
  };

  const handleLight = () => {
    setBodyTheme("light");
  };

  const handleDark = () => {
    setBodyTheme("light", "dark");
  };

  const handleSolo = () => {
    setBodyTheme("solo");
  };

  return (
    <section className={styles.homePage}>
      <Starfield className={styles.stars} />
      <div className={styles.content}>
        <h2>Choose your side</h2>
        <div className={styles.cards}>
          <button onClick={handleLight} className={styles.card}>
            <img
              src="https://wallpapersok.com/images/hd/green-lightsaber-in-star-wars-cell-phone-7dha9qrx6z0k5ftv.jpg"
              alt="Green lightsaber"
            />
            <p className={styles.imgText} data-color="light">
              Light Side
            </p>
          </button>
          <button onClick={handleDark} className={styles.card}>
            <img
              src="https://i.pinimg.com/736x/2f/07/84/2f0784d3adfd03ec7aa0b22f22ee3049.jpg"
              alt="Dark side art"
            />
            <p className={styles.imgText} data-color="dark">
              Dark Side
            </p>
          </button>
          <button onClick={handleSolo} className={styles.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aTwEH2XDkgJZOmaH7nLNR9S1vNGRONRFdA&s"
              alt="Han Solo"
            />
            <p className={styles.imgText} data-color="neutral">
              I'm Han Solo
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};
