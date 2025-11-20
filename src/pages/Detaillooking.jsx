import { useParams } from "react-router";
import styles from "../styles/Detaillooking.module.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Starfield } from "../components/Starfield";
import { useFavorites } from "../hooks/useFavorites";
import heartOutline from "../assets/icons/heart-outline.svg";
import heartFilled from "../assets/icons/heart-filled.svg";

export const Detaillooking = () => {
  const { id } = useParams();
  const { people } = useSelector((state) => state.getPeople);
  const [character, setCharacter] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const item = people.find((el) => el.id === Number(id));
    setCharacter(item ?? null);
  }, [id, people]);

  if (!character) {
    return (
      <section className={`${styles.detailPage} ${styles.centered}`}>
        <Starfield className={styles.stars} />
        <p>Персонаж не найден.</p>
      </section>
    );
  }

  const favorite = isFavorite(character.id);

  return (
    <section className={styles.detailPage}>
      <Starfield className={styles.stars} />
      <article className={styles.card}>
        <button
          type="button"
          className={`${styles.favoriteBtn} ${
            favorite ? styles.favoriteBtnActive : ""
          }`}
          aria-label={favorite ? "Удалить из избранного" : "Добавить в избранное"}
          onClick={() =>
            toggleFavorite({
              id: character.id,
              name: character.name,
              image: character.image,
              height: character.height,
              mass: character.mass,
              gender: character.gender,
              wiki: character.wiki,
            })
          }
        >
          <img
            src={favorite ? heartFilled : heartOutline}
            alt="favorite icon"
          />
        </button>
        <div className={styles.leftPart}>
          <div className={styles.image}>
            <img src={character.image} alt={character.name} />
          </div>
        </div>

        <div className={styles.rightPart}>
          <div className={styles.textInRight}>
            <h1>{character.name}</h1>
            <p>
              {character.name} was born or created in {character.bornLocation},{" "}
              has {character.hairColor} hair, {character.eyeColor} eyes and{" "}
              {character.skinColor} skin tone. Height: {character.height} cm,
              mass: {character.mass} kg.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
