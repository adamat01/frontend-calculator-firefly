import React, { Component } from 'react';
import Readout from './Readout';

class Display extends Component {

    render() { 
        let {results} = this.props;
        let {size} = this.props;

        return (
            <div className="display">
                <Readout results={results} size={size} />
                <hr/>
            </div>
        );
    }
}
 
export default Display;