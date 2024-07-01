import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import toast, { Toaster } from "react-hot-toast";

export default function Contact({ item }) {
  const dispatch = useDispatch();

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
      <button
        className={css.btn}
        onClick={() => {
          dispatch(deleteContact(item.id))
            .unwrap()
            .then(() => {
              toast.success('Contact successfully deleted!');
            })
            .catch(err => {
              toast.error(`${err.message}`);
            });
        }}
      >
        Delete
      </button>
      <Toaster />
    </div>
  );
}
