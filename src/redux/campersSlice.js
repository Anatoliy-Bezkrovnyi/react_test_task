import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./campersOps";
import { getFilter } from "./filtersSlice";

const initialState = {
    campers: [],
    isLoading: false,
    error: null,
};

const campersSlice = createSlice({
    name: "campers",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                const { items = [] } = action.payload;
                state.campers = [...items];
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchCamper.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCamper.fulfilled, (state, action) => {
                state.isLoading = false;
                state.campers = state.contacts.filter(
                    (contact) => contact.id !== action.payload.id
                );
            })
            .addCase(fetchCamper.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })            
    },
});

export const campersReducer = campersSlice.reducer

export const selectCampers = (state) => state.campers.campers
export const selectLoading = (state) => state.campers.isLoading
export const selectError = (state) => state.campers.error


export const selectFilteredCampers = createSelector(
  [selectCampers, getFilter],
  (campers) => {
    // const normalizedFilter = filter.toLowerCase();
    // // return selectCampers.filter(({ name }) =>
    // //   name.toLowerCase().includes(normalizedFilter)
      // );
      return campers;
  }
)