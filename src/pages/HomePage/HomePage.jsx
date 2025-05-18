import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.hero}>
      <h1 className={s.title}>Find your perfect rental car</h1>
      <h3 className={s.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </h3>
      <button className={s.btn}>View Catalog</button>
    </div>
  );
};

export default HomePage;
