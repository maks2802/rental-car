import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectCarsFilters, selectCarsPage } from "./selectors";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const filters = selectCarsFilters(state);
    const page = selectCarsPage(state);

    const params = {
      page,
      limit: 12,
      ...filters,
    };

    if (filters.brand) params.brand = filters.brand;
    if (filters.rentalPrice) params.rentalPrice = filters.rentalPrice;
    if (filters.minMileage) params.minMileage = filters.minMileage;
    if (filters.maxMileage) params.maxMileage = filters.maxMileage;

    try {
      const { data } = await axios.get("/cars", { params });

      if (!Array.isArray(data.cars)) {
        console.error("Expected 'cars' to be an array, but got:", data);
        return thunkAPI.rejectWithValue("Invalid data format from API");
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
