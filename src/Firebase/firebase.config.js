
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.firebaseConfigVITE_APPID,
// };

// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSav9RwQdrhn257Dj1lDialjpMvJ_EwSM",
  authDomain: "milk-management-952c5.firebaseapp.com",
  projectId: "milk-management-952c5",
  storageBucket: "milk-management-952c5.appspot.com",
  messagingSenderId: "109423001558",
  appId: "1:109423001558:web:294fb61e310f64e5276e77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);