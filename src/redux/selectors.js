export const selectCars = (state) => state.cars.items;
export const selectFavorites = (state) => state.cars.favorites;
export const selectCarsFilters = (state) => state.cars.filters;
export const selectCarsPage = (state) => state.cars.page;
export const selectCarsLoading = (state) => state.cars.isLoading;
export const selectCarsError = (state) => state.cars.error;
export const selectSelectedCar = (state) => state.cars.selectedCar;
