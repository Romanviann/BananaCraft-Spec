import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/images/BananaCraftSpec-logo.svg';
import AircraftForm from "../components/AircraftForm/AircraftForm.tsx";
import Footer from "../components/Footer/Footer.tsx";

function App() {

  return (
      <>
          <div className={"row logo-container"}>
              <img className={"logo-img"} src={logo} alt={"BananaCraft Spec logo"}/>
          </div>
          <AircraftForm/>
          <Footer/>
      </>
  )
}

export default App
