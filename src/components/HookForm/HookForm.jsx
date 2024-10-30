import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('null hooo');
    const emailState = useInputState('null hooo');

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log('custom hoked', emailState.value);

    }

    return (
        <div className="flex flex-row justify-center my-16 ">
            <form onSubmit={handleFormSubmit} className="border p-20 bg-green-100">
                {/* <input value={name} onChange={handleNameChange} className="border my-2 p-2 rounded" name="text" type="text" placeholder="Enter Your Name" /> */}
                <br />
                <input {...emailState} className="border my-2 p-2 rounded" type="email" name="email" placeholder="Enter Your Name" />
                <br />
                <input className="border my-2 p-2 rounded" type="password" name="password" placeholder="Enter Your number" />
                <br />
                <input className="border my-2 p-2 rounded" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;