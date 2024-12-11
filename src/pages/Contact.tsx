import ContactInformation from "@/components/Conatact/ContactInformation";
import ContactForm from "@/components/Conatact/ContactForm";
import CommonHeaderContainer from "@/components/common/CommonHeaderContainer";
import MotionContainer from "@/components/common/MotionContainer";

const Contact = () => {
  return (
    <section className="py-20 bg-primary" id="contact">
      <div className="container px-4 mx-auto">
        <CommonHeaderContainer>
          <>Get In Touch</>
        </CommonHeaderContainer>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <MotionContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactInformation />
          </MotionContainer>
          <MotionContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </MotionContainer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
