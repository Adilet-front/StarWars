import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/SearchPage.scss";
import { NavLink } from "react-router";
import { nextPagination, prevPagination } from "../store/features/helperQSlice";
import { Starfield } from "../components/Starfield";
import {
  clearSearchResults,
  searchPeopleByName,
  setSearchResultsFromCache,
} from "../store/features/getPeopleSlice";
import { useDebounce } from "../hooks/useDebounce";

export const SearchPage = () => {
  const { people, searchResults, searchLoading, searchError, searchCache } =
    useSelector((s) => s.getPeople);
  const { count, pagination } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const normalizedQuery = debouncedValue.trim().toLowerCase();
  const cachedResults = searchCache[normalizedQuery];
  const isSearching = normalizedQuery.length > 0;

  useEffect(() => {
    if (!normalizedQuery) {
      dispatch(clearSearchResults());
      return;
    }

    if (cachedResults) {
      dispatch(setSearchResultsFromCache(normalizedQuery));
      return;
    }

    dispatch(searchPeopleByName(debouncedValue));
  }, [normalizedQuery, debouncedValue, cachedResults, dispatch]);

  const results = useMemo(() => {
    if (isSearching) {
      return searchResults;
    }
    return people;
  }, [people, searchResults, isSearching]);

  return (
    <section className="searchPage">
      <Starfield className="searchPage__stars" />
      <div className="searchPage__content">
        <form className="searchPage__form" autoComplete="off">
          <label className="searchPage__label" htmlFor="searchPerson">
            Найдите любимого героя
          </label>
          <input
            id="searchPerson"
            type="text"
            placeholder="Search person"
            className="searchPage__input"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </form>
        {isSearching && (
          <>
            {searchLoading && (
              <p className="searchPage__status">Поиск в базе персонажей...</p>
            )}
            {searchError && (
              <p className="searchPage__status searchPage__status--error">
                {searchError}
              </p>
            )}
          </>
        )}
        {!searchLoading && !searchError && (
          <div className="card">
            {results?.map((el) => (
              <div className="person-card" key={el.id}>
                <NavLink to={`/watch/${el.id}`}>
                  <img src={el.image} alt={el.name} />
                </NavLink>

                <h2>{el.name}</h2>
                <span>Height: {el.height}</span>
                <span>Mass: {el.mass}</span>
                <span>Gender: {el.gender}</span>
                <span>
                  <a href={el.wiki}>More about him</a>
                </span>
              </div>
            ))}
            {isSearching && results?.length === 0 && (
              <p className="searchPage__status">
                Мы ничего не нашли по запросу “{value}”.
              </p>
            )}
          </div>
        )}
        <div className="searchPage__pagination">
          <button
            onClick={() => dispatch(prevPagination(pagination.page))}
            disabled={pagination.page <= 0 || isSearching}
          >
            prev
          </button>
          <p>{count}</p>
          <button
            onClick={() => dispatch(nextPagination(pagination.page))}
            disabled={pagination.page >= 80 || isSearching}
          >
            next
          </button>
        </div>
      </div>
    </section>
  );
};
