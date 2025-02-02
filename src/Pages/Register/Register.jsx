import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

const {createUser} = useContext(AuthContext);

  const handelRegister = event => {
    event.preventDefault();
   const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log(error));
  };
  return (
   <div>
     <h1 className="text-5xl text-center font-bold mt-20 mb-14">Register now!</h1>
     <div className=" min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
         
        </div>
       
        <div className="ml-[580px] px-16 shrink-0 w-full  shadow-2xl bg-base-100 rounded-2xl">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mb-20 text-center">
            Already have an accound <Link to="/login" className="font-bold text-orange-600">Lohin</Link>
          </p>
        </div>
        </div>
      </div>
   </div>
    
  );
};

export default Register;
