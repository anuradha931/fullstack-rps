import * as React from 'react';
import ReactDOM from "react-dom";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";
interface IProps {
  toggle: any
}
const modalRoot = document.getElementById('modal');

class Modal extends React.Component<IProps> {

constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
     modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
       <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={this.props.toggle}>
            <img src={close} alt="Close" src="" />
          </button>
        </div>
        <img src={rules} alt="Rules" srcSet="" />
      </div>
    </div>,this.el
    );
  }
};
export default Modal;