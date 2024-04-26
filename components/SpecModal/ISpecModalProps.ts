import {ModalProps} from "react-bootstrap/Modal";

export default interface Props extends ModalProps {
    "ICAO_Code"?: String | null,
    "FAA_Designator"?: String| undefined,
    "Manufacturer"?: String| undefined,
    "Model_FAA"?: String| undefined,
    "Physical_Class_Engine"?: String| undefined,
    "Num_Engines"?: Number| undefined,
    "Approach_Speed_knot"?: Number| undefined,
    "Wingspan_ft_without_winglets_sharklets"?: String | undefined,
    "Length_ft"?: String| undefined,
    "Tail_Height_at_OEW_ft"?: String| undefined,
    "Wheelbase_ft"?: String| undefined,
    "Cockpit_to_Main_Gear_ft"?: String| undefined,
    "Main_Gear_Width_ft"?: String| undefined,
    "MTOW_lb"?: Number| undefined,
    "MALW_lb"?: Number| undefined,
    "ICAO_WTC"?: String| undefined,
    "Parking_Area_ft2"?: String| undefined,
    "Class"?: String | undefined
}