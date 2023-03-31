import React, { useEffect } from 'react';

import { signInWithGoogle, auth } from '@/features/auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import styles from './style.module.scss';
import { useFormik } from 'formik';
import Button from '@/components/ui/button';
import useAuth from './hooks/useAuth';
import { UserLogin } from './api/model';

function Login() {
  // const [user, loading, error] = useAuthState(auth);
  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }
  //   if (user) navigate('/');
  // }, [user, loading]);
  const navigate = useNavigate();

  const { login, logout, loggedIn } = useAuth();

  useEffect(() => {
    if (!loggedIn) return;
    navigate('/notes');
  }, [loggedIn]);

  const validate = (values: any) => {
    const errors: any = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  const initialValues = {
    email: 'dta.bk13@gmail.com',
    password: '123'
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validate,
    onSubmit: (values) => {
      login(values);
    }
  });

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
            type='text'
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
        <Button onClick={signInWithGoogle}>Login with google</Button>
      </form>
    </div>
  );
}

export default Login;
