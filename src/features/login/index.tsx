import React, { useEffect } from 'react';

import { signInWithGoogle, auth } from '@/features/authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';

function Login() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/');
  }, [user, loading]);
  return (
    <div>
      <button onClick={signInWithGoogle}>Login with google</button>
    </div>
  );
}

export default Login;
