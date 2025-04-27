import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/user/loginUserActions';
import { useHistory } from 'react-router-dom';
import './Sign-In.css';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data));
    if (loginUser.fulfilled.match(result)) {
      history.push('/');
    } else {
      console.log('Ошибка входа');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-in">
      <div className="sign-in__data">
        <div className="sign-in__text">Sign In</div>
        <div className="sign-in__email">
          Email address
          <input
            type="email"
            placeholder="Email address"
            {...register('email', { required: true })}
          />
          {errors.email && <p className="error">Email must be valid</p>}
        </div>
        <div className="sign-in__password">
          Password
          <input
            type="text"
            placeholder="Password"
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />
          {errors.password && <p className="error">Wrong password</p>}
        </div>
      </div>
      <div className="sign-in__create-acc">
        <button className="sign-in__create-acc-button">Login</button>
        <div className="sign-in__create-acc-info">
          <div className="sign-in__create-acc-info-text">
            Don’t have an account?
          </div>
          <span className="sign-in__create-acc-info-sign-up">Sign Up</span>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
