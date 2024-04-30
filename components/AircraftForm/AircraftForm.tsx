import "./AirCraftForm.css"
import SpecModal from "../SpecModal/SpecModal.tsx";
import {useState} from "react";
import aircraft from "../../data/aircraft.json";
import ISpecProps from "../SpecModal/ISpecProps.ts"
import ErrorToast from "../ErrorToast/ErrorToast.tsx";

export default function AircraftForm() {
    const [aircraftSpecs, setAircraftSpecs] = useState<ISpecProps>({});
    const [aircraftFound, setAircraftFound] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);

    function findAircraft(e?: { preventDefault: () => void; target: any; }) {
        if (!e) {
            const randomIndex: number = Math.floor(Math.random() * aircraft.length);
            setAircraftFound(true);
            return setAircraftSpecs(aircraft[randomIndex]);
        }

        e.preventDefault();
        const {manufacturer, model} = Object.fromEntries(new FormData(e.target).entries());

        const regex = new RegExp(`${manufacturer} ${model}`, 'i');
        const filteredAircraft = aircraft.filter((aircraft) => regex.test(aircraft.Model_FAA));

        if (filteredAircraft.length > 0) {
            filteredAircraft.sort((a, b) => a.Model_FAA.length - b.Model_FAA.length);
            setAircraftSpecs(filteredAircraft[0]);
            setAircraftFound(true);
        } else {
            setShowError(true);
        }
    }

    return (
        <>
            <ErrorToast setShowError={setShowError} showError={showError}/>

            <form onSubmit={findAircraft}>
                <div className={"row form-container"}>
                    <div className={"col-12 mb-4 col-sm-6 col-md-4 col-lg-3"}>
                        <input required={true} name={"manufacturer"} aria-label={"Manufacturer"} maxLength={30}
                               placeholder={"Airbus"}
                               className={"form-control"}/>
                    </div>
                    <div className={"col-12 mb-4 col-sm-6 col-md-4 col-lg-3"}>
                        <input required={true} name={"model"} aria-label={"Model"} maxLength={50}
                               placeholder={"A320 Neo"}
                               className={"form-control"}/>
                    </div>

                    <div className={"row"}>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-lg btn-warning" type="submit">Get Dimensions</button>
                            <button className="button-link" type="button" onClick={() => findAircraft()}>Feeling Lucky
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            {aircraftFound &&
                <SpecModal aircraftSpecs={aircraftSpecs} show={aircraftFound}
                           onHide={() => setAircraftFound(() => false)}/>}

        </>
    );
}