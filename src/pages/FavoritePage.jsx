import { NavLink } from "react-router";
import { Starfield } from "../components/Starfield";
import { useFavorites } from "../hooks/useFavorites";
import heartFilled from "../assets/icons/heart-filled.svg";
import "../styles/SimplePage.scss";
import "../styles/FavoritePage.scss";

export const FavoritePage = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const hasFavorites = favorites.length > 0;

  return (
    <section className="simplePage favoritePage">
      <Starfield className="simplePage__stars" />
      <div className="simplePage__content favoritePage__content">
        <div>
          <h1>Favorite Heroes</h1>
          <p>
            {hasFavorites
              ? "Ваши сохраненные персонажи вселенной Star Wars."
              : "Пока пусто. Добавьте героя, кликнув по сердечку на странице персонажей."}
          </p>
        </div>

        {hasFavorites && (
          <div
            className={`favoritePage__grid ${
              favorites.length === 1 ? "favoritePage__grid--single" : ""
            }`}
          >
            {favorites.map((hero) => (
              <article key={hero.id} className="favoriteCard">
                <button
                  type="button"
                  className="favoriteCard__remove"
                  aria-label="Убрать из избранного"
                  onClick={() => toggleFavorite(hero)}
                >
                  <img src={heartFilled} alt="remove favorite icon" />
                </button>
                <NavLink to={`/watch/${hero.id}`}>
                  <img src={hero.image} alt={hero.name} />
                </NavLink>
                <div className="favoriteCard__body">
                  <h3>{hero.name}</h3>
                  <p>
                    Height: {hero.height} | Mass: {hero.mass}
                  </p>
                  <p>Gender: {hero.gender}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};