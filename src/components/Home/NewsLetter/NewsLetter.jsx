import React from "react";
import "./newsletter.css";

function NewsLetter() {
  return (
    <>
      <section className="newsletter">
        <div className="text">
          <h1>Newsletter</h1>
          <p>
            Subscribe to our newsletter to get constant dose of spiritual
            injections.
          </p>
        </div>
        <form action="">
          <div className="form-group">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <button className="button" type="submit">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}

export default NewsLetter;
