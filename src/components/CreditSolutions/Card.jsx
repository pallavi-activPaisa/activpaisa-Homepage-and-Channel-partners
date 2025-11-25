import React from "react";
import "./creditSolutions.css";
import Image from "next/image";
const Card = ({ title, desc, link }) => {
  return (
    <div className="loan-card">
      <div className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
      <p className="card-link">
        {link}
        <Image
          width={20}
          height={20}
          src="/Icons/btnproduct.svg"
          alt="images"
        />
      </p>
    </div>
  );
};

export default Card;
