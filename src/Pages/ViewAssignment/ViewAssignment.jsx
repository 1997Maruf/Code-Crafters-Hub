import { useLoaderData } from "react-router-dom";

const ViewAssignment = () => {
  const assignment = useLoaderData();
  console.log(assignment);
  const { title, description, marks, date, thumbnailImageUrl, difficulty } =
    assignment;
  return (
    <div className=" mt-20 radu">
      <div className=" shadow-lg w-10/12 mx-auto shadow-black p-10">
      <img src={thumbnailImageUrl} alt="" />
      <div>
        <h2 className="text-4xl font-bold my-10">{title}</h2>
        <p className="text-xl mb-3">{description}</p>
        <p className="text-xl mb-3">
          <span className="font-bold">Marks :</span> {marks}
        </p>
        <p className="text-xl mb-3">
          <span className="font-bold">Difficulty : </span> {difficulty}
        </p>
        <p className="text-xl mb-3">
          <span className="font-bold">date :</span> {date}
        </p>
      </div>
      </div>
    </div>
  );
};

export default ViewAssignment;
