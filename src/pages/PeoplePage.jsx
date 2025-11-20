import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/PeoplePage.scss";
import { NavLink } from "react-router";
import { nextPagination, prevPagination } from "../store/features/helperQSlice";
import { Starfield } from "../components/Starfield";
import { useFavorites } from "../hooks/useFavorites";
import heartOutline from "../assets/icons/heart-outline.svg";
import heartFilled from "../assets/icons/heart-filled.svg";

export const PeoplePage = () => {
  const { people, loading, error } = useSelector((s) => s.getPeople);
  const { count, pagination } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const { toggleFavorite, isFavorite } = useFavorites();

  const pagePeople = useMemo(() => {
    const start = pagination.page;
    const end = start + pagination.limit;
    return people.slice(start, end);
  }, [people, pagination]);

  if (loading || error) {
    return (
      <section className="peoplePage peoplePage--centered">
        <Starfield className="peoplePage__stars" />
        <h1>{loading ? "Loading" : "Error get people"}</h1>
      </section>
    );
  }
  return (
    <section className="peoplePage">
      <Starfield className="peoplePage__stars" />
      <div className="peoplePage__content">
        <header className="peoplePage__header">
          <h2>Explore the galaxy of characters</h2>
          <p>Листайте список и находите любимых героев вселенной Star Wars.</p>
        </header>
        <div className="peoplePage__grid">
          {pagePeople?.map((el) => {
            const favorite = isFavorite(el.id);
            return (
              <article className="person-card" key={el.id}>
                <button
                type="button"
                className={`person-card__favorite ${
                    favorite ? "is-favorite" : ""
                }`}
                aria-label={
                    favorite ? "Удалить из избранного" : "Добавить в избранное"
                }
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  toggleFavorite({
                    id: el.id,
                    name: el.name,
                    image: el.image,
                    height: el.height,
                    mass: el.mass,
                    gender: el.gender,
                    wiki: el.wiki,
                  });
                }}
                >
                  <img
                    src={favorite ? heartFilled : heartOutline}
                    alt="favorite icon"
                  />
                </button>
              <NavLink to={`/watch/${el.id}`}>
                <img src={el.image} alt={el.name} />
              </NavLink>

              <h3>{el.name}</h3>
              <span>Height: {el.height}</span>
              <span>Mass: {el.mass}</span>
              <span>Gender: {el.gender}</span>
              <span>
                <a href={el.wiki}>More about this hero</a>
              </span>
            </article>
            );
          })}
        </div>
        <div className="peoplePage__pagination">
          <button
            onClick={() => dispatch(prevPagination(pagination.page))}
            disabled={pagination.page <= 0}
          >
            prev
          </button>
          <p>{count}</p>
          <button
            onClick={() => dispatch(nextPagination(pagination.page))}
            disabled={pagination.page >= 80}
          >
            next
          </button>
        </div>
      </div>
    </section>
  );
};
