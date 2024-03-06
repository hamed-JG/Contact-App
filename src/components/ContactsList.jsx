import React from "react";
import ContactItem from "./ContactItem";

import styles from "./ContactsList.module.css";

function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h2>ContactsList</h2>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.massage}>"No Contacts Yet!"</p>
      )}
    </div>
  );
}

export default ContactsList;
