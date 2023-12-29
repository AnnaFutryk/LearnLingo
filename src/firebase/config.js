// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { initializeAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8JosDVly0tAPr1uw0IScMDq34OgyUSCw",
  authDomain: "learn-lingo-2867b.firebaseapp.com",
  projectId: "learn-lingo-2867b",
  storageBucket: "learn-lingo-2867b.appspot.com",
  messagingSenderId: "563576899410",
  appId: "1:563576899410:web:22cac3a8dec842c2019c8b",
};

const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIRESTORE_STORAGE = getStorage(FIREBASE_APP);
