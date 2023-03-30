import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import './App.scss';
import { auth } from './features/authentication/firebase';
import router from './routers/router';
import store, { useAppDispatch } from './store/store';

import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/features/authentication/firebase';
import { loginSuccess } from './store/common/authSlice';

function App() {
  // const [user, loading, error] = useAuthState(auth);
  // const [name, setName] = useState('');
  // // const navigate = useNavigate();

  // const dispatch = useAppDispatch();

  // const fetchUserName = async () => {
  //   if (!user?.uid) return;
  //   try {
  //     const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();

  //     setName(data.name);

  //     dispatch(loginSuccess(data));
  //   } catch (err) {
  //     console.error(err);
  //     //   alert("An error occured while fetching user data");
  //   }
  // };

  // useEffect(() => {
  //   if (loading) return;
  //   fetchUserName();
  // }, [user, loading]);

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) {
  //     // window.location.href = '/login';
  //   }
  //   // fetchUserName();
  // }, [user, loading]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
