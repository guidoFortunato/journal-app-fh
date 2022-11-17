import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptynote, setActiveNote, savingNewNote, setPhotosToActiveNote, setNotes, setSaving, upadeNote } from "./";

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

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving());

    const { uid } = getState().auth;

    const { active: note } = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch( upadeNote( note ) )
  };
};


export const startUploadingFiles = ( files = [] ) => {
  return async ( dispatch )=>{
    dispatch(setSaving());

    const fileUploadPromises = []
    for (const file of files) {
      fileUploadPromises.push( fileUpload(file) )
    }

    const photoUrls = await Promise.all( fileUploadPromises )

    dispatch( setPhotosToActiveNote( photoUrls ) )

    // await fileUpload( files[0] )
    
  }
}