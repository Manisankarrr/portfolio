import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    
    
    <div id="work" ref={sectionRef} className="app-showcase">
      
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project-1.png" alt="disease prediction" />
            </div>
            <div className="text-content">
              <h2>
                Predictive Diagnosis System
              </h2>
              <p className="text-white-50 md:text-xl">
              Built a Streamlit-based web app that predicts multiple diseases by symptoms and specifically (e.g., diabetes, heart, liver) using machine learning models like SVM, Logistic Regression, and XGBoost. Enabled real-time user input, symptom analysis, and disease probability output.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project-2.png"
                  alt="Chit-chat"
                />
              </div>
              <h2>Real-Time Chat Application</h2>
              <p className="text-white-50 md:text-xl">
              Built a real-time chat app with user authentication, public/private chat rooms, and live messaging. Integrated Socket.IO for real-time, bi-directional communication between clients and server. Designed responsive UI with MERN Stack.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project-3.png" alt="Optimal XI insights" />
              </div>
              <h2>Optimal XI Insights using Data Analytics</h2>
              <p className="text-white-50 md:text-xl">
              Analyzed cricket data from ESPN Cricinfo to recommend optimal team lineups based on real-time player performance metrics. Visualized key stats like batting averages, bowling economy, and match scores using Power BI dashboards.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
