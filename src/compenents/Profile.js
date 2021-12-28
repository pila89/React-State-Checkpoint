import React from 'react';

class Counter extends React.Component {
  constructor() {
    console.log('1. constructor()');
    super();
    this.state = {
      count: 0,
      intervall: null,
      timer: 0,
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }




  render() {
    return (
      <div>
    
        <h2>{this.state.Profile}</h2>
      </div>
    );
  }
}

export default Counter;