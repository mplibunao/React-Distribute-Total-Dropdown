import React from "react";
import { FormControl, FormGroup } from "react-bootstrap";

const Dropdown = (props) => {
    const { available, breakdown, name, onChange } = props;
    const availableArray = Array(available + 1).fill(null);
    
    const options = availableArray.map((option, i) => {
        return (
            <option>{i}</option>
        );
    });
            
    return (
        <FormGroup className="col-md-6">
            <FormControl componentClass="select" value={breakdown} onChange={(event) => onChange(event, name)}>
                {options}
            </FormControl>
        </FormGroup>
    );
}

export default Dropdown;