import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsyK8n44SVAEUOHOk2Eoe7M5SZkPfYJoA",
  authDomain: "medical-pro-59614.firebaseapp.com",
  projectId: "medical-pro-59614",
  storageBucket: "medical-pro-59614.appspot.com",
  messagingSenderId: "136946217180",
  appId: "1:136946217180:web:14ebf6d91df72683d9c419",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
