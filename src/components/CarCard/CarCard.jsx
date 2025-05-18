import { Link, useNavigate } from "react-router-dom";
import s from "./CarCard.module.css";

const CarCard = ({ car, isFavorite, onFavoriteToggle }) => {
  const navigate = useNavigate();

  return (
    <div className={s.card}>
      <img className={s.img} src={car.img} alt={car.make} />
      <h3>
        {car.brand} {car.model}
      </h3>
      <p>{Number(car.mileage).toLocaleString("en-US")} km</p>
      <p>Price: {car.rentalPrice} $</p>
      <button onClick={onFavoriteToggle}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
      <button onClick={() => navigate(`/catalog/${car.id}`)}>Read more</button>
    </div>
  );
};

export default CarCard;
