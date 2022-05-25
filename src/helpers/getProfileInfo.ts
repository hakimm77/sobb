import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const getProfileInfo = async (setUserInfo: any, id: string | null) => {
  getDoc(doc(db, `/worker/${id}`)).then((snapchot: any) => {
    setUserInfo(snapchot.data().personalInfo);
  });
};

export const getChat = (setCompanies: any, setLoading: any) => {
  setCompanies([]);

  getDoc(doc(db, "/company/766IYQe6HdWVz2jNKwucQs4qR5w1")).then(
    async (snapchot: any) => {
      console.log(snapchot.data().ad);
      setCompanies((p: any) => [...p, snapchot.data().ad]);
      setLoading(false);
    }
  );
};
