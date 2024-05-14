
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
// import { useState } from "react";


const Assignments = () => {
    const assignment = useLoaderData();
    // console.log(assignment);
    // const {assignments, setAssignments} = useState(LodedAssignment);

    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 sm:mx-10 lg:mx-32 mt-20">
         {
            assignment.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
           }
         </div> 
        </div>
    );
};

export default Assignments;