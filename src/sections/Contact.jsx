import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastProgress, setToastProgress] = useState(100);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
      setShowToast(true);
      setToastProgress(100); // Reset progress
    } catch (err) {
      console.error(err);
      // Show error toast if needed
    } finally {
      setLoading(false);
    }
  };

  // Handle toast progress animation
  useEffect(() => {
    let progressInterval;
    
    if (showToast) {
      progressInterval = setInterval(() => {
        setToastProgress(prev => {
          const newProgress = prev - (100 / 60); // 60 frames over 3 seconds
          if (newProgress <= 0) {
            clearInterval(progressInterval);
            setTimeout(() => setShowToast(false), 300); // Fade out delay
            return 0;
          }
          return newProgress;
        });
      }, 50); // 50ms interval for smooth animation
    }
    
    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [showToast]);

  return (
    <section id="contact" className="relative flex-center section-padding">
      {/* Enhanced Toast Notification with 3-second timer */}
      <div
        className={`
          fixed bottom-6 left-1/2 transform -translate-x-1/2
          bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-3 rounded-xl shadow-xl
          transition-all duration-300 flex items-center space-x-3 z-50
          ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Email sent successfully!</span>
        </div>
        
        {/* Curved Progress Indicator with timer */}
        <div className="flex items-center">
          <div className="relative w-8 h-8">
            <svg className="w-8 h-8" viewBox="0 0 36 36">
              {/* Background circle */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
                opacity="0.3"
              />
              {/* Progress circle */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="100"
                strokeDashoffset={100 - toastProgress}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>
            
            {/* Timer text */}
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
              {Math.ceil(toastProgress / 33.3)}
            </span>
          </div>
          <span className="ml-1 text-sm">s</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16 gap-10">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {/* name, email, message fields */}
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>
                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;