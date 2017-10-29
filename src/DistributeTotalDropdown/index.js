import React from "react";
import Dropdown from "./Dropdown";

class DistributeTotalDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnChangeDropdown = this.handleOnChangeDropdown.bind(this);
    }

    // Intercept the event, compute the new values for state and pass back to parent managing the state
    handleOnChangeDropdown(event, name) {
        // Get current state from props
        const { available, breakdown, total, onChange } = this.props;

        const newBreakdown = {
            ...breakdown,
            [name]: event.target.value
        };

        const breakdownArr = Object.keys(newBreakdown);
        const totalBreakdown = breakdownArr.reduce((acc, key) => {
            return acc += Number(newBreakdown[key]);
        }, 0);
        
        const newAvailable = breakdownArr.reduce((acc, key) => {
            acc[key] = Number(total) - Number(totalBreakdown) + Number(newBreakdown[key]);
            return acc;
        }, {});
        
        onChange(newBreakdown, newAvailable);
      }

    render() {
        const { breakdown, available, names } = this.props;
        const dropdowns = names.map(name => {
            return (
                <Dropdown
                    name={name}
                    breakdown={breakdown[name]}
                    available={available[name]}
                    onChange={this.handleOnChangeDropdown}
                />
            );
        });

        return (
            <div>
                {dropdowns}
            </div>
        );
    }
}

export default DistributeTotalDropdown;