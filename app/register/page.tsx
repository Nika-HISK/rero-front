'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import BaseApi from '../api/BaseApi';
import styles from './page.module.scss';
import { RegisterPropsInterface } from './register-props.interaface/register-props.interface';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterPropsInterface>();

  const router = useRouter();

  const onRegisterFinish = (data: RegisterPropsInterface) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Password does not match',
      });
      return;
    }

    BaseApi.post('/auth/register', data)
      .then(() => {
        router.push('/login');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <h1>Registration</h1>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(onRegisterFinish)}
      >
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <input
              placeholder="Email"
              className={`${errors.email ? styles.inputError : styles.input}`}
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
              <div className={styles.errorDiv}>
                <Image src={'/error.webp'} alt="error" width={14} height={14} />
                <div>
                  <span className={styles.errors}>{errors.email.message}</span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              className={`${errors.password ? styles.inputError : styles.input}`}
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 8,
                  message: 'Min length is 8',
                },
              })}
            />
            {errors.password && (
              <div className={styles.errorDiv}>
                <Image src={'/error.webp'} alt="error" width={14} height={14} />
                <div>
                  <span className={styles.errors}>
                    {errors.password.message}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Confirm Password"
              className={`${errors.confirmPassword ? styles.inputError : styles.input}`}
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'Confirm Password is required',
                },
                minLength: {
                  value: 8,
                  message: 'Min length is 8',
                },
              })}
            />
            {errors.confirmPassword && (
              <div className={styles.errorDiv}>
                <Image src={'/error.webp'} alt="error" width={14} height={14} />
                <div>
                  <span className={styles.errors}>
                    {errors.confirmPassword.message}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.submitContainer}>
          <input type="submit" value={'Confirm'} />
        </div>
      </form>
      <p>
        Have an account? <Link href="/login">log in</Link>
      </p>
    </div>
  );
};

export default Register;
