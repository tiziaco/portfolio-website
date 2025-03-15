'use client';

import { useState } from 'react';
import { z } from "zod";
import { useReCaptcha } from "next-recaptcha-v3";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sendContactForm } from '@/actions/sendEmail';
import { SubmitFormButton } from '@/components/ui/submit-button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; 
import { toast } from "sonner";

// Form validation schema
const formSchema = z.object({
  fullname: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { executeRecaptcha } = useReCaptcha();
  const [isPending, setIsPending] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: ""
    }
  });

  // Form submission handler
  const onSubmit = async (values: FormValues) => {
    setIsPending(true);
    
    if (!executeRecaptcha) {
      toast.error('reCAPTCHA not loaded');
      setIsPending(false);
      return;
    }

    try {
      const token = await executeRecaptcha('contact_form');
      const formData = new FormData();
      
      // Append form values to FormData
      formData.append('fullname', values.fullname);
      formData.append('email', values.email);
      formData.append('message', values.message);
      formData.append('token', token);
      
      // Send the form data
      const result = await sendContactForm({ success: false, message: '' }, formData);
      
      if (result.success) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while sending the message');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full max-w-md" method='POST'>
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="pl-3 text-sm text-muted-foreground">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name"
                    className="form_input form_highlight"
                    {...field} 
                  />
                </FormControl>
                <div className="min-h-[20px]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="pl-3 text-sm text-muted-foreground">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="your@email.com"
                    type="email"
                    className="form_input form_highlight"
                    {...field} 
                  />
                </FormControl>
                <div className="min-h-[20px]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="pl-3 text-sm text-muted-foreground">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Your message"
                    className="form_textarea form_highlight"
                    {...field} 
                  />
                </FormControl>
                <div className="min-h-[20px]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <div className="flex justify-end">
            <SubmitFormButton
              text="Send Message"
              isLoading={isPending}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}

