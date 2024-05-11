import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {


 const authInpo = {}

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
