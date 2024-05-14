import { Link } from "react-router-dom";

const PendingCard = ({ assignment }) => {
  const { marks, assignmentTitle, studentName, _id } = assignment;
  return (
    <div>
        
        <div className="card w-96 bg-slate-700 shadow-2xl shadow-slate-700 my-3">
      
      <div className="card-body items-center text-center">
        <h2 className="card-title text-1xl font-bold text-white">{assignmentTitle}</h2>
        <h2 className="card-title font-bold text-white">{studentName}</h2>
        <p className="text-xl font-extrabold text-white"> marks : {marks}</p>
        <div className="card-actions">
          <Link to={`/givemarks/${_id}`} className="btn border-2 hover:shadow-2xl mt-4	hover:shadow-slate-200 text-xl font-bold">Give mark</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PendingCard;
