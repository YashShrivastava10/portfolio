"use client";

import { sendEmail } from "@/utils/sendEmail";
import { useEffect } from "react";

export const SendMail = () => {
  useEffect(() => {
    const sendVisitorInfo = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_VISIT_API!);
        const data = await res.json();

        const form = {
          user_agent: navigator.userAgent,
          city: data.city,
          region: data.region,
          country: data.country_name,
          ip: data.ip,
        };
        await sendEmail(form, "visit-portfolio");

        console.log("Visitor info sent via email.");
      } catch (error) {
        console.error("Failed to send visitor info:", error);
      }
    };

    if (process.env.NODE_ENV === "production") {
      sendVisitorInfo();
    }
    sendVisitorInfo();
  }, []);
  return <></>;
};
