const ReusebleForm = ({ formTite, handleSubmit, submitBtnText = "Submit", children }) => {
    const handleLocalSubmit = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }

    return (
        <div className="flex flex-row justify-center my-16 ">
            <form onSubmit={handleLocalSubmit} className="border p-20 bg-green-100">
                <h2 className="my-5 font-semibold text-2xl text-center">{children}</h2>
                <input className="border my-2 p-2 rounded" name="name" type="name" placeholder="Enter Your Name" />
                <br />
                <input className="border my-2 p-2 rounded" type="email" name="email" placeholder="Enter Your Name" />
                <br />
                <input className="border my-2 p-2 rounded" type="password" name="password" placeholder="Enter Your password" />
                <br />
                <input className="border my-2 p-2 rounded" type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusebleForm;