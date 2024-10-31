import './App.css'
import ReusebleForm from './components/ReusebleForm/ReusebleForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StaetFullForm from './components/StateFullForm/StaetFullForm'


function App() {

  const handleSingUpSubmit = data => {
    console.log("Sing UP Submit", data);

  }
  const handleProfileUpdateSubmit = data => {
    console.log("profile update", data);

  }

  return (
    <>
      <h1 className='font-bold text-5xl text-center my-10'>Form Components</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StaetFullForm></StaetFullForm> */}
      {/* <RefForm></RefForm> */}

      {/* <HookForm></HookForm> */}
      <ReusebleForm formTite={'Sing UP'} handleSubmit={handleSingUpSubmit}>
        <div>
          <h1>Sing Up</h1>
          <p>plase Sing up </p>
        </div>
      </ReusebleForm>
      <ReusebleForm submitBtnText={"Update"} formTite={'Profile Update'} handleSubmit={handleProfileUpdateSubmit}>
        <div>
          <h1>Profile Update</h1>
          <p>plase profile Update </p>
        </div>
      </ReusebleForm>
    </>
  )
}

export default App
