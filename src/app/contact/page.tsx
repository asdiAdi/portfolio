"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { WEB3_API } from "@/lib/config";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!WEB3_API) {
      return;
    }

    setIsSubmitting(true);
    toast("Sending....");
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", WEB3_API);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      const resetForm = e.target as HTMLFormElement;
      resetForm.reset();
      toast("Form Submitted Successfully");
    } else {
      toast("Error", { description: data });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="m-auto mt-16 w-full max-w-2xl space-y-8 px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Have a question or interested in working together? Feel free to reach
          out!
        </p>
      </div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            name="email"
            required
          />
        </div>
        {/*<div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Enter subject (optional)"
            type="text"
            name="subject"
          />
        </div>*/}
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            className="min-h-[100px]"
            name="message"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
          loadingText="Submitting..."
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
