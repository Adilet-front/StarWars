import { Starfield } from "../components/Starfield";
import "../styles/SimplePage.scss";

export const CategoryPage = () => {
  return (
    <section className="simplePage">
      <Starfield className="simplePage__stars" />
      <div className="simplePage__content">
        <h1>CategoryPage</h1>
        <p>Категории скоро будут доступны.</p>
      </div>
    </section>
  );
};