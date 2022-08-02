import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAB3Sdt55NWsrcv_0lDiEs7Kljsgy1W3Bc",
  authDomain: "medical-25b20.firebaseapp.com",
  databaseURL: "https://medical-25b20-default-rtdb.firebaseio.com",
  projectId: "medical-25b20",
  storageBucket: "medical-25b20.appspot.com",
  messagingSenderId: "423388366839",
  appId: "1:423388366839:web:e987a67b169c860b0190f2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
