import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCtcHqPh7_Z84HvanVG96m0jNHMogXIkxI',
  authDomain: 'job-prep-5fd56.firebaseapp.com',
  projectId: 'job-prep-5fd56',
  storageBucket: 'job-prep-5fd56.appspot.com',
  messagingSenderId: '1070000000000',
  appId: '1:1070000000000:web:0000000000000000000000',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
