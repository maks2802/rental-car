import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import s from "./CarCard.module.css";

const CarCard = ({ car, isFavorite, onFavoriteToggle }) => {
  const navigate = useNavigate();

  const addressParts = car.address?.split(",").map((part) => part.trim());
  const city = addressParts?.[addressParts.length - 2] || "";
  const country = addressParts?.[addressParts.length - 1] || "";

  return (
    <div className={s.card}>
      <div className={s.imgWrapper}>
        <img className={s.img} src={car.img} alt={car.make} />
        <button
          className={`${s.favoriteBtn} ${isFavorite ? s.active : ""}`}
          onClick={onFavoriteToggle}
        >
          <FaHeart />
        </button>
      </div>
      <div className={s.textContainer}>
        <p className={s.brandAndYear}>
          {car.brand} <span className={s.model}>{car.model}</span> {car.year}
        </p>
        <p className={s.price}>${car.rentalPrice}</p>
      </div>
      <p className={s.info}>
        {city} | {country} | {car.rentalCompany} |
      </p>
      <p className={s.info}>
        {car.type} | {car.mileage} km
      </p>
      {/* <button onClick={onFavoriteToggle}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button> */}
      <button
        className={s.btnReadMore}
        onClick={() => navigate(`/catalog/${car.id}`)}
      >
        Read more
      </button>
    </div>
  );
};

export default CarCard;
