import "./AirCraftForm.css"
import SpecModal from "../SpecModal/SpecModal.tsx";
import {useState} from "react";
import aircraft from "../../data/aircraft.json";
import ISpecProps from "../SpecModal/ISpecProps.ts"


export default function AircraftForm() {
    const [aircraftSpecs, setAircraftSpecs] = useState<ISpecProps>({});
    const [aircraftFound, setAircraftFound] = useState<boolean>(false);

    function findAircraft(e: { preventDefault: () => void; target: any; }) {
        e.preventDefault();
        const formData = Object.fromEntries((new FormData(e.target)).entries());

        const regex = new RegExp(`${formData.manufacturer} ${formData.model}`, 'i');
        const filteredAircraft = aircraft.filter((aircraft) => regex.test(aircraft.Model_FAA));

        filteredAircraft.sort((a, b) => a.Model_FAA.length - b.Model_FAA.length);
        setAircraftSpecs(() => filteredAircraft[0]);
        setAircraftFound(() => true);
        return filteredAircraft[0];
    }

    return (
        <>
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
                            <button className="button-link" type="submit">Feeling Lucky</button>
                        </div>
                    </div>
                </div>
            </form>

            {aircraftFound &&
                <SpecModal aircraftSpecs={aircraftSpecs} show={aircraftFound} onHide={() => setAircraftFound(() => false)} /> }

        </>
    );
}