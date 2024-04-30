
export default interface ISpecProps {
    "ICAO_Code": string | number,
    "FAA_Designator": string | number,
    "Manufacturer": string | number,
    "Model_FAA": string | number,
    "Physical_Class_Engine": string | number,
    "Num_Engines": string | number,
    "Approach_Speed_knot": number | string,
    "Wingspan_ft_without_winglets_sharklets": string | number,
    "Length_ft": string | number,
    "Tail_Height_at_OEW_ft": string | number,
    "Wheelbase_ft": string | number,
    "Cockpit_to_Main_Gear_ft": string | number,
    "Main_Gear_Width_ft": string | number,
    "MTOW_lb": string | number,
    "MALW_lb": string | number,
    "ICAO_WTC": string | number,
    "Parking_Area_ft2": string | number,
    "Class": string | number
}