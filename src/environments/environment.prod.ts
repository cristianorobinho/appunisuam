
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
production: true,
apiKey: "AIzaSyC7E4Cja89Zmwiag6WVvqEsitKvBhl2WP4",
  authDomain: "crud-ionic-d713b.firebaseapp.com",
  databaseURL: "https://crud-ionic-d713b-default-rtdb.firebaseio.com",
  projectId: "crud-ionic-d713b",
  storageBucket: "crud-ionic-d713b.appspot.com",
  messagingSenderId: "555520634447",
  appId: "1:555520634447:web:e820554329670f4c35c43a"
};
const app = initializeApp(environment);
const analytics = getAnalytics(app);

