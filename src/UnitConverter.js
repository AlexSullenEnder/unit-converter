import React from "react";
import "./styles/unitConverter.css"
import {CategoryDropdownList} from "./unitConverter/CategoryDropdownList";
import {UnitToUnitDropdownList} from "./unitConverter/UnitToUnitDropdownList";
import {UnitsContainer} from "./unitConverter/UnitsContainer";
import data from "./unit-converter-data.json";


export class UnitConverter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: data.categories[0],
            selectedUnitPair: data.pairs.temperature[0],
        }
    };

    handleSelectCategory = (category) => {
        this.setState({
            selectedCategory: category
        });
    };
    handleSelectPair = (pair) => {
        this.setState({
            selectedUnitPair: pair
        });
    }

    convertFromCelsiusToFahrenheits = (value) => ((+value * 1.800) + 32).toFixed(4);
    convertFromFahrenheitsToCelsius = (value) => ((+value - 32) / 1.800).toFixed(4);
    convertFromFahrenheitsToKelvins = (value) => ((+value - 32) / 1.800 + 273.15).toFixed(4);
    convertFromKelvinsToFahrenheits = (value) => ((+value - 273.15) * 1.800 + 23).toFixed(4);
    convertFromCelsiusToKelvins = (value) => (+value + 273.15).toFixed(4);
    convertFromKelvinsToCelsius = (value) => (+value - 273.15).toFixed(4);

    convertFromKilogramsToFounts = (value) => (+value * 2.2046).toFixed(4);
    convertFromFountsToKilograms = (value) => (+value / 2.2046).toFixed(4);
    convertFromGramsToFounts = (value) => (+value * 0.0022046).toFixed(4);
    convertFromFountsToGrams = (value) => (+value / 0.0022046).toFixed(4);
    convertFromOuncesToFounts = (value) => (+value * 0.0625).toFixed(4);
    convertFromFountsToOunces = (value) => (+value * 16.000).toFixed(4);
    convertFromOuncesToKarats = (value) => (+value * 141.75).toFixed(4);
    convertFromKaratsToOunces = (value) => (+value * 0.0070548).toFixed(4);
    convertFromGramsToKarats = (value) => (+value * 5.000).toFixed(4);
    convertFromKaratsToGrams = (value) => (+value / 5.000).toFixed(4);

    convertFromMetersToMiles = (value) => (+value * 0.00062137).toFixed(4);
    convertFromMilesToMeters = (value) => (+value / 0.00062137).toFixed(4);
    convertFromKilometersToMiles = (value) => (+value * 0.62137).toFixed(4);
    convertFromMilesToKilometers = (value) => (+value / 0.62137).toFixed(4);
    convertFromMetersToFoots = (value) => (+value * 3.2808).toFixed(4);
    convertFromFootsToMeters = (value) => (+value / 3.2808).toFixed(4);
    convertFromKilometersToFoots = (value) => (+value * 3280.8).toFixed(4);
    convertFromFootsToKilometers = (value) => (+value / 3280.8).toFixed(4);

    convertFromMPSToKPH = (value) => (value * 3.6).toFixed(4);
    convertFromKPHToMPS = (value) => (value / 3.6).toFixed(4);
    convertFromKPHToMPH = (value) => (value * 0.62137).toFixed(4);
    convertFromMPHToKPH = (value) => (value / 0.62137).toFixed(4);

    render() {
        let primaryData;
        let secondaryData;

        switch (this.state.selectedUnitPair) {
            // Fahrenheit & Celsius
            case data.pairs.temperature[0]:
                primaryData = {
                    unit: "Fahrenheits",
                    convert: this.convertFromCelsiusToFahrenheits
                };
                secondaryData = {
                    unit: "Celsius",
                    convert: this.convertFromFahrenheitsToCelsius
                };
                break;
            //  Kelvin & Fahrenheit
            case data.pairs.temperature[1]:
                primaryData = {
                    unit: "Kelvins",
                    convert: this.convertFromFahrenheitsToKelvins
                };
                secondaryData = {
                    unit: "Fahrenheits",
                    convert: this.convertFromKelvinsToFahrenheits
                };
                break;
            // Celsius & Kelvin
            case data.pairs.temperature[2]:
                primaryData = {
                    unit: "Celsius",
                    convert: this.convertFromKelvinsToCelsius
                };
                secondaryData = {
                    unit: "Kelvins",
                    convert: this.convertFromCelsiusToKelvins
                };
                break;
            // Kilogram & Fount
            case data.pairs.mass[0]:
                primaryData = {
                    unit: "Kilogram",
                    convert: this.convertFromFountsToKilograms
                };
                secondaryData = {
                    unit: "Fount",
                    convert: this.convertFromKilogramsToFounts
                };
                break;
            // Gram & Fount
            case data.pairs.mass[1]:
                primaryData = {
                    unit: "Gram",
                    convert: this.convertFromFountsToGrams
                };
                secondaryData = {
                    unit: "Founts",
                    convert: this.convertFromGramsToFounts
                };
                break;
            // Ounce & Fount
            case data.pairs.mass[2]:
                primaryData = {
                    unit: "Ounce",
                    convert: this.convertFromFountsToOunces
                };
                secondaryData = {
                    unit: "Fount",
                    convert: this.convertFromOuncesToFounts
                };
                break;
            // Ounce & Karat
            case data.pairs.mass[3]:
                primaryData = {
                    unit: "Ounce",
                    convert: this.convertFromKaratsToOunces
                };
                secondaryData = {
                    unit: "Karat",
                    convert: this.convertFromOuncesToKarats
                };
                break;
            // Gram & Karat
            case data.pairs.mass[4]:
                primaryData = {
                    unit: "Gram",
                    convert: this.convertFromKaratsToGrams
                };
                secondaryData = {
                    unit: "Karat",
                    convert: this.convertFromGramsToKarats
                };
                break;
            // Meter & Mile
            case data.pairs.length[0]:
                primaryData = {
                    unit: "Meter",
                    convert: this.convertFromMilesToMeters
                };
                secondaryData = {
                    unit: "Mile",
                    convert: this.convertFromMetersToMiles
                };
                break;
            // Kilometer & Mile
            case data.pairs.length[1]:
                primaryData = {
                    unit: "Kilometer",
                    convert: this.convertFromMilesToKilometers
                };
                secondaryData = {
                    unit: "Mile",
                    convert: this.convertFromKilometersToMiles
                };
                break;
            // Meter & Foot
            case data.pairs.length[2]:
                primaryData = {
                    unit: "Meter",
                    convert: this.convertFromFootsToMeters
                };
                secondaryData = {
                    unit: "Foot",
                    convert: this.convertFromMetersToFoots
                };
                break;
            // Kilometer & Foot
            case data.pairs.length[3]:
                primaryData = {
                    unit: "Kilometer",
                    convert: this.convertFromFootsToKilometers
                };
                secondaryData = {
                    unit: "Foot",
                    convert: this.convertFromKilometersToFoots
                };
                break;
            // Meter per Second & Kilometer per Hour
            case data.pairs.speed[0]:
                primaryData = {
                    unit: "Meter per Second",
                    convert: this.convertFromKPHToMPS
                };
                secondaryData = {
                    unit: "Kilometer per Hour",
                    convert: this.convertFromMPSToKPH
                };
                break;
            // Kilometer per Hour & Mile per Hour
            case data.pairs.speed[1]:
                primaryData = {
                    unit: "Kilometer per Hour",
                    convert: this.convertFromMPHToKPH
                };
                secondaryData = {
                    unit: "Mile per Hour",
                    convert: this.convertFromKPHToMPH
                };
                break;

        }

        return (
            <fieldset className={"unit-converter__frame"}>
                <legend className={"unit-converter__text"}>Unit Converter</legend>
                <CategoryDropdownList
                    onSelectCategory={this.handleSelectCategory}
                />
                <UnitToUnitDropdownList
                    selectedCategory={this.state.selectedCategory}
                    onSelectPair={this.handleSelectPair}
                />
                <UnitsContainer
                    selectedPair={this.state.selectedUnitPair}
                    primaryValueData={primaryData}
                    secondaryValueData={secondaryData}
                />
            </fieldset>
        )
    };
}