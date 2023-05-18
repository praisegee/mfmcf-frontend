import { useState } from "react";
import "./newsletter.css";

function NewsLetter() {
  const [userData, setUserData] = useState({ name: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  }

  function submitData(e) {
    e.preventDefault();
    alert(`Name:  ${userData.name} \nEmail: ${userData.email}`);
  }

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
        <form onSubmit={submitData}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              value={userData.name}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              value={userData.email}
              placeholder="Email"
            />
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
