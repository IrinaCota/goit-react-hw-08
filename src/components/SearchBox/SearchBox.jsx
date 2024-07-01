import { useId } from "react";
import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { filterContact, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
 const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filterFieldId = useId();

  return (
    <div className={css.searchForm}>
      <label htmlFor={filterFieldId}>Find contacts by name</label>
      <input
        type="text"
        id={filterFieldId}
        value={filter}
        onChange={event => dispatch(filterContact(event.target.value))}
      />
    </div>
  );
}
