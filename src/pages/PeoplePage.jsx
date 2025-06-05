import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPeople } from "../store/features/getPeopleSlice";

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
    <div>
      {people?.map((el) => (
        <h2>{el.name}</h2>
      ))}
    </div>
  );
};
