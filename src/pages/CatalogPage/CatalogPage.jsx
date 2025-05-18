import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/operations";
import {
  selectCars,
  selectCarsFilters,
  selectCarsLoading,
  selectCarsPage,
  selectFavorites,
} from "../../redux/selectors";
import {
  setFilter,
  loadMore,
  toggleFavorite,
  initFavorites,
} from "../../redux/slice";
import CarGallery from "../../components/CarGallery/CarGallery";
import Filter from "../../components/Filter/Filter";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filters = useSelector(selectCarsFilters);
  const page = useSelector(selectCarsPage);
  const isLoading = useSelector(selectCarsLoading);
  const favorites = useSelector(selectFavorites);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    dispatch(initFavorites());
  }, [dispatch]);

  useEffect(() => {
    setShowLoadMore(true);
  }, [cars]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch, filters, page]);

  const handleFilterChange = (newFilters) => {
    dispatch(setFilter(newFilters));
  };

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={s.container}>
      <Filter onChange={handleFilterChange} />
      {isLoading && <p>Loading...</p>}
      <CarGallery
        cars={cars}
        favorites={favorites}
        onFavoriteToggle={handleToggleFavorite}
      />
      {isLoading && !showLoadMore && <p className={s.loading}>Loading...</p>}
      {cars.length > 0 && !isLoading && showLoadMore && (
        <button className={s.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
      {cars.length === 0 && !isLoading && (
        <p>No cars found matching your filters.</p>
      )}
    </div>
  );
};

export default CatalogPage;
