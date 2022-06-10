import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactme = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hc6xctu",
        "template_l1frumc",
        form.current,
        "sQizMiDBViO9v1lET"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="lg:container mx-auto">
      <div class="card-body w-7/12 mx-auto">
        <h1 className="text-5xl font-semibold">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="name"
              name="user_name"
              placeholder="Type here your Name"
              class="input input-bordered input-primary w-full "
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>

            <input
              type="email"
              name="user_email"
              placeholder="Type here your Email"
              class="input input-bordered input-primary w-full "
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Your Message</span>
            </label>

            <textarea
              type="text"
              name="message"
              placeholder="Type here your Email"
              class="input input-bordered input-primary w-full h-32 "
            ></textarea>
          </div>
          <div class="form-control mt-6">
            <input
              type="submit"
              value="submit"
              class="btn btn-primary w-3/12 mx-auto"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactme;
