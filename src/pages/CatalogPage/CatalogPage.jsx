import { useEffect } from "react";
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

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filters = useSelector(selectCarsFilters);
  const page = useSelector(selectCarsPage);
  const isLoading = useSelector(selectCarsLoading);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(initFavorites());
  }, [dispatch]);

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
    <div>
      <h1>Catalog</h1>
      <Filter onChange={handleFilterChange} />
      {isLoading && <p>Loading...</p>}
      <CarGallery
        cars={cars}
        favorites={favorites}
        onFavoriteToggle={handleToggleFavorite}
      />
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default CatalogPage;
