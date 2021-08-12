import React from "react";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = ({ closeWindow, createEvent }) => {
  let formRef = null;
  const setRef = (node) => {
    formRef = node;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = [...new FormData(formRef)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {}
    );

    createEvent(formData);
    closeWindow();
  };

  return (
    <div className='modal overlay'>
      <div className='modal__content'>
        <div className='create-event'>
          <button className='create-event__close-btn' onClick={closeWindow}>
            +
          </button>
          <form className='event-form' ref={setRef} onSubmit={handleSubmit}>
            <input
              type='text'
              name='title'
              placeholder='Title'
              className='event-form__field'
            />
            <div className='event-form__time'>
              <input type='date' name='date' className='event-form__field' />
              <input
                type='time'
                name='dateFrom'
                className='event-form__field'
              />
              <span>-</span>
              <input type='time' name='dateTo' className='event-form__field' />
            </div>
            <textarea
              name='description'
              placeholder='Description'
              className='event-form__field'
            ></textarea>
            <button type='submit' className='event-form__submit-btn'>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeWindow: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
};

export default Modal;
