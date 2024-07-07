import ReactModal from 'react-modal';
import css from './Modal.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';

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
    dispatch(editContact({ id: contactId, name, number }))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch(err => {
        console.error(err.message);
      });
  };

  return (
    <ReactModal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      shouldCloseOnEsc={true}
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
                required
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
                required
              />
            </label>
          </div>
          <button type="submit" className={css.btn}>
            Save
          </button>
        </form>
      </div>
    </ReactModal>
  );
}

ContactEditor.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialName: PropTypes.string.isRequired,
  initialNumber: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
