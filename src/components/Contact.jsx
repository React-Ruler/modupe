import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
  useEffect(() => {
    saySuccessful();
  }, []);

  const saySuccessful = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your message has been sent!",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_idkjcja",
        "template_9hx2v0j",
        form.current,
        "7uT-0qXhiGh_qBfMi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id={`contact`} className={`section is-small`}>
      <div className={`container`}>
        <h1
          className={`title heading__text is-size-1-desktop is-size-2-mobile`}>
          Contact
        </h1>
        <form
          className={`columns is-centered`}
          id={`contact-form`}
          ref={form}
          onSubmit={sendEmail}>
          <div className={`column is-half`}>
            <div className={"field"}>
              <div className={`control`}>
                <input type="hidden" name="to_name" value="ONeal Ombu" />
              </div>
            </div>
            <div className={`field`}>
              <div className={`control`}>
                <input
                  name="user_name"
                  className={`input px-5 py-5`}
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className={`field`}>
              <div className={`control`}>
                <input
                  name="user_email"
                  className={`input px-5 py-5`}
                  type="email"
                  placeholder="Email address..."
                  required
                />
              </div>
            </div>

            <div className={`field`}>
              <div className={`control`}>
                <textarea
                  name="message"
                  className={`textarea px-5 py5`}
                  placeholder="Write message here..."
                  rows={`10`}
                  cols={`30`}
                  required></textarea>
              </div>
            </div>

            <div className={`field`}>
              <div className={`control`}>
                <button
                  className={`button is-size-6 has-text-weight-medium is-uppercase is-fullwidth is-primary has-background-dark px-5 py-5`}
                  value="Send"
                  type="submit"
                  onClick={saySuccessful}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
