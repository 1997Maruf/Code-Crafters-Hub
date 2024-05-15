import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="banne bg-no-repeat	bg-cover   bg-slate-400 mx-20  " >
          
        <div className="py-40 bg-gradient-to-r from-black">
          <div className="w-full ml-20">
            <h1 className="mb-5 text-6xl sm:text-4xl font-bold text-white">Hello there</h1>
            <p className="mb-5 text-white w-[60%]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to = '/assignment' className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    
    );
};

export default Banner;