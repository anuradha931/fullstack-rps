import * as React from 'react';
import Modal from "./Modal";
import { WebSocketContext } from './WebSocketComponent';

interface Props {
  score: any
}

class Header extends React.Component<Props> {
  el = document.getElementById("modal");
  constructor(props: Props)
  {
    super(props);
    this.state = {
      highScore:'0'
    };
  }
    onMsg = (msg:any)=>{
      this.setState({highScore:msg.value})
    }
    componentDidMount = () => {
        this.el.addEventListener("onMessage", this.onMsg,true);

    }

    componentWillUnmount = () => {
        this.el.removeEventListener("onMessage", this.onMsg,true);
    }
  onMsg = (evt) => {
      this.setState({
          highScore: evt.detail.value
      });
    }

  render() {
    return (
      <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
        </div>
          
          <div className="score-box__score"><span>High Score</span><br/><span>{this.state.highScore}</span></div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{this.props.score}</div>
      </div>
    </div>
    );
  }
};
export default Header;