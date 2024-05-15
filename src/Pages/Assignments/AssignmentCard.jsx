import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AssignmentCard = ({assignment, assignments, setAssignments}) => {
  const { title, description, marks, thumbnailImageUrl, difficulty, _id } = assignment;


const handleDelete = _id => {
console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`http://localhost:5000/assignment/${_id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
        Swal.fire(
             "Deleted!",
             "Your Assignment has been deleted.",
            "success"
          )  
          const remaining = assignments.filter(ass => ass._id !==_id);
          setAssignments(remaining);
      }
     
    })
  }
});
}

  return (
    <div className="card w-72 bg-base-100 shadow-xl  shadow-black mt-20 ">
      <figure>
        <img
          src={thumbnailImageUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex">
          <button onClick={() => handleDelete(_id)} className="btn border-t-indigo-600 py-1 px-2">Delete</button>
          <Link to={`/updateAssignment/${_id}`} className="btn border-t-indigo-600 py-1 px-2">Update</Link>
          <Link to={`/view/${_id}`} className="btn border-t-indigo-600 py-1 px-2">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
