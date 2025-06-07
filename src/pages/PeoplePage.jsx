import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPeople } from "../store/features/getPeopleSlice";
import "../styles/PeoplePage.scss";
export const PeoplePage = () => {
  const dispatch = useDispatch();
  const { people, loading, error } = useSelector((s) => s.getPeople);
  useEffect(() => {
    dispatch(fetchGetPeople({ page: 0, limit: 10 }));
  }, []);
  console.log(people);
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
            <img src={el.image} alt="" />
            <h2>{el.name}</h2>
            <span>Height: {el.height}</span>
            <span>mass:{el.mass}</span>
            <span>Gender: {el.gender}</span>
            <span>
              <a href={el.wiki}>More about him</a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
