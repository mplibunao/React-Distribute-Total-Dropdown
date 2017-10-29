import React from "react";
import { FormControl, FormGroup } from "react-bootstrap";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { available, breakdown, name } = this.props;
        const availableArray = Array(available).fill(null);
        
        const dropdown = availableArray.map(option => {
            return (
                <FormGroup className="col-md-6">
                    <FormControl componentClass="select">
                        <option>0</option>
                    </FormControl>
                </FormGroup>
            );
        });
            
        return (
            {dropdown}
        );
    }
}

export default Dropdown;