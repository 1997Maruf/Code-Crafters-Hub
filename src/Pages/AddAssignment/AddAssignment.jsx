
import Swal from 'sweetalert2'


const AddAssignment = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const difficulty = form.difficulty.value;
        const date = form.date.value;
        const thumbnailImageUrl = form.thumbnailImageUrl.value;
        const description = form.description.value;

        const newAssignment = {title, marks, difficulty, date, thumbnailImageUrl, description}
//   console.log(newAssignment);
        //send data to the server
        fetch('http://localhost:5000/assignment',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newAssignment )
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignm Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
      
    }
    return (
        <div className=" p-24">
        <h2 className="text-3xl font-extrabold">Add a Assignment</h2>
        <form onSubmit={handleAddCoffee}>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="title" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Marks</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="marks" placeholder="marks" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">thumbnail Image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="thumbnailImageUrl" placeholder="thumbnail Image URL" className="input input-bordered -ml-4 w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2 border-2xl">
                  <select className="py-3 mt-8 pl-2" id="difficulty" name="difficulty ">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                
            </div>
            
            <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="date" placeholder="Date" className="input input-bordered -ml-4 w-full" />
                    </label>
                </div>
            {/* form difficulty level */}
                
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">description </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="description " className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add" className="btn btn-block" />

        </form>
    </div>
    );
};

export default AddAssignment;