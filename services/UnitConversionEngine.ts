class UnitConversionEngine {

    private static stringToFloat(input: any) {

        if (typeof (input) == "string") {
            return parseFloat(input.replace(",", "."));
        } else {
            return input;
        }
    }

    public static convertFeetToBanana(lengthInFeet: number | string): number {
        return Math.round((this.stringToFloat(lengthInFeet) / 0.656988189) * 100) / 100;
    }

    public static convertKnToKbh(speedInKnots: number | string): number {
        const speedInKilometerPerHour = this.stringToFloat(speedInKnots) * 1.852;
        return Math.round(speedInKilometerPerHour * (Math.pow(10, 6)) * (1 / 200.25) * (1 / 1000) * 100) / 100;
    }

    public static convertPoundToBananagram(massInPounds: number | string): number {
        return Math.round((this.stringToFloat(massInPounds) / 0.398) * 100) / 100;
    }

    public static convertFtSquaredToSquareBanana(areaInFeetSquared: number | string): number {
        return Math.round((this.stringToFloat(areaInFeetSquared) / 0.431633) * 100) / 100;
    }

}

export default UnitConversionEngine;