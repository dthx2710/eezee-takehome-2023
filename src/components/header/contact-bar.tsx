import React from "react";
import CountryButton from "./country-button";
import ContactButton from "./contact-button";

import styles from "./header.module.css";

const ContactBar = () => {
  return (
    <div className={`flex items-center justify-between ${styles.contactbar}`}>
      <div className="min-w-0 flex-1 py-2 px-8 flex max-w-screen-2xl mx-auto">
        <div className="mr-8">
          <CountryButton />
        </div>
        <div>
          <ContactButton />
        </div>
      </div>
      
    </div>
  );
};

export default ContactBar;
