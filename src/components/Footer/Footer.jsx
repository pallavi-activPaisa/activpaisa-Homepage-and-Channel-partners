"use client";
import React from "react";
import "./Footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-main">
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
            <p className="sub-title-footer">Check CIBIL Score</p>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p className="sub-title-footer">care@activpaisa.com</p>
            <p className="sub-title-footer ">
              C3, C Block, 4th Floor, <br />
              Sector 2, Noida, Uttar Pradesh (India) – 201305
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Notices Section */}
      <div className="footer-notices">
        <p>
          ActivPaisa does not charge any processing fees before the loan amount
          is disbursed. If anyone claims otherwise, please do not engage with
          them. Report such incidents immediately email us at
          care@activpaisa.com or by contacting us at +91 93184 86890.
        </p>

        <h4>Cybersecurity notice:</h4>
        <p>
          Beware of fraudulent activities by third parties falsely representing
          ActivPaisa. These scams may involve fake websites, apps, or social
          media profiles claiming to offer loans or investment opportunities in
          our name. We do not solicit payments outside our official platform.
          Access our official services via www.activpaisa.com
        </p>

        <h4>FinTech/Digital Lending Complaints:</h4>
        <p>
          For complaints related to digital lending, email care@activpaisa.com
          or call +91 93184 86890.
        </p>

        <h4>Grievances:</h4>
        <p>Name: Priyanka Singh</p>
        <p>
          Contact Number: +91 93184 86890 (Mon–Fri, 10:00 AM to 6:00 PM,
          excluding national holidays)
        </p>
        <p>Email: Priyanka@activpaisa.com</p>

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
