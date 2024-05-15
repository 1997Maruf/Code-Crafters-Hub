const FeatureSection = () => {
  return (
 <div>
     <div className="mx-20 md:mx-48 sm:mx-[130px] mt-28 mb-28 " >
        <h2 className="text-5xl font-bold text-center mb-24">Feature Section</h2>
      <div className="grid lg:grid-cols-4   grid-cols-1">
      <div className=" skeleton card w-96 md:mt-28  shadow-xl  bg-red-300">
      <div className=" bg-red-400 -mt-8 ml-2 rounded-full w-20 h-20 absolute"></div>
        <div className="card-body relative pt-20">
          <h2 className="card-title">Interactive Tutorials</h2>
          <p> Offer hands-on tutorials that allow users to practice coding directly within the website, making learning more engaging and effective.</p>
        </div>
      </div>
      <div className="skeleton card w-96 md:mt-28 sm:mt-28  shadow-xl bg-yellow-300">
      <div className=" bg-yellow-400 -mt-8 ml-2 rounded-full w-20 h-20 absolute"></div>
        <div className="card-body relative pt-20">
          <h2 className="card-title">Project Showcase</h2>
          <p> Highlight completed projects or assignments from learners to inspire others and showcase their skills.</p>
        </div>
      </div>
      <div className="skeleton card w-96 md:mt-28 sm:mt-28 shadow-xl bg-amber-300">
      <div className=" bg-amber-400 -mt-8 ml-2 rounded-full w-20 h-20 absolute"></div>
        <div className="card-body relative pt-20">
          <h2 className="card-title">Progress Tracking</h2>
          <p>  Implement a feature that allows users to track their progress through courses and modules, providing motivation and a sense of accomplishment.</p>
        </div>
      </div>
      <div className="skeleton card w-96 md:mt-28 sm:mt-28 shadow-xl bg-orange-300">
      <div className=" bg-orange-400 -mt-8 ml-2 rounded-full w-20 h-20 absolute"></div>
        <div className="card-body relative pt-20">
          <h2 className="card-title">Code Playground</h2>
          <p>  Include a sandbox environment where users can experiment with code snippets in various programming languages, fostering experimentation and exploration.</p>
        </div>
      </div>
      </div>
    </div>
    <div className="mx-20 mt-28 md:mx-48 sm:mx-[130px] mb-28" >
        
      <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1">
      <div className=" skeleton card w-96   shadow-xl  bg-lime-300">
      <div className=" bg-lime-400 -mt-8 ml-2 rounded-full w-20 h-20 absolute"></div>
        <div className="card-body relative pt-20">
          <h2 className="card-title">Live Coding Sessions</h2>
          <p> Organize live coding sessions or webinars where experienced developers can demonstrate coding techniques and answer questions in real-time.</p>
        </div>
      </div>
      <div className="skeleton card w-96 md:mt-28 sm:mt-28 shadow-xl bg-green-300">
      <div className=" bg-green-400 -mt-8 ml-2 rounded-full w-20 h-20 absolute"></div>
        <div className="card-body relative pt-20">
          <h2 className="card-title">Discussion Forums</h2>
          <p> Create a community forum where learners can ask questions, share insights, and collaborate with each other and with instructors.</p>
        </div>
      </div>
      <div className="skeleton card w-96 md:mt-28 sm:mt-28 shadow-xl bg-emerald-300">
      <div className=" bg-emerald-400 -mt-8 ml-2 rounded-full w-20 h-20 absolute"></div>
        <div className="card-body relative pt-20">
          <h2 className="card-title">Personalized Learning Paths</h2>
          <p>Offer personalized learning paths based on users interests, skill levels, and career goals, guiding them through the most relevant courses and resources.</p>
        </div>
      </div>
      <div className="skeleton card w-96 md:mt-28 sm:mt-28 shadow-xl bg-cyan-300">
      <div className=" bg-cyan-400 -mt-8 ml-2 rounded-full w-20 h-20 absolute"></div>
        <div className="card-body relative pt-20">
          <h2 className="card-title">Career Resources</h2>
          <p>Provide resources such as resume-building tips, interview preparation guides, and job search assistance to help learners transition into careers in web development.</p>
        </div>
      </div>
      </div>
    </div>
 </div>
  );
};

export default FeatureSection;
