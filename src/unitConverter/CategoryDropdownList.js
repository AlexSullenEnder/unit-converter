import React from "react";
import "../styles/dropdownList.css";
import data from "../unit-converter-data.json";


export class CategoryDropdownList extends React.Component {
    handleChange = (e) => {
        this.props.onSelectCategory(e.target.value);
    };

    render() {
        let categoriesList = [];
        for (let i = 0; i < data.categories.length; i++)
            categoriesList[i] = (
                <option
                    key={data.categories[i]}
                    value={data.categories[i]}
                >
                    {data.categories[i]}
                </option>);


        return (
            <label className={"dropdown-list"}>
                Category:<br/>
                <select name="category" onChange={this.handleChange}>
                    {categoriesList}
                </select>
                <br/>
            </label>
        )
    }
}