import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import css from './ContactsPage.module.css'
import ContactForm from "../../components/ContactForm/ContactForm";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
    
      useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    return (
      <div className={css.contactsContainer}>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}

        <ContactList />
      </div>
    );
}