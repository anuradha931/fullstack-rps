import * as React from 'react';
import SockJsClient from "react-stomp";

interface IProps {
}
export const WebSocketContext = React.createContext({onMessageReceive:null,sendMessage:null});
class WebSocketComponent extends React.Component<IProps> {
    clientRef: any;
    listeners = new Array();
    constructor(props:IProps) {
        super(props);

        this.state = {
           clientConnected: false,
        };
    }

    el = document.getElementById("modal");
    componentDidMount = () => {
        this.el.addEventListener("sendMessage", this.sendListener, true);

    }

    componentWillUnmount = () => {
        this.el.removeEventListener("sendMessage", this.sendListener,true);
    }
    sendListener = (evt) => {
        this.sendMessage(evt,evt.detail);
    }
   
    onMessageReceive = (msg, topic) => {
      console.log("Message Received:" + msg);
      console.dir(msg);
        let event = new CustomEvent("onMessage", {
            detail: msg
        });
        this.el.dispatchEvent(event);

  }
    sendMessage = (msg, selfMsg) => {
    console.log("Send Message");
    try {
      this.clientRef.sendMessage("/app/winning-sequence", JSON.stringify(selfMsg));
      return true;
    } catch(e) {
      return false;
    }
  }

    render() {
        //const wsSourceUrl = window.location.protocol + "//" + window.location.host + "/rps";
        const wsSourceUrl = "/winning-sequence-websocket";

        return <> {this.props.children} 
        <SockJsClient url={ wsSourceUrl } topics={["/topic/rps"]}
          onMessage={ this.onMessageReceive } ref={ (client) => { this.clientRef = client }}
          onConnect={ () => { this.setState({ clientConnected: true }) } }
          onDisconnect={ () => { this.setState({ clientConnected: false }) } }
          debug={ false }/></>;
    }
}
export default WebSocketComponent;