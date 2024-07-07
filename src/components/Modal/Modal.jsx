import ReactModal from 'react-modal';
import css from './Modal.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';

ReactModal.setAppElement('#root');

export default function ContactEditor({
  isOpen,
  onClose,
  initialName,
  initialNumber,
  contactId,
}) {
 
  const [name, setName] = useState(initialName);
  const [number, setNumber] = useState(initialNumber);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    onClose();
    dispatch(editContact({ id: contactId, name: name, number: number }))
  };

  return (
    <div>
      <ReactModal
        className={css.modal}
        overlayClassName={css.overlay}
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
        onRequestClose={onClose}
      >
        <div className={css.card}>
          <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.info}>
              <label htmlFor="name">
                <FaUser className={css.icon} />
                <input
                  type="text"
                  id="name"
                  className={css.editingInput}
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </label>
              <label htmlFor="number">
                <FaPhoneAlt className={css.icon} />
                <input
                  type="text"
                  id="number"
                  className={css.editingInput}
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />
              </label>
            </div>

            <button
              className={css.btn}
              
            >
              Save
            </button>
          </form>
        </div>
      </ReactModal>
    </div>
  );
}