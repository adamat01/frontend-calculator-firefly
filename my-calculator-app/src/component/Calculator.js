import React, { Component } from 'react';
import Display from './Display/Display';
import Navbar from './Navbar/Navbar';
import Numpad from './Number/Numpad';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: '',
            size: 0,
            selectedOption: {value: 'default', label: 'Default'},
            theme: 'default',
            selectedFont: {value: 'sans', label: 'Sans-Serif'},
            font: 'sans',
        }
    }

    onClick = button => {
        if(button === '='){ this.calculate() }
        else if(button === 'C'){ this.clearAll() }
        else if(button === 'CE'){ this.backspace() }
        else {
            if(button === '+' || button === '*' || button === '/'){
                if(this.state.results === '') {/* Skip */}
                else if(this.state.results.slice(-1) === '+' || this.state.results.slice(-1) === '*' ||
                 this.state.results.slice(-1) === '/' || this.state.results.slice(-1) === '-' ||
                 this.state.results.slice(-1) === '.') {/* Skip */}
                else {this.setState({results: this.state.results + button})}
            }else if(button === '-'){
                if(this.state.results === '--') {/* Skip */}
                else if(this.state.results.slice(-2) === '--') {/* Skip */}
                else {this.setState({results: this.state.results + button})}
            }
            else if(button === '.'){
                if(this.state.results.slice(-1) === '.') {/* Skip */}
                else if(this.state.results.includes('.')){
                    var operations = this.state.results.match(/[+\-*/]/gm)
                    if(operations !== null){
                        var lastOp = operations[operations.length-1]
                        if(this.state.results.lastIndexOf('.') < this.state.results.lastIndexOf(lastOp)){
                            this.setState({results: this.state.results + button})
                        }
                    }
                }
                else {this.setState({results: this.state.results + button})}
            }
            else{
                this.setState({results: this.state.results + button})
            }
        }
        this.setState({size: this.state.results.length})
    };

    calculate = () => {
        var check = ''
        if(this.state.results.slice(-1).match(/[+\-*/]/gm)){/* Skip */}
        else {
            if(this.state.results.includes('--')) {
                check = this.state.results.replace('--','+')
            }
            else {
                check = this.state.results
            }

            try {
                this.setState({results: (eval(check) || '') + ''})
            }
            catch (e) {
                this.setState ({
                    results: "err"
                })
            }
        }
    }

    clearAll  = () => { this.setState({results: ''}); this.setState({test: ''}) }

    backspace = () => { this.setState({results: this.state.results.slice(0,-1)}) }

    handleChange = selectedOption => {
        this.setState({selectedOption})
        this.setState({theme: this.state.selectedOption.value})
    };

    handleFontChange = selectedFont => {
        this.setState({selectedFont})
        this.setState({font: this.state.selectedFont.value})
    };

    render() { 
        return (
            <div className="calculator">
                <Navbar handleChange={this.handleChange.bind(this)} selectedOption={this.state.selectedOption}
                    handleFontChange={this.handleFontChange.bind(this)} selectedFont={this.state.selectedFont}/>
                <Display test={this.state.test} size={this.state.size} results={this.state.results} />
                <Numpad onClick={this.onClick} theme={this.state.theme} font={this.state.font}/>
            </div>
        );
    }
}
 
export default Calculator;