import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../../redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';
import ContactEditor from '../Modal/Modal';
import PropTypes from 'prop-types';

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => setModalIsOpen(true);
  const handleModalClose = () => setModalIsOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(item.id))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully deleted!');
      })
      .catch(err => {
        toast.error(`${err.message}`);
      });
  };

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {item.name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {item.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
      <button className={css.btn} onClick={handleModalOpen}>
        Edit
      </button>
      <Toaster />

      {modalIsOpen && (
        <ContactEditor
          initialName={item.name}
          initialNumber={item.number}
          isOpen={modalIsOpen}
          onClose={handleModalClose}
          contactId={item.id}
        />
      )}
    </div>
  );
}


Contact.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
