import emailjs from "@emailjs/browser";

export const sendEmail = async (form: HTMLFormElement): Promise<boolean> => {
  try {
    await emailjs.sendForm(
      "service_jdkt4ok",
      "template_qmvgsrn",
      form,
      "Rby0PButTeCbSsU2x",
    );
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.log("Error sending email:", error);
    return false;
  }
};
