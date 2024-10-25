import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./campersOps";
import { getFilter } from "./filtersSlice";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
};

const campersSlice = createSlice({
    name: "contact",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter(
                    (contact) => contact.id !== action.payload.id
                );
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const campersReducer = campersSlice.reducer

export const selectContacts = (state) => state.contacts.contacts
export const selectLoading = (state) => state.contacts.isLoading
export const selectError = (state) => state.contacts.error


export const selectFilteredContacts = createSelector(
  [selectContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
)