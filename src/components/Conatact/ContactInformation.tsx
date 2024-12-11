import { contactInfo } from "@/constants/contactInfoData";
import React from "react";

const ContactInformation = () => {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
      <div className="space-y-4">
        {contactInfo.map((contact) => (
          <div className="flex items-center gap-4" key={contact.value}>
            <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] flex justify-center items-center rounded-lg bg-secondary">
              <label className="text-accent">{contact.icon}</label>
            </div>
            <div>
              <p className="font-medium text-labelColor">{contact.label}</p>
              {contact.label === "Location" ? (
                <p className="text-md lg:text-lg text-textColor text-wrap">
                  {contact.value}
                </p>
              ) : (
                <a
                  href={contact.href}
                  className="text-md lg:text-lg text-textColor hover:text-accent"
                >
                  {contact.value}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactInformation;
