
import * as React from 'react';
import Play from './components/Play';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
import WebSocketComponent from './components/WebSocketComponent';


interface Props {
   setMyChoice?:any,
    score?:number
}
class App extends React.Component<Props> {
  state= {
    myChoice: "",
    score: 0,
    sequenceCounter:0
  };
  constructor(props: Props)
  {
    super(props);
    this.setMyChoice=this.setMyChoice.bind(this);
    this.setScore=this.setScore.bind(this);

  }
  setMyChoice(mychoice:string)
  {
    this.setState({ myChoice: mychoice });
  }
   setScore(score:number)
   {
     console.log("score" + score);
     if (this.state.score > score 
     {
      console.log("Winning Sequence: " + this.state.sequenceCounter);
      let el = document.getElementById("modal");
      let event = new CustomEvent("sendMessage", {
            detail: {value:this.state.sequenceCounter}
      });
      el.dispatchEvent(event);
       this.setState({ score: score ,sequenceCounter:0});
     } else {
      this.setState({ score: score ,sequenceCounter:(this.state.sequenceCounter+1)});
     }
  }
  render() {
    return (
    <>
      <div className="container">
        
        <Header score={this.state.score} />
        
        <Switch>
          <Route exact path="/">
            <Play setMyChoice={this.setMyChoice} />
          </Route>
          <Route path="/game">
            <Game myChoice={this.state.myChoice} score={this.state.score} setScore={this.setScore} />
          </Route>
            </Switch>


        </div>
        <Footer />
                  <WebSocketComponent>
        </WebSocketComponent>
    </>
    );
  }
}

export default App;
