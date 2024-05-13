import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";


const PrivateRoute = ( {children}) => {
    const {user} = UseAuth();
    const location = useLocation();
    console.log(location)

    if(!user){
        return <Navigate to='/login' state={location?.pathname || "/"}></Navigate>
    }
    return (
      <div><div>
      {children}
   </div></div>
    );
};

export default PrivateRoute;