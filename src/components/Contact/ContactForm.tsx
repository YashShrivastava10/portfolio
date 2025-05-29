"use client";

import { sendEmail } from "@/utils/sendEmail";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Textarea,
} from "../ui";

export const ContactForm = () => {
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
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Send Me a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Yash Shrivastava"
              className="border-border/50"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="shrivastavayash10@gmail.com"
              className="border-border/50"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Project Collaboration"
              className="border-border/50"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or how I can help you..."
              className="border-border/50 min-h-[120px]"
              required
            />
          </div>

          <Button
            type="submit"
            className="group w-full font-medium"
            disabled={isLoading}
          >
            <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
