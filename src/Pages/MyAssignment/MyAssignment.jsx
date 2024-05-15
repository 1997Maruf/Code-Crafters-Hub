import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import TabilRow from "./TabilRow";

const MyAssignment = () => {
  const { user } = useContext(AuthContext);
  const [submits, setSubmits] = useState([]);
  const url = `http://localhost:5000/submitAssignment?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSubmits(data));
  }, []);
  return (
    <div className="overflow-x-auto h-screen">
      <table className="table mt-20">
        {/* head */}
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {submits.map((submit) => (
            <TabilRow key={submit._id} submit={submit}></TabilRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAssignment;
