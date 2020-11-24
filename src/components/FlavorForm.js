import React, { Component } from 'react';

class FlavorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['']
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let newValue = event.target.value;
        console.log('new value: ' +  newValue);
        let stateValue = this.state.value.slice();
        console.log('state value: ' + stateValue);
        console.log(stateValue);

        /* This way to select multiple option using Ctrl key */
        // this.setState({value: Array.from(event.target.selectedOptions, (item) => item.value)});

        stateValue.indexOf(newValue) === -1 
            ? stateValue.push(newValue) 
            : stateValue.length === 1 
                ? (stateValue = [])
                : stateValue.splice(stateValue.indexOf(newValue), 1);

        // stateValue.indexOf(newValue) === -1 
        //     ? stateValue.push(newValue) 
        //     : stateValue.filter( item => item !== newValue);

        this.setState({ value: stateValue });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    {/* <select value={this.state.value} onChange={this.handleChange}> */}
                    <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FlavorForm;