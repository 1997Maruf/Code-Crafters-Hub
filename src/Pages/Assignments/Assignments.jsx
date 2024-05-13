
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";


const Assignments = () => {
    const assignments = useLoaderData();
   
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 sm:mx-10 lg:mx-32 mt-20">
         {
            assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} ></AssignmentCard>)
           }
         </div> 
        </div>
    );
};

export default Assignments;