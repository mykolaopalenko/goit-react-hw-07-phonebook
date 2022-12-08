import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactsInitialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
   name: 'contacts',
   initialState: contactsInitialState,


   extraReducers: builder =>
      builder.addCase(fetchContacts.pending, state => {
         state.isLoading = true;
      },)
         .addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.items = payload;
         },)

         .addCase(addContact.fulfilled, (state, { payload }) => {
            state.items.push(payload);
         },)

         .addCase(deleteContact.fulfilled, (state, { payload }) => {
            state.items = state.items.filter(({ id }) => id !== payload);
         },)
         .addMatcher(
            isAnyOf(
               fetchContacts.fulfilled,
               fetchContacts.rejected,
               addContact.fulfilled,
               addContact.rejected,
               deleteContact.fulfilled,
               deleteContact.rejected
            ),
            state => {
               state.isLoading = false;
            })
         .addMatcher(
            isAnyOf(
               fetchContacts.rejected,
               addContact.rejected,
               deleteContact.rejected
            ),
            (state, { payload }) => {
               state.error = payload;
            }
         )
         .addMatcher(
            isAnyOf(
               fetchContacts.fulfilled,
               addContact.fulfilled,
               deleteContact.fulfilled
            ),
            state => {
               state.error = null;
            }
         )
         .addMatcher(
            isAnyOf(
               addContact.pending,
               deleteContact.pending
            ),
            state => {
               state.isLoading = true;
            }
         )


});

export const contactsReducer = contactsSlice.reducer;