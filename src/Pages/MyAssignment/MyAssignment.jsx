import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MyAssignment = () => {
    const {user} = useContext(AuthContext);
    const [submit, setSubmit] = useState([]);
    const url = `http://localhost:5000/submitAssignment?email=${user.email}`;
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyAssignment;