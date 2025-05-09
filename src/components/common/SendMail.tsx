"use client";

import emailjs from "emailjs-com";
import { useEffect } from "react";

const SendMail = () => {
  useEffect(() => {
    const sendVisitorInfo = async () => {
      try {
        const res = await fetch("https://ipapi.co/json");
        const data = await res.json();

        await emailjs.send(
          "service_jdkt4ok",
          "template_p3cge3n",
          {
            user_agent: navigator.userAgent,
            language: navigator.language,
            city: data.city,
            region: data.region,
            country: data.country_name,
            ip: data.ip,
            time: new Date().toString(),
          },
          "Rby0PButTeCbSsU2x"
        );

        console.log("Visitor info sent via email.");
      } catch (error) {
        console.error("Failed to send visitor info:", error);
      }
    };

    sendVisitorInfo();
    // if (process.env.NODE_ENV === "production") {
    // }
  }, []);
  return <></>;
};

export default SendMail;
