

const Assignment = () => {
    
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const item = form.item.value;
        const sub = form.sub.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing.value;
        const stockStatus = form.stockStatus.value;
        const photo = form.photo.value;
        const description = form.description.value;
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add a Textile Arts CArd</h2>
        <form onSubmit={handleAddCoffee}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="User Name" className="input  w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="email" placeholder="User Email" className="input  w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">item_name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="item" placeholder="item_name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">subcategory_Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="sub" placeholder="subcategory_Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">customization</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="customization" placeholder="customization" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">processing_time</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="processing" placeholder="processing_time" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">stockStatus </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="stockStatus" placeholder="stockStatus " className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
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

export default Assignment;