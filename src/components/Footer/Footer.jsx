"use client";
import React from "react";
import "./Footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-main w-[1440px] mt-[72px]">
      {/* Top section: Brand + Columns + Notices */}
      <div className="footer-top">
        {/* Brand Section */}
        <div className="footer-brand">
          <Image
            src="/Brand/logo footer.svg"
            alt="ActivPaisa Logo"
            width={170}
            height={43.8689}
            className="footer-logo"
          />
          <p className="footer-desc">
            Simplify borrowing with ActivPaisa. Compare and choose the right
            financial products from 100+ leading banks and NBFCs to match your
            needs
          </p>
          <div className="footer-social">
            <div className="icon-box">
              <Image
                src="/Icons/instagram.svg"
                alt="Instagram"
                width={28}
                height={28}
              />
            </div>
            <div className="icon-box">
              <Image
                src="/Icons/youtube.svg"
                alt="YouTube"
                width={28}
                height={28}
              />
            </div>
            <div className="icon-box">
              <Image
                src="/Icons/linkdin.svg"
                alt="LinkedIn"
                width={28}
                height={28}
              />
            </div>
            <div className="icon-box">
              <Image
                src="/Icons/fb.svg"
                alt="Facebook"
                width={28}
                height={28}
              />
            </div>

            <div className="icon-box">
              <Image src="/Icons/x.svg" alt="Twitter" width={28} height={28} />
            </div>
          </div>
        </div>

        {/* Columns Section */}
        <div className="footer-columns">
          <div className="footer-col">
            <h4>About Us</h4>
            <p className="sub-title-footer">About ActivPaisa</p>
            <p className="sub-title-footer">Contact Us</p>
            <p className="sub-title-footer">Career</p>
            <p className="sub-title-footer">In the News</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <p className="sub-title-footer">Personal Loan</p>
            <p className="sub-title-footer">Business Loan</p>
            <p className="sub-title-footer">Professional Loan</p>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <p className="sub-title-footer">EMI Calculator</p>
            <p className="sub-title-footer">Check Eligibility</p>
            <p className="sub-title-footer">Check Credit Score</p>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p className="sub-title-footer">care@activpaisa.com</p>
            <p className="sub-title-footer ">
              C3, C Block, 4th Floor, Sector 2, Noida, Uttar Pradesh
              <br />
              (India) - 201305
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Notices Section */}
      <div className="footer-notices">
        <p>
          ActivPaisa does not charge any processing fee before your loan is
          disbursed. If anyone claims otherwise, please do not engage. Report
          such incidents immediately at care@activpaisa.com or +91 97739 79796.
        </p>

        <h4>Cybersecurity notice:</h4>
        <p>
          Beware of fraudulent websites, mobile apps, or social media profiles
          falsely using the ActivPaisa name. We never ask for payments outside
          our official platform. Always access our services only via
          www.activpaisa.com. If you suspect fraud or phishing, please contact
          us immediately.
        </p>

        <h4>FinTech/Digital Lending Complaints:</h4>
        <p>
          For issues related to digital lending, write to care@activpaisa.com or
          call +91 97739 79796. If your concern is not resolved within the
          stipulated timeline, you may escalate it to our Grievance Redressal
          Officer.
        </p>

        <h4>Grievance Redressal Officer:</h4>
        <p>Name: Priyanka Singh</p>
        <p>Contact : +91 97739 79796</p>
        <p>
          Availability: Monday to Friday, 10:00 AM to 6:00 PM (excluding
          national holidays)
        </p>
        <p>Email: care@activpaisa.com</p>

        <p className="trust-text">
          Your trust and security are our priorities.
        </p>
      </div>
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom-container">
        <div className="footer-bottom-links">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Disclaimer</span>
        </div>

        <div className="footer-copy">
          <p className="mb-[8px]">Copyright © 2019 All Rights Reserved</p>
          <p className="align-text-bottom">
            Vaultify Marketing & Consulting Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
