import footerImg from "../../assets/images/footer-img.svg";
import footerImgSecond from "../../assets/images/footer-img-second.svg";
import FooterItem from "../FooterItem/FooterItem";
import footerContactLogo from "../../assets/images/footer-contact-logo.svg";
const Footer = () => {
  return (
    <footer className="site-footer">
      <img
        src={footerImg}
        className="footer-img-first"
        width={266}
        height={266}
        alt="footer img"
      />
      <img src={footerImgSecond} className="footer-img-second" height={55} alt="footer frame" />
      <div className="footer-line"></div>
      <div className="container">
        <div className="footer-content-wrapper">
          <ul className="footer-list">
            <FooterItem title={"UX Designer"} />
            <FooterItem title={"UI Designer"} />
            <FooterItem title={"Protected"} />
          </ul>
          <ul className="footer-list">
            <FooterItem title={"Style Guide"} />
            <FooterItem title={"Licenses"} />
            <FooterItem title={"Changelog"} />
          </ul>
          <div className="footer-contact-wrapper">
            <p className="footer-contact-text">
              Interested in working together? Drop me a line
            </p>
            <button className="footer-contact-btn">
              <img
                src={footerContactLogo}
                width={26}
                height={26}
                alt="contact logo"
              />
              <span>Write Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-line line-second"></div>
      <p className="footer-text">
        Copyright © UIUXer | Designed by VictorFlow Templates - Powered by
        Webflow
      </p>
    </footer>
  );
};

export default Footer;
