import styles from "../styles/HomePages.module.scss";

export const HomePages = () => {
  const handleDef = () => {
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
  };
  const handlelight = () => {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  };
  const handleDark = () => {
    document.body.classList.add("light");
    document.body.classList.add("dark");
  };
  return (
    <div className={styles.container}>
      <h2>Choose your side</h2>
      <div>
        <div onClick={handlelight} className={styles.card}>
          <img
            src="https://wallpapersok.com/images/hd/green-lightsaber-in-star-wars-cell-phone-7dha9qrx6z0k5ftv.jpg"
            alt=""
          />
          <p style={{ color: "green" }} className={styles.imgText}>
            Light Side
          </p>
        </div>
        <div onClick={handleDark} className={styles.card}>
          <img
            src="https://i.pinimg.com/736x/2f/07/84/2f0784d3adfd03ec7aa0b22f22ee3049.jpg"
            alt=""
          />
          <p style={{ color: "red" }} className={styles.imgText}>
            Dark Side
          </p>
        </div>
        <div onClick={handleDef} className={styles.card}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aTwEH2XDkgJZOmaH7nLNR9S1vNGRONRFdA&s"
            alt=""
          />
          <p style={{ color: "yellow" }} className={styles.imgText}>
            I'm Han Solo
          </p>
        </div>
      </div>
    </div>
  );
};
