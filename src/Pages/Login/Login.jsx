import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Login = () => {
  // Location tracking---------
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  // error State - - - - Login
  const [loginError, setLoginError] = useState('');

  // Context page =======
  const { signIn } = useContext(AuthContext);

  // Protita field Thakae value collect ====== by register
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Handlelogin------------
  const handleLogin = (data) => {
    setLoginError('');
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center ">
        <div className="pt-14">
          <div className="card w-full max-w-sm shrink-0  shadow-2xl mt-16 bg-slate-700 text-yellow-400">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body ">
              <h3 className="text-center text-3xl font-semibold">Login</h3>

              {/* Email-field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is not required' })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <p className="text-orange-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is Requred',
                    minLength: {
                      value: 6,
                      message: 'Pasword should be six carecter long',
                    },
                    pattern: {
                      value: /(?=.*?[A-Z])(?=.*?[0-9])/,
                      message:
                        'Password must have Upercase,Number and Specail carrecter',
                    },
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password && (
                  <p className="text-orange-500 ">{errors.password.message}</p>
                )}
              </div>

              <div className="form-control mt-2">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-accent  btn-outline"
                />
              </div>

              {/* Signup error */}
              {loginError && <p className="text-orange-500">{loginError}</p>}

              <label className="text-center">
                <Link to="/sign-up" className="lable-text-alt link link-hover">
                  New to website ??
                  <span> Create A new Account</span>
                </Link>
              </label>
              <div className="divider">OR</div>
              <div className="form-control mt-1">
                <button className="btn btn-outline ">
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
