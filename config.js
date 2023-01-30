import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwBOpgulOM5YBTLQ_3kFyD7YfhAqYeYLY",
  authDomain: "attendance-app-a0099.firebaseapp.com",
  databaseURL: "https://attendance-app-a0099-default-rtdb.firebaseio.com",
  projectId: "attendance-app-a0099",
  storageBucket: "attendance-app-a0099.appspot.com",
  messagingSenderId: "661218025680",
  appId: "1:661218025680:web:62f9c620a64a5cd0033ed5"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.database()

 

  