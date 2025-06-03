import { Link, NavLink } from "react-router";
import styles from "../styles/Header.module.scss";

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <div className={styles.HeaderImg}>
                <img
                  src="https://img.icons8.com/?size=100&id=69493&format=png&color=000000"
                  alt="logo starWars"
                />
              </div>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/people"}
              >
                People
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/search"}
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/*"}
              >
                Not Found
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/fail"}
              >
                Fail
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.HeaderImgFavorite}>
          <Link to={"/favorite"}>
            <img
              src="https://img.icons8.com/?size=100&id=26083&format=png&color=C90090"
              alt="icon favorite"
            />
          </Link>
        </div>
      </header>
    </div>
  );
};
