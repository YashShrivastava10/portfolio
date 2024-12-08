import { sendEmail } from "@/utils/sendEmail";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setIsLoading(true);
    const toastId = toast.loading("Sending...");

    const result = await sendEmail(form);

    if (result) {
      form.reset();
      toast.success("Thank You for contacting me!!", { id: toastId });
    } else {
      toast.error("Failed to send email. Please try again.", { id: toastId });
    }
    setIsLoading(false);
  };

  return (
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
        className="flex px-6 py-3 font-medium transition-colors rounded-lg bg-accent text-primary disabled:bg-secondary"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
