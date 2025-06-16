import { useDispatch, useSelector } from "react-redux";
import "../styles/PeoplePage.scss";
import { NavLink } from "react-router";
import { nextPagination, prevPagination } from "../store/features/helperQSlice";
export const PeoplePage = () => {
  const { people, loading, error } = useSelector((s) => s.getPeople);
  const { count, pagination } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <div>
        <h1 style={{ color: "white" }}>Loading</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 style={{ color: "white" }}>Error get people</h1>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="card">
        {people?.map((el) => (
          <div className="person-card" key={el.id}>
            <NavLink to={`/watch/${el.id}`}>
              <img src={el.image} alt="" />
            </NavLink>

            <h2>{el.name}</h2>
            <span>Height: {el.height}</span>
            <span>mass:{el.mass}</span>
            <span>Gender: {el.gender}</span>
            <span>
              <a href={el.wiki}>More about him</a>
            </span>
          </div>
        ))}
        <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
          <button
            onClick={() => dispatch(prevPagination(pagination.page))}
            disabled={pagination.page <= 0 ? true : false}
            style={{ fontSize: "32px", padding: "20px", cursor: "pointer" }}
          >
            prev
          </button>
          <p style={{ fontSize: "32x", color: "white", lineHeight: "0" }}>
            {count}
          </p>
          <button
            onClick={() => dispatch(nextPagination(pagination.page))}
            disabled={pagination.page >= 80 ? true : false}
            style={{ fontSize: "32px", padding: "20px", cursor: "pointer" }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};
