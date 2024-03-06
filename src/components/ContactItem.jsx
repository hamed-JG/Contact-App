import React from "react";

function ContactItem({ data: { id, name, lastName, email, phone } }) {
  return (
    <div>
      <li key={id}>
        <p>
          {name} {lastName}
        </p>
        <p>
          <span>✉ {email}</span>
        </p>
        <p>
          <span>📞</span> {phone}
        </p>
        <button>🗑</button>
      </li>
    </div>
  );
}

export default ContactItem;
