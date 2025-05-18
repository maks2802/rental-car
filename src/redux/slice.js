import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations";

const initialState = {
  items: [],
  favorites: [],
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
  page: 1,
  isLoading: false,
  error: null,
  selectedCar: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 1;
      state.items = [];
    },
    loadMore: (state) => {
      state.page += 1;
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((fav) => fav !== id);
      } else {
        state.favorites.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    initFavorites: (state) => {
      const stored = localStorage.getItem("favorites");
      state.favorites = stored ? JSON.parse(stored) : [];
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const { cars, totalPages, totalCars, page } = action.payload;
        if (Array.isArray(cars)) {
          if (page === 1) {
            state.items = cars;
          } else {
            state.items.push(...cars);
          }
          state.totalPages = totalPages;
          state.totalCars = totalCars;
          state.page = Number(page);
        }
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.selectedCar = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setFilter,
  loadMore,
  toggleFavorite,
  initFavorites,
  clearSelectedCar,
} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
