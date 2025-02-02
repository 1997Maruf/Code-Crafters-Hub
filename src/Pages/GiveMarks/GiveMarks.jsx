import { useLoaderData } from "react-router-dom";



const GiveMarks = () => {
    const marks = useLoaderData();
    const {link, note} = marks;
    console.log(marks)
    const handelSubmission = (event) => {
        event.preventDefault();
        const form = event.target;
        const mark = form.mark.value;
        const feedback = form.feedback.value;
        
       
        const order = {
          mark : mark,
          feedback: feedback
        }
      console.log(order);
      
      fetch('https://code-crafter-hub-serveer.vercel.app/feetback', {
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
        <div className="h-screen">
         <div className="border-2 w-1/3  border-gray-500 ml-48 mt-28">
         <h2 className="text-xl font-bold ">pdf/docs link : {link}</h2>
          <h2 className="text-xl font-bold ">Notes : {note}</h2>
         </div>
           
            <div>
           <form onSubmit={ handelSubmission} className="mx-[10%] mt-16">
                 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Marks</span>
                </label>
                <input
                  type="text"
                  name="mark"
                  placeholder="Marks"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Feedback</span>
                </label>
                <input
                  type="text"
                  name="feedback"
                  placeholder="Feedback"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
              
                <input className="btn btn-primary" type="submit" value="Submit" />
              </div>
            </form>
            </div>
        </div>
    );
};

export default GiveMarks;