import React from "react";
import { addEvent, getEvents } from "../../gateway/events";

import "./modal.scss";

const Modal = ({ closeWindow }) => {
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

    addEvent(formData);

    console.log(formData);
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

export default Modal;
