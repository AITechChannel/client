import { auth, db } from '../firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from 'firebase/firestore';

const [user, loading, error] = useAuthState(auth);

export const fetchUserName = async () => {
  if (!user?.uid) return;
  try {
    const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    return data;
  } catch (err) {
    console.error(err);
    //   alert("An error occured while fetching user data");
  }
};
