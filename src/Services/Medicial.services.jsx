import { db } from "../Firebase/Firebase.config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const medicalCollectionRef = collection(db, "Medical");
class medicalDataService {
  addMedical = (newMedical) => {
    return addDoc(medicalCollectionRef, newMedical);
  };
  updateMedical = (id, updateMedical) => {
    const medicalDoc = doc(db, "Medical", id);
    return updateDoc(medicalDoc, updateMedical);
  };

  deleteMedical = (id) => {
    const medicalDoc = doc(db, "Medical", id);
    return deleteDoc(medicalDoc);
  };
  getAllmedical = () => {
    return getDocs(medicalCollectionRef);
  };

  getMedicial = (id) => {
    const medicalDoc = doc(db, "Medical", id);
    return getDoc (medicalDoc);
  };
}

export default new medicalDataService();
