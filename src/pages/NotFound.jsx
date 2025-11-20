import { NavLink } from "react-router";
import "../styles/NotFound.scss";
import { Starfield } from "../components/Starfield";

export const NotFound = () => {
  return (
    <section className="NotFound">
      <Starfield className="NotFound__stars" />
      <div className="NotFound__content">
        <div className="NotFound__code">
          <span>4</span>
          <img
            src="https://www.svgrepo.com/show/440402/death-star.svg"
            alt="Death Star"
          />
          <span>4</span>
        </div>
        <p>Упс! Эта страница потерялась где-то в далекой галактике.</p>
        <NavLink className="NotFound__link" to={"/"}>
          Вернуться на главную
        </NavLink>
      </div>
    </section>
  );
};
