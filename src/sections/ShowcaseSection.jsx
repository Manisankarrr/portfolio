import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  const sectionRef = useRef(null);
  const awsRef = useRef(null);
  const verizonRef = useRef(null);
  const gcpRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    const cards = [awsRef.current, verizonRef.current, gcpRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
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
    <div id="certifications" ref={sectionRef} className="app-showcase">
      

      <div className="w-full mt-8 md:mt-12">
        <div className="showcaselayout">
          {/* AWS Certificate */}
          <div ref={awsRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/aws-cert.png" alt="AWS Certificate" />
            </div>
            <div className="text-content">
              <h2>AWS Cloud Practitioner</h2>
              <p className="text-white-50 md:text-xl">
                Completed the AWS Cloud Practitioner certification, gaining foundational knowledge of cloud services, pricing models, and AWS architectural principles.
              </p>
              <a href="https://www.credly.com/badges/f0727a5a-d87d-4184-88a6-21f6a4b7bf49/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/credly.svg"
                  alt="AWS Certificate"
                  className="w-6 h-6 mt-2 hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* Verizon Job Simulation */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={verizonRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/verizon.png" alt="Verizon Job Simulation" />
              </div>
              <h2>Verizon Cloud Platform Job Simulation</h2>
              <p className="text-white-50 md:text-xl">
                Completed Forage's Verizon Cloud Platform Job Simulation. Worked on real-world DevOps tasks including cloud migration, platform scalability, and system reliability.
              </p>
              <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/uu47f3odrfruEWjKw/aNJGnRtgfiK5fQqcR_uu47f3odrfruEWjKw_Ygx4c4oSmSF6hpjNR_1738045790558_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/forage.png"
                  alt="Verizon Badge"
                  className="w-6 h-6 mt-2 hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>

            {/* Google Cloud Fundamentals */}
            <div className="project" ref={gcpRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/gcp.png" alt="Google Cloud Fundamentals" />
              </div>
              <h2>Google Cloud Fundamentals: Core Infrastructure</h2>
              <p className="text-white-50 md:text-xl">
                Gained practical experience with core GCP services including Compute Engine, Cloud Storage, IAM, and Kubernetes, focusing on building scalable cloud-native apps.
              </p>
              <a href="https://www.cloudskillsboost.google/public_profiles/7901c042-c6da-4320-8392-345d63320964/badges/16156534?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/google-cloud.png"
                  alt="Google Cloud Certificate"
                  className="w-6 h-6 mt-2 hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;