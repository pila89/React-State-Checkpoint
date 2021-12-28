import React from "react";
import Timer from "./compenents/Timer";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();

    //step1:initialise the state
    this.state = {
      show: true,
    };
  }
  //step2: state handler function
  showHandler = () => {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  };

  render() {
    return (
      <div className='App'>
        <h1>React state Workshop</h1>
        {/* link the handler with an event (click button) */}
        <button onClick={this.showHandler}>
          {" "}
          {this.state.show ? "RELAAXE" : "WORK TIME"}{" "}
        </button>
        {this.state.show ? (
          <div>
            <img
              className='img'
              alt='work'
              src='https://hack.codingblocks.com/_nuxt/img/d688d5e.gif'
            />
          </div>
        ) : (
          <div>
            <Timer />
            <img
              src='https://www.sleepadvisor.org/wp-content/uploads/2020/01/animation-of-pets-sleeping-in-mens-bed.gif'
              alt='relaxe'
            />
          </div>
        )}

        {/* <h3>hide</h3>
<h3>seek</h3> */}
      </div>
    );
  }
}

export default App;
