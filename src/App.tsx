import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/BananaCraftSpec-logo.svg';
import AircraftForm from "../components/AircraftForm/AircraftForm.tsx";

function App() {

  return (
    <>
      <div className={"row logo-container"}>
        <img className={"logo-img"} src={logo} alt={"BananaCraft Spec logo"}/>
      </div>
        <AircraftForm />
    </>
  )
}

export default App
