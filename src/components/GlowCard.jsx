import { useRef } from "react";
import githubLogo from "/github.png";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const cardEl = cardRefs.current[index];
    if (!cardEl) return;

    const rect = cardEl.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardEl.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <h3 className="text-white text-2xl font-semibold mt-2">Tech Stack</h3>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}

      {card.repoLink && (
        <div className="mt-4 text-right">
          <a
            href={card.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 inline-block cursor-pointer"
          >
            <img
              src={githubLogo}
              alt="GitHub Repo"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default GlowCard;