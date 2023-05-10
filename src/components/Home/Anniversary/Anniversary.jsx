import React from "react";
import "./anniversary.css";
import Jump from "./Joy.svg";

function Anniversary() {
  return (
    <>
      <section className="anniversary">
        <img src={Jump} alt="" />
        <div id="marquee">
          <p>MFMCF FUOYE is celebreting her 10th year anniversary...</p>
        </div>
        <div className="container">
          <div className="flex">
            <pre>
              “It's going to be mightful. <br />
              Ten years no be beans.”
            </pre>
            <img src="../images/anniversary.jpeg" alt="Anniversary" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Anniversary;
