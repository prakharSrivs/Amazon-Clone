import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBKRAoBoiUiUJ5WuYbGfp4cOFQtZbXvYPM",
    authDomain: "fir-2b1f6.firebaseapp.com",
    projectId: "fir-2b1f6",
    storageBucket: "fir-2b1f6.appspot.com",
    messagingSenderId: "339456057544",
    appId: "1:339456057544:web:c30faaa477f5138ee805fd",
    measurementId: "G-34N3WJZD14"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
const db=firebase.firestore();
const auth=firebase.auth();

export { db,auth };