import React from "react";
import { FormControl, FormGroup } from "react-bootstrap";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { available, breakdown, name } = this.props;
        const availableArray = Array(available + 1).fill(null);
        
        const options = availableArray.map((option, i) => {
            return (
                <option>{i}</option>
            );
        });
            
        return (
            <FormGroup className="col-md-6">
                <FormControl componentClass="select" value={breakdown} >
                    {options}
                </FormControl>
            </FormGroup>
        );
    }
}

export default Dropdown;