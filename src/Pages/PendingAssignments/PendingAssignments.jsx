import { useLoaderData } from "react-router-dom";
import PendingCard from "./PendingCard";

const PendingAssignments = () => {
  const PendingAssignment = useLoaderData();

  return (
    <div className="h-screen">
      <h2 className="text-5xl font-bold text-center mt-20">Pending Assignment</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 sm:mx-10 lg:mx-32 mt-20">
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
