import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptynote, setActiveNote, savingNewNote, setNotes } from "./";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;

    //uid
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes/`));
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptynote(newNote));
    dispatch(setActiveNote(newNote));

    //dispatch
  };
};

export const startLoadingNotes = ()=>{
  return async( dispatch, getState )=>{

    const { uid } = getState().auth;
    if (!uid) throw new Error('El UID del usuario no existe') 

    const notes = await loadNotes( uid )
    dispatch( setNotes( notes ) )

  }
}
