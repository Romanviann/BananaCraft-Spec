import "./AirCraftForm.css"

export default function AircraftForm() {
    return (
        <>
            <form>
                <div className={"row form-container"}>
                    <div className={"col-12 mb-4 col-sm-6 col-md-4 col-lg-3"}>
                        <input required={true} name={"manufacturer"} aria-label={"Manufacturer"} maxLength={30} placeholder={"Airbus"}
                               className={"form-control"}/>
                    </div>
                    <div className={"col-12 mb-4 col-sm-6 col-md-4 col-lg-3"}>
                        <input required={true} name={"model"} aria-label={"Model"} maxLength={50} placeholder={"A320 Neo"}
                               className={"form-control"}/>
                    </div>

                    <div className={"row"}>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-lg btn-warning" type="button">Get Dimensions</button>
                            <button className="button-link" type="button">Feeling Lucky</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}