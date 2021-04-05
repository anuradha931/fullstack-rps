import * as React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";
interface IProps {
  score: number,
  myChoice: any,
  setScore:any
}
interface IState{
      house: string,
      playerWin: string,
      counter:number
}
class Game extends React.Component<IProps, IState> {
  state={
    house: "",
    playerWin: "",
    counter: 3
  };

  //const[payerWin: any, setPlayerWin: any] =useState("");
  constructor(props:IProps)
  {
    super(props);
  }


  newHousePick() {
    const choices = ["rock", "paper", "scissors"];
    this.setState({ house: choices[Math.floor(Math.random() * 3)] });

  }



  Result() {
    if (this.props.myChoice === "rock" && this.state.house === "scissors") {
      // this.setPlayerWin("win");
      // setScore(this.state.score + 1);
      this.setState({ playerWin: "Win" });
      this.props.setScore(this.props.score + 1);
    } else if (this.props.myChoice === "rock" && this.state.house === "paper") {
      // setPlayerWin("lose");
      // setScore(score - 1);
       this.setState({ playerWin: "lose" });
       this.props.setScore(this.props.score - 1);
    } else if (this.props.myChoice === "scissors" && this.state.house === "paper") {
      this.setState({ playerWin: "Win" });
      this.props.setScore(this.props.score + 1);
    } else if (this.props.myChoice === "scissors" && this.state.house === "rock") {
      // setPlayerWin("lose");
      // setScore(score - 1);
      this.setState({ playerWin: "lose" });
       this.props.setScore(this.props.score - 1);
    } else if (this.props.myChoice === "paper" && this.state.house === "rock") {
      // setPlayerWin("win");
      // setScore(score + 1);
       this.setState({ playerWin: "Win" });
      this.props.setScore(this.props.score + 1);
    } else if (this.props.myChoice === "paper" && this.state.house === "scissors") {
      // setPlayerWin("lose");
      // setScore(score - 1);
       this.setState({ playerWin: "lose" });
       this.props.setScore(this.props.score - 1);
    } else {
      // setPlayerWin("draw");
      this.setState({ playerWin: "lose" });
    }
  }
//   useEffect(() => {
//     const timer =
//       counter > 0
//         ? setInterval(() => {
//             setCounter(counter - 1);
//           }, 1000)
//         : Result();

//     return () => {
//       clearInterval(timer);
//     };
// }, [counter, house]);

  useEffect(() => {
      this.newHousePick();
}, [])

    useEffect(() => {
    const timer =
      this.state.counter > 0
        ? setInterval(() => {
            this.setState({counter:(this.state.counter - 1));
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
    }, [this.state.counter, this.state.house])
  render() {
    return (
      <div className="play">
        <img src={Triangle} alt="" className="triangle" />
        <div className="items">
          <Link to="/game">
            <div
              data-id="paper"
              onClick={this.props.setChoice}
              className="icon icon--paper"
            ></div>
          </Link>
          <Link to="/game">
            <div
              data-id="scissors"
              onClick={this.setChoice}
              className="icon icon--scissors"
            ></div>
          </Link>
          <Link to="/game">
            <div
              data-id="rock"
              onClick={this.setChoice}
              className="icon icon--rock"
            ></div>
          </Link>
        </div>
      </div>
    );
  }
};
export default Game;