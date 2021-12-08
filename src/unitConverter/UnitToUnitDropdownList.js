import React from "react";
import "../styles/dropdownList.css";
import data from "../unit-converter-data.json";


export class UnitToUnitDropdownList extends React.Component {
    handleChange = (e) => {
        this.props.onSelectPair(e.target.value);
    };

    render() {
        let pairsList = [];
        switch (this.props.selectedCategory) {
            // Temperature
            case data.categories[0]:
                for (let i = 0; i < data.pairs.temperature.length; i++)
                    pairsList[i] = (
                        <option
                            key={data.pairs.temperature[i]}
                            value={data.pairs.temperature[i]}
                        >
                            {data.pairs.temperature[i]}
                        </option>);
                break;
            // Mass
            case data.categories[1]:
                for (let i = 0; i < data.pairs.mass.length; i++)
                    pairsList[i] = (
                        <option
                            key={data.pairs.mass[i]}
                            value={data.pairs.mass[i]}
                        >
                            {data.pairs.mass[i]}
                        </option>);
                break;
            // Length
            case data.categories[2]:
                for (let i = 0; i < data.pairs.length.length; i++)
                    pairsList[i] = (
                        <option
                            key={data.pairs.length[i]}
                            value={data.pairs.length[i]}
                        >
                            {data.pairs.length[i]}
                        </option>
                    );
                break;
            // Speed
            case data.categories[3]:
                for (let i = 0; i < data.pairs.speed.length; i++)
                    pairsList[i] = (
                        <option
                            key={data.pairs.speed[i]}
                            value={data.pairs.speed[i]}
                        >
                            {data.pairs.speed[i]}
                        </option>
                    );
                break;
        }

        return (
            <label className={"dropdown-list"}>
                Units:<br/>
                <select name="units" onChange={this.handleChange}>
                    {pairsList}
                </select>
            </label>
        )
    }
}