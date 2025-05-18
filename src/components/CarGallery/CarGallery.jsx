import CarCard from "../CarCard/CarCard";

const CarGallery = ({ cars, favorites, onFavoriteToggle }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard
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
