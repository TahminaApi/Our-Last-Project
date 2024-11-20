import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Signup = () => {
  // Location tracking---------
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  // error State - - - - Signup
  const [signUpError, setSignUpError] = useState('');

  // Get context ----
  const { createUser, updateUser } = useContext(AuthContext);

  // Protita field Thakae value collect ====== by register
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // HandleSignUp -------
  const handleSignUp = (data) => {
    setSignUpError('');
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        const updatingUser = {
          displayName: data.name,
        };
        updateUser(updatingUser)
          .then(() => {})
          .catch((error) => {
            setSignUpError(error.message);
          });
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center ">
        <div className="pt-10 mt-16">
          <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-slate-700 text-yellow-500 ">
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
              <h3 className="text-center text-3xl font-semibold">Sign Up</h3>

              {/* Name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <p className="text-orange-500">{errors.name.message}</p>
                )}
              </div>

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
                  <p className="text-orange-500">{errors.password.message}</p>
                )}
              </div>

              <div className="form-control mt-2">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-accent  btn-outline"
                />
              </div>

              {/* Signup error */}
              {signUpError && <p className="text-orange-500">{signUpError}</p>}

              <label className="text-center">
                <Link to="/login" className="lable-text-alt link link-hover">
                  Already have an account?
                  <span className=" text-primary">Please Login.</span>
                </Link>
              </label>
              <div className="divider">OR</div>
              <div className="form-control mt-1">
                <button className="btn btn-outline">
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

export default Signup;
