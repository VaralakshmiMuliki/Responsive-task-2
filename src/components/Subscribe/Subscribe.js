import React from "react";
import "./Subscribe.scss";
import "../../components/mediaQueris.scss";

export const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h1>
        Subscribe to our <span>newsletter</span>
      </h1>
      <p>
        You will receive newest information about our projects, <br/>investments
        partners and other important information.
      </p>

      <input placeholder="Enter Your email" className='user-email'/>
      <button className="send-btn">Send</button>
    </div>
  );
};
