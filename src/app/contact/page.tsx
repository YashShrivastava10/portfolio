import { ContactForm } from "@/components/Contact/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { contactInfo } from "@/constants/contactInfo";
import { socialLinks } from "@/constants/socialLinks";
import { Clock } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Yash Shrivastava | Full-Stack Web Developer for Hire",
  description:
    "Get in touch with Yash Shrivastava for full-stack web development opportunities, project collaborations, or freelance work. Let's build something great together.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE}/contact`,
  },
};

const ContactPage = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-12 sm:mt-10">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-muted-foreground mx-auto text-center text-lg leading-relaxed">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you. Let&apos;s create something amazing together!
        </p>
      </div>
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
        <ContactForm />
        <div className="space-y-4">
          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info) => (
                <Link
                  key={info.label}
                  href={info.href}
                  className="group flex items-center gap-4 rounded-lg transition-colors"
                >
                  <info.icon className="text-primary bg-primary/10 group-hover:bg-primary/20 flex size-8 shrink-0 rounded-lg p-2 sm:size-8 md:size-9" />
                  <div className="min-w-0">
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground truncate">
                      {info.value}
                    </p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Connect With Me</CardTitle>
              <p className="text-muted-foreground">
                Follow me on social media for updates and insights.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2">
                {socialLinks
                  .filter((link) => link.label !== "Email")
                  .map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`border-border/50 hover:border-primary/50 flex items-center gap-2 rounded-lg border p-4 transition-all`}
                    >
                      <social.icon className="size-5" />
                      <span className="font-medium">{social.label}</span>
                    </Link>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <div>
            <Card className="from-primary/5 to-primary/10 dark:border-primary/20 bg-gradient-to-r">
              <CardContent>
                <div className="text-center">
                  <div className="bg-primary/20 mx-auto mb-4 flex size-12 items-center justify-center rounded-full">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Available for Freelance
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    I&apos;m currently available for freelance projects and
                    collaborations.
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Available Now
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
