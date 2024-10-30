const SimpleForm = () => {
    const handleSimpleForm = e => {
        e.preventDefault()
        const text = e.target.text.value
        const email = e.target.email.value
        const phone = e.target.number.value
        console.log(text, email, phone);

    }
    return (
        <div className="flex flex-row justify-center my-16 ">
            <form onSubmit={handleSimpleForm} className="border p-20 bg-green-100">
                <input className="border my-2 p-2 rounded" name="text" type="text" placeholder="Enter Your Name" />
                <br />
                <input className="border my-2 p-2 rounded" type="email" name="email" placeholder="Enter Your Name" />
                <br />
                <input className="border my-2 p-2 rounded" type="number" name="number" placeholder="Enter Your number" />
                <br />
                <input className="border my-2 p-2 rounded" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;