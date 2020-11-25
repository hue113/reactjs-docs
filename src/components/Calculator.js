import React, { Component } from 'react';
// import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {temperature: ''};

    //     this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({temperature: e.target.value});
    // }

    render() {
        // const temperature = this.state.temperature;
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
            // <fieldset>
            //     <legend>Enter temperature in Celsius:</legend>
            //     <input
            //         value={temperature}
            //         onChange={this.handleChange} />
            //     <BoilingVerdict
            //         celsius={parseFloat(temperature)} />
            // </fieldset>
        );
    }
}

export default Calculator;