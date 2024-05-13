
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";


const Assignments = () => {
    const LodeteAssignment = useLoaderData();
    const [assignments, setAssignments] = useState(LodeteAssignment);

    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 sm:mx-10 lg:mx-32 mt-20">
         {
            assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} assignments={assignments} setAssignments={setAssignments}></AssignmentCard>)
           }
         </div> 
        </div>
    );
};

export default Assignments;