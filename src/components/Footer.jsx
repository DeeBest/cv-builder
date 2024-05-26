import FooterIcon from './FooterIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="contact-icons">
        <FooterIcon
          link="mailto:simphiwedladla8@gmail.com"
          imgPath="./../src/assets/icons/gmail.png"
          imgAltText="gmail-icon"
          imgClass="contact-icon"
        />
        <FooterIcon
          link="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/"
          imgPath="./../src/assets/icons/linkedin.png"
          imgAltText="linkedin-icon"
          imgClass="contact-icon"
        />
        <FooterIcon
          link="https://github.com/DeeBest"
          imgPath="./../src/assets/icons/github.webp"
          imgAltText="github-icon"
          imgClass="contact-icon"
        />
      </div>
      <p>Created By &copy;Simphiwe {currentYear}.</p>
    </footer>
  );
};
export default Footer;