import * as React from 'react';
import Modal from "./Modal";
interface IProps {
}
interface IState {
  modal: boolean
}
class Footer extends React.Component<IProps, IState> {
  tog=false;
  constructor(props:IProps)
  {
    super(props);
    this.state={
      modal:false
    };
    this.toggle = this.toggle.bind(this);
  }
  

 toggle() {
   this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
     <>
      <footer className="footer">
        <button className="rules" onClick={this.toggle}>
          Rules
        </button>
      </footer>
      {this.state.modal ? <Modal toggle={this.toggle} /> : null}
    </>
    );
  }
};
export default Footer;