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
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state, action) => {},
    upadeNote: (state, action) => {},
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
