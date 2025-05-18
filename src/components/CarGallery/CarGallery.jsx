import { useEffect } from "react";
import CarCard from "../CarCard/CarCard";
import s from "./CarGallery.module.css";

const CarGallery = ({ cars, favorites, onFavoriteToggle }) => {
  useEffect(() => {
    const uniqueIds = new Set(cars.map((car) => car.id));
    if (uniqueIds.size !== cars.length) {
      console.error("УВАГА: Знайдено неунікальні ID автомобілів!", cars);
    }
  }, [cars]);
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
