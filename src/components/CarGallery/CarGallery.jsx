import CarCard from "../CarCard/CarCard";
import s from "./CarGallery.module.css";

const CarGallery = ({ cars, favorites, onFavoriteToggle }) => {
  return (
    <div className={s.gallery}>
      {cars.map((car) => (
        <CarCard
          className={s.item}
          key={car.id}
          car={car}
          isFavorite={favorites.includes(car.id)}
          onFavoriteToggle={() => onFavoriteToggle(car.id)}
        />
      ))}
    </div>
  );
};

export default CarGallery;
