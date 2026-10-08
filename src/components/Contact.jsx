import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xoejekrg");
  const [formError, setFormError] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setFormError("");

    const formData = new FormData(event.currentTarget);

    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    // Required fields
    if (!name || !email || !message) {
      setFormError("All fields are required.");
      return;
    }

    // Name validation
    if (name.length < 3) {
      setFormError("Name must be at least 3 characters long.");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    // Message validation
    if (message.length < 10) {
      setFormError("Message should be at least 10 characters long.");
      return;
    }

    // Send to Formspree
    await handleSubmit(event);
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="section contact">
        <div className="container">

          <div className="section-label">
            05 — CONTACT
          </div>

          <div className="contact-success">
            <h2>
              Message <span>sent successfully.</span>
            </h2>

            <p>
              Thank you for reaching out. I will get back to you
              as soon as possible.
            </p>

            <button
              type="button"
              className="button button-primary"
              onClick={() => window.location.reload()}
            >
              Send Another Message
            </button>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">

        <div className="section-label">
          05 — CONTACT
        </div>

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-intro">

            <h2>
              Let's build something
              <span>useful together.</span>
            </h2>

            <p>
              Have a project, internship opportunity, or idea you'd
              like to discuss? Feel free to get in touch.
            </p>

            <div className="contact-details">

              <a href="mailto:muddassirfarhan07@gmail.com">
                <span>Email</span>
                muddassirfarhan07@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-muddassir-farhan/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                Connect with me
              </a>

            </div>

          </div>

          {/* FORM */}
          <form
            className="contact-form"
            onSubmit={handleFormSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                minLength="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                minLength="10"
              ></textarea>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {formError && (
              <p className="form-message form-error">
                {formError}
              </p>
            )}

            {state.errors && (
              <p className="form-message form-error">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="button button-primary"
              disabled={state.submitting}
            >
              {state.submitting
                ? "Sending..."
                : "Send Message →"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;