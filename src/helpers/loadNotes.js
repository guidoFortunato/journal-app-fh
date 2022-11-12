import { collection, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("El UID del usuario no existe");

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes/`);
  const { docs } = await getDocs(collectionRef);

  const notes = [];

  // const dataNueva = docs.map((item) => ({ id: item.id, ...item.data() })); //otro ejemplo

  docs.forEach((item) => notes.push({ id: item.id, ...item.data() }));

  return notes;
};
