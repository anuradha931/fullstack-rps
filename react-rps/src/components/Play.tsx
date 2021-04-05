import * as React from 'react';
import { Link } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";
import { w3cwebsocket as W3CWebSocket } from "websocket";

interface IProps {
  setMyChoice: Function;
}
//const client = new W3CWebSocket('ws://127.0.0.1:8000');

class Play extends React.Component<IProps> {
//  componentWillMount() {
//     client.onopen = () => {
//       console.log('WebSocket Client Connected');
//     };
//     client.onmessage = (message) => {
//       console.log(message);
//     };
//   }
  
  constructor(props:IProps)
  {
    super(props);
    this.setChoice=this.setChoice.bind(this);
  }


  setChoice(e:any)  {
      this.props.setMyChoice(e.target.dataset.id);
    }
  render() {
    return (
      <div className="play">
        <img src={Triangle} alt="" className="triangle" />
        <div className="items">
          <Link to="/game">
            <div
              data-id="paper"
              onClick={this.setChoice}
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
export default Play;