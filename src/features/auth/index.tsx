import Button from '@/components/ui/button';
import { auth, signInWithGoogle } from '@/features/auth/firebase';
import { EMAIL_REGEX } from '@/utils/constant';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import useAuth from './hooks/useAuth';
import styles from './style.module.scss';

function Login() {
  const [user, loading, error] = useAuthState(auth);
  const {
    login,
    register,
    fetchUserFirebase,
    readyLogin,
    loggedIn,
    userFirebaseInfo
  } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) return;
    navigate('/notes');
  }, [loggedIn]);

  const validate = (values: any) => {
    const errors: any = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (EMAIL_REGEX.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  const initialValues = {
    email: '',
    password: ''
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validate,
    onSubmit: (values) => {
      login(values);
    }
  });

  useEffect(() => {
    if (loading || !user?.uid) return;
    fetchUserFirebase(user?.uid);
  }, [user]);

  useEffect(() => {
    if (!userFirebaseInfo) return;
    const { name, email, uid } = userFirebaseInfo;
    register({ username: name, email, password: uid });
  }, [userFirebaseInfo]);

  useEffect(() => {
    if (!readyLogin) return;
    login({ email: userFirebaseInfo.email, password: userFirebaseInfo.uid });
  }, [readyLogin, userFirebaseInfo]);

  return (
    <div className={`${styles['login-wrapper']} theme-dark`}>
      <form onSubmit={formik.handleSubmit}>
        <label className={styles.item} htmlFor='email'>
          <span>Email</span>
          <input
            className={`input-primary ${
              formik.errors.email ? styles['field-error'] : ''
            }`}
            type='text'
            id='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder='Input your email'
          />
          {formik.errors.email && (
            <span className={styles['msg-error']}>{formik.errors.email}</span>
          )}
        </label>
        <label className={styles.item} htmlFor='password'>
          <span>Password</span>
          <input
            className={`input-primary ${
              formik.errors.email ? styles['field-error'] : ''
            }`}
            type='password'
            id='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder='Input your password'
          />
          {formik.errors.password && (
            <span className={styles['msg-error']}>
              {formik.errors.password}
            </span>
          )}
        </label>

        <Button htmltype='submit'>Login</Button>
        <Button
          onClick={(e) => {
            e.preventDefault(), signInWithGoogle();
          }}
        >
          Login with google
        </Button>
      </form>
    </div>
  );
}

export default Login;
