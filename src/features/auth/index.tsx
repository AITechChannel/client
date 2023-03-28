import { useAuthState } from 'react-firebase-hooks/auth';
import { redirect, useNavigate } from 'react-router';
import { auth } from '@/firebase';
import { useEffect } from 'react';

function Auth() {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate('/login');
    }
    // fetchUserName();
  }, [user, loading]);

  return <div>Auth</div>;
}

export default Auth;
