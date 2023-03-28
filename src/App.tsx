import { useAuthState } from 'react-firebase-hooks/auth';
import { Provider } from 'react-redux';
import { redirect, Route, RouterProvider, Routes } from 'react-router';
import './App.scss';
import router from './routers/router';
import store from './store/store';
// import './Dashboard.css'
import Login from './features/login';
import { auth } from './firebase';
import { useEffect } from 'react';
import Auth from './features/auth';

function App() {
  const [user, loading, error] = useAuthState(auth);
  // const [name, setName] = useState('');
  // const navigate = useNavigate();

  // const fetchUserName = async () => {
  //   if (!user?.uid) return;
  //   try {
  //     const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     console.log('🚀 ::::: fetchUserName ::::: data', data);
  //     setName(data.name);
  //     console.log(doc.docs[0].data());
  //   } catch (err) {
  //     console.error(err);
  //     //   alert("An error occured while fetching user data");
  //   }
  // };

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) {
  //     console.log('login');
  //     redirect('/login');
  //   }
  //   // fetchUserName();
  // }, [user, loading]);
  return (
    <Provider store={store}>
      {/* <Routes>
        <Route element={<Auth />} />
      </Routes> */}
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
