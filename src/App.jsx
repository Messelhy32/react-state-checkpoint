import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    //Creating the state for the Show to handle showing the Person and seconds to count for the time the component is mounted
    this.state = {
      show: false,
      seconds: 0,
    };
    //This is the Person Object we want to show.
    this.Person = {
      fullName: "Abdelrahman Messelhy",
      bio: "Abdelrahman is a Muslim handball player and music lover who finds solace in programming. He is dedicated to becoming an amazing developer and is constantly striving to improve his skills. In his free time, he enjoys going to the gym and finds spiritual fulfillment through prayer. With a passion for time management and productivity, Abdelrahman is always looking for ways to optimize his daily routine and stay consistent in his various pursuits.",
      imgSrc: "https://placehold.co/600x400",
      profession: "Web Developer",
    };
  }
  //This is the lifecycle where the component just mounted to start the timer WHEN the show state is true.
  componentDidMount() {
    if (this.state.show) {
      this.interval = setInterval(() => {
        this.setState((prevState) => {
          return { seconds: prevState.seconds + 1 };
        });
      }, 1000);
    }
  }
  /* This is the lifecycle that triggers when any update happens in the component
    There is also a function that sets an interval whenever the component gets updated
    and clears that interval when the show state in false which means when the component is removed
*/
  componentDidUpdate(prevProps, prevState) {
    if (this.state.show !== prevState.show) {
      if (this.state.show) {
        this.interval = setInterval(() => {
          this.setState((prevState) => {
            return { seconds: prevState.seconds + 1 };
          });
        }, 1000);
      } else {
        clearInterval(this.interval);
        this.setState({ seconds: 0 });
      }
    }
  }
  //The handle function that manages the state of 'show' when the button clicked
  handleClick = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };
  render() {
    return (
      <>
        {/* Show the component whenever the show state is true */}
        {this.state.show && (
          <>
            <h1>{this.Person.fullName}</h1>
            <p>{this.Person.bio}</p>
            <img src={this.Person.imgSrc} alt="" />
            <h2>{this.Person.profession}</h2>
          </>
        )}
        <button onClick={this.handleClick}>
          {!this.state.show ? "Show" : "Hide"}
        </button>
        <h4>Timer: {this.state.seconds} seconds</h4>
      </>
    );
  }
}

export default App;
