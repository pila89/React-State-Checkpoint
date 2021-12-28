import React from "react";
import Profile from "./compenents/Profile";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      profession : "Student at GO my Code",
      fullName: " Salim Amara ",
      bio: " Hallo , trut me I am a developer ",
      Imageurl: "https://profile-images.xing.com/images/d2ec59dc4f1c1cbe46fff18cf377b045-5/salim-amara.256x256.jpg"
      
    };
  }
  showHandler = () => {
    this.setState({ show: !this.state.show }); 
  };
  render() {
    return (
      <div className='App'>
        <h1>I never lose , I either win or learn</h1>
       
        <button onClick={this.showHandler}>
          {" "}
          {this.state.show ? "Thank you Good bye" : "Hi , You are welcome"} {" "}
        </button>
        {this.state.show ? ( 
          <Profile />
        ) : (
<><div> {this.state.bio} </div><div> <img  src={this.state.Imageurl} /> </div>
<div> {this.state.fullName}</div> <div>  {this.state.profession}</div></>  
        )}
      </div>
    );
  }
}
export default App;
