import { use, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "../components/Alert";
import { Particles } from "../components/ContactBG";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = ({ type, message }) => {
    setAlertType(type);
    setAlertMessage(message);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(formData);
    try {
      console.log("Form submitted :", formData);
      await emailjs.send(
        import.meta.env.VITE_SERVICE_TEMP,
        import.meta.env.VITE_TEMP_ID,
        {
          from_name: formData.name,
          to_name: "Yash",
          from_email: formData.email,
          to_email: "yash.vasu2820@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_API_KEY
      );
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage({
        type: "success",
        message: "Message sent successfully!",
      });
    } catch (error) {
      setLoading(false);
      console.error("Error sending email:", error);
      showAlertMessage({
        type: "danger",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section
      className="relative flex items-center c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#fff"
        refresh
      />
      {alert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Contact Me</h2>
          <p className="font-normal text-neutral-400">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              autoComplete="message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!loading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};
