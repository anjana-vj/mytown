import React from 'react';
import $ from 'jquery';
import 'select2/dist/js/select2.full'
import 'select2/dist/css/select2.css';
class CustomSelect extends React.Component {
    constructor(params) {
        super(params)
        let selected
        if(params.selected){
        selected = <option value={params.selected} selected>{params.selected}</option>
        }
        else{
            selected = <option value='' disabled  selected>Select your option</option>
        }
        this.state = {
            data: params.data,
            selected:selected
        }

    }
    componentDidMount() {
        $('.select2').select2()
    }
    render() {
        return (
            <select required class="form-control select2 select2-success" data-dropdown-css-class="select2-success">
                {this.state.selected}
                {this.state.data.map(data => {
                    return(
                        <option>{data}</option>
                    )
                })}
            </select>
        )
    }
}
export default CustomSelect;