const Button = ({ text, className }) => {
  return (
    <a
      href="/DC Resume.pdf" // ✅ Correct path with encoded space
      target="_blank"
      rel="noopener noreferrer"
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
