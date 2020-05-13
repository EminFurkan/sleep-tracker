// import React from 'react';
// import { useAuthValue } from '../context/auth';
// import { Route, Redirect } from 'react-router-dom';

// export const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuthValue();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !isAuthenticated ? (
//           <Redirect to="/login" />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };
