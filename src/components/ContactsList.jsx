import React from "react";
import ContactItem from "./ContactItem";

function ContactsList({ contacts, deleteHandler }) {
  //   console.log(props);
  return (
    <div>
      <h2>ContactsList</h2>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        "No Contacts Yet!"
      )}
    </div>
  );
}

export default ContactsList;
