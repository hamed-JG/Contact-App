import React from "react";
import styles from "./ContactItem.module.css";
import { FaPhoneAlt, FaRegEnvelope, FaRegTrashAlt } from "react-icons/fa";

function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <div>
      <li className={styles.item}>
        <p>
          {name} {lastName}
        </p>
        <p>
          <span>
            <FaRegEnvelope />
          </span>
          {email}
        </p>
        <p>
          <span>
            <FaPhoneAlt />
          </span>
          {phone}
        </p>
        <button onClick={() => deleteHandler(id)}>
          <FaRegTrashAlt />
        </button>
      </li>
    </div>
  );
}

export default ContactItem;
