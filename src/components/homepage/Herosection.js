import React from "react";
import PersonalLoan from "./features/Loan-types/PersonalLoan";

const Herosection = () => {
  return (
    <div
      style={{
        marginTop: "var(--spacing-sp-72, 4.5rem)", // fallback 4.5rem if not defined
      }}
    >
      <PersonalLoan />
    </div>
  );
};


export default Herosection;
