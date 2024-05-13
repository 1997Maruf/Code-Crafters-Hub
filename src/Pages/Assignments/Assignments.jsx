import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";


const Assignments = () => {
    const assignment = useLoaderData();
    const [assignmentData, setAssignmentData] = useState(assignment);
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 sm:mx-10 lg:mx-32 mt-20">
         {
            assignment.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} ></AssignmentCard>)
           }
         </div> 
        </div>
    );
};

export default Assignments;