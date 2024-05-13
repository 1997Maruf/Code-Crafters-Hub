import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import UseAuth from "../../Hooks/UseAuth";


const Login = () => {
    const {signIn} = UseAuth({});
    const handelLOgin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
    }
    return (
        <div className="login bg-cover">
        <h2 className="text-5xl text-center font-bold mt-20 mb-14 text-white pt-10">Login now!</h2>
        <div className=" min-h-screen ">
         <div className="hero-content flex-col ">
          
          
           <div className="ml-[580px] px-16 shrink-0 w-full bg-g	  shadow-2xl rounded-2xl ">
             <form onSubmit={handelLOgin} className="card-body">
              
   
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input
                   type="email"
                   placeholder="email"
                   name="email"
                   className="input input-bordered"
                   required
                 />
               </div>
              
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input
                   type="password"
                   placeholder="password"
                   name="password"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control mt-6">
                 <button className="btn btn-primary">Login</button>
               </div>
             </form>
             <p className="mb-20 text-center">
               Already have an accound <Link to="/register" className="font-bold text-orange-600">Register</Link>
             </p>
           </div>
           </div>
         </div>
      </div>
    );
};

export default Login;