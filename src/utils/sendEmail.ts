import emailjs from "@emailjs/browser";

export const sendEmail = async (
  form: Record<string, unknown>,
  template: "visit-portfolio" | "contact-form",
): Promise<boolean> => {
  try {
    const templatedId = {
      "contact-form": process.env.NEXT_PUBLIC_EMAILJS_CONTACT_FORM_TEMPLATEID!,
      "visit-portfolio":
        process.env.NEXT_PUBLIC_EMAILJS_VISIT_PORTFOLIO_TEMPLATEID!,
    };

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!,
      templatedId[template] ||
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_FORM_TEMPLATEID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_API_KEY!,
    );
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.log("Error sending email:", error);
    return false;
  }
};
