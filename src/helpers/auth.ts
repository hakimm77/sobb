import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { saveData } from "./AsyncStorageFuncs";
import * as Updates from "expo-updates";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const signupCompany = async (
  email: string,
  password: string,
  companyName: string,
  employer: string
) => {
  createUserWithEmailAndPassword(auth, email.trim(), password.trim())
    .then(async (data) => {
      await setDoc(doc(db, `/company/${data.user.uid}`), {
        personalInfo: {
          companyName: companyName,
          employer: employer,
          id: data.user.uid,
          type: "company",
        },
      });

      await saveData("USER", data.user.uid);
      await saveData("TYPE", "company");
      await Updates.reloadAsync();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signupWorker = (
  email: string,
  password: string,
  name: string,
  afterName: string,
  age: string,
  previousJobs: string,
  about: string,
  workTime: string,
  setErr: any,
  setLoading: any
) => {
  createUserWithEmailAndPassword(auth, email.trim(), password.trim())
    .then(async (data) => {
      setLoading(false);
      setDoc(doc(db, `/worker/${data.user.uid}`), {
        personalInfo: {
          name: name,
          afterName: afterName,
          age: age,
          previousJobs: previousJobs,
          about: about,
          workTime: workTime,
          id: data.user.uid,
          profilePic:
            "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png",
          type: "worker",
        },
      });

      await saveData("USER", data.user.uid);
      await saveData("TYPE", "worker");
      await Updates.reloadAsync();
    })
    .catch((err) => {
      setLoading(false);
      setErr(err.code);
      console.log(err);
    });
};

export const login = async (
  type: string,
  email: string,
  password: string,
  setErr: any,
  setLoading: any
) => {
  setLoading(true);

  signInWithEmailAndPassword(auth, email.trim(), password.trim())
    .then(async (data) => {
      setLoading(false);

      await saveData("USER", data.user.uid);
      await saveData("TYPE", type);
      await Updates.reloadAsync();
    })
    .catch((err) => {
      setLoading(false);
      setErr(err.message);
    });
};

export const createAd = async (
  userID: string,
  branch: string,
  age: string,
  description: string,
  question1: string,
  question2: string,
  question3: string,
  question4: string,
  name: string,
  plats: string
) => {
  await setDoc(doc(db, `/company/${userID}/ad`), {
    //fixxxx
    branch: branch,
    age: age,
    description: description,
    question1: question1,
    question2: question2,
    question3: question3,
    question4: question4,
    plats: plats,
    id: userID,
    name: name,
  });

  await saveData("COMPANY_AD", "true");
  await Updates.reloadAsync();
};
