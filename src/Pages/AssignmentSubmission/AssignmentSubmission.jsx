import { useLoaderData } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";


const AssignmentSubmission = () => {
  const {user} = UseAuth({});
 
  
  const assignment = useLoaderData();
  const {title, marks} = assignment
    const handelSubmission = (event) => {
        event.preventDefault();
        const form = event.target;
        const link = form.link.value;
        const note = form.note.value;
        console.log(link, note);
       
        const order = {
          studentName : user.displayName,
          assignmentTitle: title,
          link,
          note,
          marks: marks
        }
      console.log(order);
      
      fetch('http://localhost:5000/submitAssignment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body:JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
      })

    }
  return (
    <div className="mt-28 h-screen">
      <h2 className="text-4xl font-bold text-center">Assignment Submission</h2>

   
         <form onSubmit={ handelSubmission} className="mx-[10%] mt-28">
          <h2 className="text-4xl font-bold mb-2">Assignment Name  : {title}</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PDF/doc link</span>
                </label>
                <input
                  type="text"
                  name="link"
                  placeholder="PDF/doc link"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quick note text</span>
                </label>
                <input
                  type="text"
                  name="note"
                  placeholder="quick note text"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
              
                <input className="btn btn-primary" type="submit" value="Submit" />
              </div>
            </form>
          </div>
       
  );
};

export default AssignmentSubmission;
