'use client';
import Link from 'next/link';
import Typhography from '../Components/Typhography/Typhography';
import { TyphographyEnum } from '../Enums/Typhography.enum';
import styles from './page.module.scss';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { LoginPropsInterface } from './login-props.interface/login-props.interface';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginPropsInterface>();



  const onSubmit = (data: LoginPropsInterface) => {
    
    if (rememberMe) {
      localStorage.setItem('email', data.email);
      localStorage.setItem('password', data.password);
    }

    localStorage.setItem('userToken', 'someToken');
    setLoggedIn(true);
        router.push('/')

  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setLoggedIn(true);
    }

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail) {
      setValue('email', savedEmail);
    }

    if (savedPassword) {
      setValue('password', savedPassword);
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.fullscreenContainer}>
        <div className={styles.loginHeader}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <Typhography children="Log in" type={TyphographyEnum.HeadingTwo} />
        </div>
        <form className={styles.loginInfo} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.loginInputs}>
            <div className={styles.inputContainer}>
              <Typhography children="Email" type={TyphographyEnum.BodyFour} />
              <input
                type="text"
                placeholder="Email"
                className={errors.email ? styles.erroredInput : styles.input}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                  },
                })}
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email.message}</span>
              )}
            </div>
            <div className={styles.inputContainer}>
              <Typhography
                children="Password"
                type={TyphographyEnum.BodyFour}
              />
              <input
                type="password"
                className={errors.password ? styles.erroredInput : styles.input}
                placeholder="Password"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                  minLength: {
                    value: 8,
                    message: 'Password min length is 8 characters',
                  },
                })}
              />
              {errors.password && (
                <span className={styles.errorText}>
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          <div className={styles.loginAccess}>
            <div className={styles.remembermeContainer}>
              <div className={styles.rememberme}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                />
                <Typhography
                  children="Remember me"
                  type={TyphographyEnum.BodyFour}
                />
              </div>
              <Link href="/register" className={styles.link}>
                Create account
              </Link>
            </div>
            <input type="submit" value="Log in" className={styles.submit} />
          </div>
        </form>
      </div>
      <div className={styles.characterBg}>
        <Image
          src="/rerobg.png"
          alt="rerobg"
          width={1000}
          height={100}
          className={styles.rero}
        />
      </div>
    </div>
  );
};

export default Login;
