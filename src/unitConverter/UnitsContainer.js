import React from "react";
import "../styles/unitsContainer.css";
import {SwapButton} from "./unitsContainer/SwapButton";
import {UnitInput} from "./unitsContainer/UnitInput";


export class UnitsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            unit: "Fahrenheits",
            isSwap: false
        }
    }

    handlePrimaryInputChange = (value) => {
        this.setState({
            unit: this.props.primaryValueData["unit"],
            value
        });
    }
    handleSecondaryInputChange = (value) => {
        this.setState({
            unit: this.props.secondaryValueData["unit"],
            value
        });
    }
    handleSwap = () => {
        this.setState(state => ({
            isSwap: !state.isSwap
        }));
    }

    convert(value, func) {
        return func(value);
    };

    render() {
        const unit = this.state.unit;
        const value = this.state.value;
        const isSwap = this.state.isSwap;

        const primaryValue = unit !== this.props.primaryValueData["unit"] ? this.convert(value, this.props.primaryValueData["convert"]) : value;
        const secondaryValue = unit !== this.props.secondaryValueData["unit"] ? this.convert(value, this.props.secondaryValueData["convert"]) : value;

        const primaryInput = (
            <UnitInput
                unit={this.props.primaryValueData["unit"]}
                value={primaryValue}
                onChange={this.handlePrimaryInputChange}
            />
        );
        const secondaryInput = (
            <UnitInput
                unit={this.props.secondaryValueData["unit"]}
                value={secondaryValue}
                onChange={this.handleSecondaryInputChange}
            />
        );

        const container = isSwap ?
            { primary: secondaryInput, secondary: primaryInput } :
            { primary: primaryInput,  secondary: secondaryInput };

        return (
            <div className={"units-container"}>
                {container["primary"]}
                <SwapButton onSwap={this.handleSwap} />
                {container["secondary"]}
            </div>
        )
    }
}