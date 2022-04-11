import { Component } from "react";
import s from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    const { modalImg, closeModal } = this.props;

    return (
      <div onClick={closeModal} className={s.Overlay}>
        <div className={s.Modal}>
          <img src={modalImg} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
