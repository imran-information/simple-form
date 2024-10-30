import { useState } from "react";

const StaetFullForm = () => {
    const [text, setText] = useState(null)
    console.log(text);

    const handleStateFullForm = e => {
        e.preventDefault();
    }
    const handleEmailValue = e => {
        setText(e.target.value)
    }
    return (
        <div className="flex flex-row justify-center my-16 ">
            <form onSubmit={handleStateFullForm} className="border p-20 bg-green-100">
                <input onChange={handleEmailValue} className="border my-2 p-2 rounded" name="text" type="text" placeholder="Enter Your Name" />
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

export default StaetFullForm;