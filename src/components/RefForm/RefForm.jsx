import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
    const emailRef = useRef(null)
    const paswoardRef = useRef(null)
    const nameRef = useRef(null);
    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(paswoardRef.current.value);
    }
    return (
        <div className="flex flex-row justify-center my-16 ">
            <form onSubmit={handleFormSubmit} className="border p-20 bg-green-100">
                <input ref={nameRef} className="border my-2 p-2 rounded" name="text" type="text" placeholder="Enter Your Name" />
                <br />
                <input ref={emailRef} className="border my-2 p-2 rounded" type="email" name="email" placeholder="Enter Your Name" />
                <br />
                <input ref={paswoardRef} className="border my-2 p-2 rounded" type="paswoard" name="number" placeholder="Enter Your number" />
                <br />
                <input className="border my-2 p-2 rounded" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;