import React from "react";

function Header() {
  return (
    <header className="header">
      <span className="star-icon-container">
        <img
          className="star-icon"
          src="./assets/images/icon-star.svg"
          alt="star icon"
          role="presentation"
        />
      </span>
      <h1 className="heading">FAQs</h1>
    </header>
  );
}

export default Header;
