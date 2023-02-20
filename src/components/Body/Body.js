import React from "react";
import { Clients } from "../Clients/Clients";
import { ContactUs } from "../ContactUs/ContactUs";
import { Deliver } from "../Delliver/Deliver";
import { Growth } from "../Growth/Growth";
import { Home } from "../Home/Home";
import { Offerings } from "../Offerings/Offerings";
import { Subscribe } from "../Subscribe/Subscribe";

export const Body = () => {
  return (
    <div>
      <Home />
      <Growth />
      <Offerings />
      <Deliver />
      <Subscribe />
      <Clients />
      <ContactUs />
      
    </div>
  );
};
