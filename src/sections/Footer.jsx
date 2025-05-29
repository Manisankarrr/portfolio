import { socialImgs } from "../constants";

const Footer = () => {
  // Add your actual social media URLs here
  const socialLinks = {
    insta: "https://instagram.com/_manishh.24_",
    git: "https://github.com/Manisankarrr",
    linkedin: "https://www.linkedin.com/in/manisankarrr/",
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => {
            // Get the corresponding URL for each social platform
            const socialUrl = socialLinks[socialImg.name];
            
            return (
              <a 
                key={index}
                href={socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="icon hover:scale-110 transition-transform duration-200"
              >
                <img 
                  src={socialImg.imgPath} 
                  alt={`${socialImg.name} icon`} 
                />
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Mani Sankar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;