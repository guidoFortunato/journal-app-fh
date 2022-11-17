import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //   id: '123',
    //   title: '',
    //   body: '',
    //   date: 1234567,
    //   imageUrls: [],
    // }
  },
  reducers: {
    savingNewNote: ( state )=>{
      state.isSaving = true
    },
    addNewEmptynote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
      
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSaved = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = ''
    },
    upadeNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map( item => {

        if (item.id === action.payload.id) {
          return action.payload
        }
        return item
      })

      state.messageSaved = `${ action.payload.title }, actualizada correctamente`
    },
    setPhotosToActiveNote: (state,action)=>{
      state.active.imageURL = [ ...state.active.imageURL ,...action.payload]
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null
    },
    deleteNoteById: (state, action) => {},
  },
});
export const {
  addNewEmptynote,
  clearNotesLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  upadeNote,
} = journalSlice.actions;
