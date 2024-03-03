import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKLBQOdFVANH-8FJu_X81FAv4cPzbrbxw",
  authDomain: "sticker-2d03b.firebaseapp.com",
  projectId: "sticker-2d03b",
  storageBucket: "sticker-2d03b.appspot.com",
  messagingSenderId: "923728722788",
  appId: "1:923728722788:web:42f80b212aa3cbad6c5871",
  measurementId: "G-LK3MLS5EVD"
};


const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
// export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null)

// let app; let analytics; let storage;
// if(typeof window != "undefined"){
//   app = initializeApp(firebaseConfig);
//   storage = getStorage(app);
//   analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
// }
// export {app, analytics, storage}


// let analytics; let storage;
// if (firebaseConfig?.projectId) {
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   if (app.name && typeof window !== 'undefined') {
//     analytics = getAnalytics(app);
//   }
//   storage = getStorage(app);
// }

// export {analytics, storage};