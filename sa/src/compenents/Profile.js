import React from 'react';

class Counter extends React.Component {
  constructor() {
    console.log('1. constructor()');
    super();
    this.state = {
      count: 0,
      intervall: null,
      profile: 0,
    };
  }
  componentDidMount() {
    console.log('3. componentDidMount()');
    this.setState({
      intervall: setInterval(() => {
        this.setState({ profile: this.state.profile + 1 });
      }, 100),
    });
  }
  render() {
    return (
      <div>
    
        <h3>{this.state.profile}</h3>
      </div>
    );
  }
}
export default Counter;