
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

//import form the firebase app apikey
const firebaseConfig = {
  apiKey: "AIzaSyAFNebu9kT9roDeZd8TQk1T6kY0blAtxYk",
  authDomain: "eshop-cart-be801.firebaseapp.com",
  projectId: "eshop-cart-be801",
  storageBucket: "eshop-cart-be801.appspot.com",
  messagingSenderId: "507113447803",
  appId: "1:507113447803:web:e61e1887207465313d1dde"
};

//to connect the firebase app
const app = firebase.initializeApp(firebaseConfig)
//to connect the firestore DB
export const myDatabase = firebase.firestore()

//to connect authaction (google authaction)
//getAuth() this method will help us to connect the authaction whic is present fre base DB
export const auth = getAuth(app)
//GoogleAuthProvider is class is help to connect react app to google authcation
export const provider = new GoogleAuthProvider()

