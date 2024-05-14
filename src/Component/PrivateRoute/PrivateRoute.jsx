import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const PrivateRoute = ( {children}) => {
const {user, loading} = useContext(AuthContext);
   

if(loading){
    return <progress className="progress w-56"></progress>;
}

if(user?.email){
    return children;
}

    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;