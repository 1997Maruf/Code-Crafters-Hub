
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
// import { useState } from "react";


const Assignments = () => {
    const assignment = useLoaderData();
    // console.log(assignment);
    // const {assignments, setAssignments} = useState(LodedAssignment);

    return (
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mt-24">Assignment</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-20 md:mx-44  sm:mx-32 mt-20">
         {
            assignment.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
           }
         </div> 
        </div>
    );
};

export default Assignments;