import { NavLink } from "react-router";
import "../styles/FailPage.scss";

export const FailPage = () => {
  return (
    <section className="Failpage">
      <div className="Failimage">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1633/1633157.png"
          alt=""
        />
      </div>
      <div className="TextFailpages">
        <h2>Error</h2>
        <p>sorry, page not found</p>
        <button>
          <NavLink to={"/"}>Back to home</NavLink>
        </button>
      </div>
    </section>
  );
};
