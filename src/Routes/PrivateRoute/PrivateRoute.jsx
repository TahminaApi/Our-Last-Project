import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children,loading }) => {

  const { user } = useContext(AuthContext);
  const location = useLocation()

  if(loading){
    return <p className='text-center text-5xl text-yellow-400'>Loading ..............</p>
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
