import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { sendEmail } from "../utils/sendEmail";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const form = e.currentTarget;
    const result = await sendEmail(form);
    setIsLoading(false);
    if (result) {
      alert("Thank You for contacting Me !!");
      form.reset();
    }
  };

  return (
    <section className="py-20 bg-primary" id="contact">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-center"
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-accent" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:shrivastavayash10@gmail.com"
                    className="text-textColor/80 hover:text-accent"
                  >
                    shrivastavayash10@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-accent" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+917745906879"
                    className="text-textColor/80 hover:text-accent"
                  >
                    +91 7745906879
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-accent" size={24} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-textColor/80">Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-textColor focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-textColor focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-textColor focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex px-6 py-3 font-medium transition-colors rounded-lg bg-accent text-primary hover:bg-accent/90"
              >
                {isLoading && (
                  <svg
                    className="w-5 h-5 mr-3 border-[3px] rounded-full border-secondary border-t-accent animate-spin"
                    viewBox="0 0 24 24"
                  />
                )}
                {!isLoading && "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
