import React, { FormEvent, useState } from "react";

import "./Contact.scss";
import Shake from "assets/shake.svg";

const Contact = React.memo(() => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={Shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
          {message && <span>Thanks, I&apos;ll reply ASAP =)</span>}
        </form>
      </div>
    </div>
  );
});

export default Contact;
