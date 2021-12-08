import React from "react";
import "../../styles/swapButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faExchangeAlt} from "@fortawesome/free-solid-svg-icons";

export class SwapButton extends React.Component {
    handleClick = () => {
        this.props.onSwap();
    }

    render() {
        return (
            <button onClick={this.handleClick} className={"swap-button"}>
                <FontAwesomeIcon icon={faExchangeAlt} />
            </button>
        );
    }
}