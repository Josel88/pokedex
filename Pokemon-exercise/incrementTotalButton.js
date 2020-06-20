import React, { Component } from 'react';

class incrementTotalButton extends Component{
    state = {
        count = count + 1,
  };
    
    render() {
        return (
            <div>
                count: {count}
                <button onClick={incrementTotalButton}>Click</button>
          </div>
        );
      }
    }


export default incrementTotalButton;