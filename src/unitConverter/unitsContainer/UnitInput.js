import React from "react";
import "../../styles/unitInput.css";


export class UnitInput extends React.Component {
    handleChange = (e) => {this.props.onChange(e.target.value)};


    render() {
        const unit = this.props.unit;
        const value = this.props.value;

        return (
            <fieldset className={"unit-input__frame"}>
                <legend>Values on {unit}</legend>
                <input
                    value={value}
                    onChange={this.handleChange}
                    className={"unit-input__input"}
                />
            </fieldset>
        );
    }
}