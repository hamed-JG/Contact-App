import React from "react";
import ContactItem from "./ContactItem";

function ContactsList({ contacts }) {
  //   console.log(props);
  return (
    <div>
      <h2>ContactsList</h2>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact}/>
          ))}
        </ul>
      ) : (
        "No Contacts Yet!"
      )}
    </div>
  );
}

export default ContactsList;
