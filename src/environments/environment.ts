// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
