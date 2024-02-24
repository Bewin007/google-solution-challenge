import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDNSLC6rMSYYqzs66rc5AQ304b1gvke56s",
    authDomain: "solutions-b265b.firebaseapp.com",
    projectId: "solutions-b265b",
    storageBucket: "solutions-b265b.appspot.com",
    messagingSenderId: "369931201035",
    appId: "1:369931201035:web:68836d896aa9082832f50e",
    measurementId: "G-LVZ478Y4T9"
  };



// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }