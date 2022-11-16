import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
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
    deleteNoteById: (state, action) => {},
  },
});
export const {
  addNewEmptynote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  upadeNote,
} = journalSlice.actions;
