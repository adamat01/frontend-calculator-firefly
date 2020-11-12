import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import Select from 'react-select';

const options = [
    {value: 'default', label: 'Default'},
    {value: 'warm', label: 'Warm'},
    {value: 'cool', label: 'Cool'},
    {value: 'firefly', label: 'Firefly'},
];

const fonts = [
    {value: 'sans', label: 'Sans-Serif'},
    {value: 'times', label: 'Times'},
    {value: 'georgia', label: 'Georgia'},
];

class Navbar extends Component {

    render() { 

        return (
            <div className="hamburger">
                <Menu disableAutoFocus>
                    <p className="menu-item">Conversion Tool</p>
                    <p className="menu-item">Theme Color</p>
                    <Select className="select-item" onInputChange={this.props.handleChange}
                        inputValue={this.props.selectedOption} onChange={this.props.handleChange}
                        options={options} isSearchable={false} isMulti={false}/>
                    <p className="menu-item">Font</p>
                    <Select className="select-item" onInputChange={this.props.handleFontChange}
                        inputValue={this.props.selectedFont} onChange={this.props.handleFontChange}
                        options={fonts} isSearchable={false} isMulti={false}/>
                    <p className="menu-item">Calculations Log</p>
                    <p className="menu-item">Rotate</p>
                </Menu>
            </div> 
        );
    }
}
 
export default Navbar;