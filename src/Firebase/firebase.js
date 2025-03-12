import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCtcHqPh7_Z84HvanVG96m0jNHMogXIkxI',
  authDomain: 'job-prep-5fd56.firebaseapp.com',
  projectId: 'job-prep-5fd56',
  storageBucket: 'job-prep-5fd56.appspot.com',
  messagingSenderId: '978214419963',
  appId: '1:978214419963:web:54619d6cc44e088e585f5e',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
