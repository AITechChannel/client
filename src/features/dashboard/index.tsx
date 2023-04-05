import { useState } from 'react';
import MainLayout from '../../components/layouts/main-layout';
import Modal from '../../components/ui/modal';
import Select from '../../components/ui/multi-select';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { dashboardSlice, selectCount } from './redux/slice';
import { theme, toggleTheme } from '../../store/common/themeSlice';
import Switch from '@/components/ui/switch';
import IconLightDark from '@/components/ui/icons/IconLightDark';
import Dropdown from '@/components/ui/drop-down';

import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Provider } from 'react-redux';
import { RouterProvider, useNavigate } from 'react-router';
// import './Dashboard.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '@/features/auth/firebase';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<0 | 1>(0);
  const value = useAppSelector(theme);

  const dispatch = useAppDispatch();

  const onChangeSwitch = () => {
    dispatch(toggleTheme());
  };

  const items = [
    { id: 1, label: ' Label 1' },
    { id: 2, label: ' Label 2' },
    { id: 3, label: ' Label 3' }
  ];

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const fetchUserName = async () => {
    if (!user?.uid) return;
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      doc.docs[0].data();
    } catch (err) {
      console.error(err);
      //   alert("An error occured while fetching user data");
    }
  };

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return navigate('/login');

  //   fetchUserName();
  //   'dfsdf');
  // }, [user, loading]);

  return (
    <MainLayout>
      <p>This is select component</p>
      {/* <Select items={items} onChange={(e) => e)} /> */}
      <Modal
        title='This is title'
        onCancel={() => setShowModal(false)}
        onOK={() => setShowModal(false)}
        visible={showModal}
      >
        <p>This is content modal</p>
      </Modal>

      {/* <Dropdown items={items} /> */}
      <div>
        <div>sdfsdfsd</div>
      </div>

      <button onClick={() => setShowModal(!showModal)}>showModal</button>

      <Switch
        status={status}
        onChange={onChangeSwitch}
        icon={<IconLightDark />}
      />
    </MainLayout>
  );
}

export default Home;
