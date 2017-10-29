import React from "react";
import Dropdown from "./Dropdown";

class DistributeTotalDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { breakdown, available, names, onChange } = this.props;
        const dropdowns = names.map(name => {
            console.log('available[name]: ', available[name]);
            console.log('breakdown[name]: ', breakdown[name]);
            return (
                <Dropdown
                    name={name}
                    breakdown={breakdown[name]}
                    available={available[name]}
                    onChange={onChange}
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