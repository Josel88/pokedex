import React, { Component } from 'react';
// import { render } from '@testing-library/react';

class ResetButton extends Component {
    componentWillMount () {
        console.log("remove");
    }


    render() {
        return (
            <button onClick={this.props.reset}>Reset</button>
        )   
    }
}
export default ResetButton