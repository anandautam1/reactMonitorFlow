import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos");
export const todosRef = databaseRef.child("sensors");

export const flowTimeSeries = databaseRef.child("measurements").child("flow");
export const tempTimeSeries = databaseRef.child("measurements").child("temp");
export const waterTimeSeries = databaseRef.child("measurements").child("water");

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();