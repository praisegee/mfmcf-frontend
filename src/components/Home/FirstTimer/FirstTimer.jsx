import React, { useState } from "react";
import "./firsttimer.css";

function FirstTimer() {
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    hostelAddress: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/members/";
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: userData.firstName,
        last_name: userData.lastName,
        department: userData.department,
        hostel_address: userData.hostelAddress,
        phone_number: userData.phoneNumber,
        date_of_birth: userData.dateOfBirth,
      }),
    });
    const res = await req.json();
    // Response
    console.log("Response: ", res);
  }

  return (
    <>
      <section className="firsttimer">
        <div className="container">
          <div className="box">
            <h3>Are you new to the family?</h3>
            <p>
              You are so special to us and we're really glad to have you in our
              midst...
              <pre>
                May the Lord God bless you real good!
                <br />
                He brought you here, to bless you life <br />
                May the Lord God Bless you real good!
              </pre>
            </p>
          </div>
          <div className="button" onClick={() => setModal(!modal)}>
            Let's know you more
          </div>
        </div>
      </section>
      <div id="modal" className={modal ? "modal-show" : "modal-hide"}>
        <div className="form">
          <div className="close-btn" onClick={() => setModal(!modal)}>
            X
          </div>
          <p>Please, take your time to fill out this form.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              name="firstName"
              value={userData.firstName}
              required
              placeholder="First Name"
            />
            <input
              type="text"
              onChange={handleChange}
              name="lastName"
              value={userData.lastName}
              required
              placeholder="Last Name"
            />
            <input
              type="text"
              onChange={handleChange}
              name="department"
              value={userData.department}
              required
              placeholder="Department"
            />
            <input
              type="text"
              onChange={handleChange}
              name="hostelAddress"
              value={userData.hostelAddress}
              required
              placeholder="Hostel Address"
            />
            <input
              type="tel"
              onChange={handleChange}
              name="phoneNumber"
              value={userData.phoneNumber}
              required
              placeholder="Phone Number"
            />
            <input
              type="date"
              onChange={handleChange}
              name="dateOfBirth"
              value={userData.dateOfBirth}
              required
              placeholder="DOB"
            />
            <button className="button btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FirstTimer;
