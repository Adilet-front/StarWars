import { Route, Routes } from "react-router";
import styles from "./styles/App.module.scss";
import { routes } from "./routes/routesConfig";
import { Header } from "./components/Header";
import { useEffect } from "react";
import { fetchGetPeople } from "./store/features/getPeopleSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetPeople());
  }, [dispatch]);

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
