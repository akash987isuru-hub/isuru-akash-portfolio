import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";
import "./Contact.css";

const EMAIL = "isuru.a.mallawa@gmail.com";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus("error");
      return;
    }

    const formData = new FormData(form.current);
    const senderName = String(formData.get("user_name") || "").trim();
    const senderEmail = String(formData.get("user_email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          // Recipient fields - set EmailJS Template > To Email to {{to_email}}
          to_name: "Isuru Akash",
          to_email: EMAIL,

          // Sender/reply fields. Multiple aliases are included so the template
          // remains compatible with both the old and the updated field names.
          from_name: senderName,
          from_email: senderEmail,
          reply_to: senderEmail,
          user_name: senderName,
          user_email: senderEmail,
          subject,
          message,
        },
        { publicKey },
      );

      form.current?.reset();
      setStatus("success");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-heading contact-heading reveal">
          <span>06 — Contact</span>
          <h2>Have an idea? Let’s make it real.</h2>
          <p>
            I’m open to internship opportunities, collaborations and software
            projects where I can learn, contribute and build useful products.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info reveal">
            <div className="contact-availability-card">
              <div className="contact-orbit-dot" />
              <span>Available for opportunities</span>
              <strong>Let’s create something worth shipping.</strong>
              <p>
                The fastest way to reach me is email. You can also connect with
                me on LinkedIn or explore my work on GitHub.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item contact-email-item">
                <div className="contact-item-icon"><FaEnvelope /></div>
                <div>
                  <span>Email</span>
                  <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
                </div>
                <button type="button" className="copy-email-btn" onClick={handleCopyEmail} aria-label="Copy email address">
                  {copied ? <FaCheck /> : <FaCopy />}
                  <em>{copied ? "Copied" : "Copy"}</em>
                </button>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><FaLocationDot /></div>
                <div>
                  <span>Location</span>
                  <p>Polonnaruwa, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="contact-social-links contact-social-links-v2">
              <a href="https://github.com/akash987isuru-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub /><span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/isuru-akash/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn /><span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper reveal">
            <div className="form-top">
              <span>Start a conversation</span>
              <h3>Tell me what you’re working on.</h3>
            </div>

            {status === "success" ? (
              <div className="message-state success-state">
                <div><FaCheck /></div>
                <span>Message sent</span>
                <h3>Thanks for reaching out.</h3>
                <p>Your message was sent successfully. I’ll get back to you as soon as possible.</p>
                <button type="button" onClick={() => setStatus("idle")}>Send another message</button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="user_name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="user_email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Project, internship, collaboration..." required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="6" placeholder="Tell me about the idea..." required />
                </div>

                {status === "error" && (
                  <div className="form-error" role="alert">
                    Message could not be sent. Please try again or email me directly at {EMAIL}.
                  </div>
                )}

                <button type="submit" className="send-message-btn" disabled={status === "sending"}>
                  <FaPaperPlane />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
