import Modal from 'react-bootstrap/Modal';
import SpecTable from "../SpecTable/SpecTable.tsx";
import UnitConversionEngine from "../../services/UnitConversionEngine.ts";
import "./SpecModal.css";
import ISpecProps from "./ISpecProps.ts";

interface SpecModalProps {
    aircraftSpecs: ISpecProps,
    show?: boolean,
    onHide?: () => void
}

function SpecModal({aircraftSpecs, ...props}: SpecModalProps) {

    const columns = ['🍌️ Banana Standard', 'Imperial'];
    const rowTitles = ['Approach Speed', 'Wingspan w/o Winglets', 'Length',
        'Wheelbase', 'Cockpit to Main Gear', 'Max Takeoff Weight', 'Parking Area'];

    const rows: (string | null)[][] = [
        [UnitConversionEngine.convertKnToKbh(aircraftSpecs.Approach_Speed_knot), aircraftSpecs.Approach_Speed_knot ? aircraftSpecs.Approach_Speed_knot + ' knots' : null],
        [UnitConversionEngine.convertFeetToBanana(aircraftSpecs.Wingspan_ft_without_winglets_sharklets), aircraftSpecs.Wingspan_ft_without_winglets_sharklets ? aircraftSpecs.Wingspan_ft_without_winglets_sharklets + ' feet' : null],
        [UnitConversionEngine.convertFeetToBanana(aircraftSpecs.Length_ft), aircraftSpecs.Length_ft ? aircraftSpecs.Length_ft + ' feet' : null],
        [UnitConversionEngine.convertFeetToBanana(aircraftSpecs.Wheelbase_ft), aircraftSpecs.Wheelbase_ft ? aircraftSpecs.Wheelbase_ft + ' feet' : null],
        [UnitConversionEngine.convertFeetToBanana(aircraftSpecs.Cockpit_to_Main_Gear_ft), aircraftSpecs.Cockpit_to_Main_Gear_ft ? aircraftSpecs.Cockpit_to_Main_Gear_ft + ' feet' : null],
        [UnitConversionEngine.convertPoundToBananagram(aircraftSpecs.MTOW_lb), aircraftSpecs.MTOW_lb ? aircraftSpecs.MTOW_lb + ' pounds' : null],
        [UnitConversionEngine.convertFtSquaredToSquareBanana(aircraftSpecs.Parking_Area_ft2), aircraftSpecs.Parking_Area_ft2 ? aircraftSpecs.Parking_Area_ft2 + ' square feet' : null],
    ];

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ✈ Aircraft Specs
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{aircraftSpecs.Model_FAA}</h4>
                <ul>
                    <li>Manufacturer: {aircraftSpecs.Manufacturer}</li>
                    <li>Physical Class Engine: {aircraftSpecs.Physical_Class_Engine}</li>
                    <li>Number of Engines: {aircraftSpecs.Num_Engines}</li>
                    <li>Class: {aircraftSpecs.Class}</li>
                </ul>
                <SpecTable columns={columns} rowTitles={rowTitles} rows={rows}/>
            </Modal.Body>
            <Modal.Footer>
                <p className={"disclaimer"}>ⓘ Imperial specs are based off of the <a target={"_blank"}
                    href={"https://www.faa.gov/airports/engineering/aircraft_char_database"}>Aircraft Characteristic
                    Database</a> -
                    U.S. Federal Aviation Administration, conversions were made based on the <a target={"_blank"}
                        href={"https://medium.com/@liamfoley2430/on-the-usefulness-of-bananas-a-new-system-of-measurement-76c50d8bb89a"}> Banana
                        Standard System of
                        Weights and Measurements</a></p>
            </Modal.Footer>
        </Modal>
    );
}

export default SpecModal;