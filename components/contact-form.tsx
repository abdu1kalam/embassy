"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Resend } from "resend";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";

import { useToast } from "./ui/use-toast";
import { Loader } from "./loader";

const contactSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  message: z.string().min(10, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState<boolean>(false);
  const { toast } = useToast();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //confirm email and message field are not empty
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({ title: "Email and message are required fields" });
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
        }),
      });

      // handle success
      if (response.ok) {
        toast({ title: "Email Sent Successfully!" });
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        toast({ title: "There was a problem sending email. Pls try again!" });
      }
    } catch (error) {
      console.log("Error sending email:", error);
      toast({ title: "There was a problem sending email. Pls try again!" });
    } finally {
      setIsSending(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border-none p-0"
      data-aos="fade-down"
    >
      <input
        name="fullName"
        type="text"
        placeholder="Your full name"
        value={formData.fullName}
        onChange={handleChange}
        className="text-black w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="your-email@mail.com"
        value={formData.email}
        onChange={handleChange}
        className="text-black w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <textarea
        name="message"
        cols={30}
        rows={5}
        placeholder="...type your message"
        value={formData.message}
        onChange={handleChange}
        className="text-black w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <Button
        type="submit"
        className="w-auto bg-primary  hover:shadow-lg hover:opacity-90 text-background font-bold py-2 px-4 rounded"
      >
        {isSending && <Loader color="#000" />} &nbsp; Send Message
      </Button>
    </form>
  );
}
