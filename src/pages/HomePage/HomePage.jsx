import { useNavigate } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={s.hero}>
      <div className={s.container}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <h3 className={s.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </h3>
        <button className={s.btn} onClick={() => navigate("/catalog")}>
          View Catalog
        </button>
      </div>
    </div>
  );
};

export default HomePage;
