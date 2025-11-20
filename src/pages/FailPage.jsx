import { NavLink } from "react-router";
import "../styles/FailPage.scss";
import { Starfield } from "../components/Starfield";

export const FailPage = () => {
  return (
    <section className="Failpage">
      <Starfield className="Failpage__stars" />
      <div className="Failpage__content">
        <div className="Failimage">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1633/1633157.png"
            alt="Error droid"
          />
        </div>
        <div className="TextFailpages">
          <h2>Transmission failed</h2>
          <p>Sorry, page not found</p>
          <NavLink to={"/"}>Back to home</NavLink>
        </div>
      </div>
    </section>
  );
};
