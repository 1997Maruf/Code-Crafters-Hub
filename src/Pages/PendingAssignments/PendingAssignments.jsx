import { useLoaderData } from "react-router-dom";
import PendingCard from "./PendingCard";

const PendingAssignments = () => {
  const PendingAssignment = useLoaderData();

  return (
    <div className="">
      <h2 className="text-5xl font-bold text-center mt-20">Pending Assignment</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-26 lg:mx-24 md:mx-44 sm:mx-32 mt-20">
        {PendingAssignment.map((assignment) => (
          <PendingCard
            key={assignment._id}
            assignment={assignment}
          ></PendingCard>
        ))}
      </div>
    </div>
  );
};

export default PendingAssignments;
