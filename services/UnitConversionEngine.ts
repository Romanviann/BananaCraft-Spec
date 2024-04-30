class UnitConversionEngine {

    public static convertFeetToBanana(lengthInFeet: number | string): string | null {
        return lengthInFeet ? Math.round((this.stringToFloat(lengthInFeet) / 0.656988189) * 100) / 100 + ' bananas' : null;
    }

    public static convertKnToKbh(speedInKnots: number | string): string | null {
        const speedInKilometerPerHour = this.stringToFloat(speedInKnots) * 1.852;
        return speedInKilometerPerHour ? Math.round(speedInKilometerPerHour * (Math.pow(10, 6)) * (1 / 200.25) * (1 / 1000) * 100) / 100 + ' kilobananas/h' : null;
    }

    public static convertPoundToBananagram(massInPounds: number | string): string | null {
        return massInPounds ? Math.round((this.stringToFloat(massInPounds) / 0.398) * 100) / 100 + ' bananagrams' : null;
    }

    public static convertFtSquaredToSquareBanana(areaInFeetSquared: number | string): string | null {
        return areaInFeetSquared ? Math.round((this.stringToFloat(areaInFeetSquared) / 0.431633) * 100) / 100 + " square bananas" : null;
    }

    private static stringToFloat(input: any) {

        if (typeof (input) == "string") {
            return parseFloat(input.replace(",", "."));
        } else {
            return input;
        }
    }
}

export default UnitConversionEngine;