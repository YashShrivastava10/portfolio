import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInformation = () => {
  return (
    <>
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
    </>
  );
};

export default ContactInformation;
