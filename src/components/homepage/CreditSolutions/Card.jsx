import React from "react";
import "./creditSolutions.css";
import Image from "next/image";

const Card = ({ title, desc, link, image }) => {
  return (
    <div className="loan-card">
      <div className="card-image">
        <Image
          src={image} // <-- dynamic image
          alt={title}
          width={319}
          height={448}
          className="card-img object-cover"
          // comment for test purpose
        />
      </div>

      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>

      <p className="card-link">
        {link}
        <Image width={20} height={20} src="/Icons/btnproduct.svg" alt="arrow" />
      </p>
    </div>
  );
};

export default Card;
