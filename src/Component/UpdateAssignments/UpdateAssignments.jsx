import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateAssignments = () => {
    const assignment = useLoaderData();
    const { title, description, marks, thumbnailImageUrl, difficulty, _id } = assignment;
    const handleUpdateAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const difficulty = form.difficulty.value;
        const thumbnailImageUrl = form.thumbnailImageUrl.value;
        const description = form.description.value;

        const updateAssignment = {title, marks, difficulty, thumbnailImageUrl, description}
//   console.log(newAssignment);
        //send data to the server
        fetch(`https://code-crafter-hub-serveer.vercel.app/assignment/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateAssignment )
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
      
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update : {title}</h2>
        <form onSubmit={ handleUpdateAssignment}>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" defaultValue={title} placeholder="title" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Marks</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="marks" defaultValue={marks}  placeholder="marks" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">thumbnail Image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="thumbnailImageUrl" defaultValue={thumbnailImageUrl} placeholder="thumbnail Image URL" className="input input-bordered -ml-4 w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                  <select className="py-3 mt-8 pl-2" id="difficulty" name="difficulty" defaultValue={difficulty}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                
            </div>
            
            
            {/* form difficulty level */}
                
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">description </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" defaultValue={description}  placeholder="description " className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Update Assignment" className="btn btn-block" />

        </form>
    </div>
    );
};

export default UpdateAssignments;