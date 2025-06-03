import { NavLink } from "react-router";
import "../styles/NotFound.scss";

export const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="NotFDText">
        <h1>
          4
          <img
            src="https://www.svgrepo.com/show/440402/death-star.svg"
            alt=""
          />
          4
        </h1>
        <NavLink to={"/"}>Кликни чтобы перейти на главную страницу</NavLink>
      </div>
      <div className="DarkLordImg">
   
      </div>
    </div>
  );
};
