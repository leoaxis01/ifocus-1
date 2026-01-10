import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, courseCategories } from "@shared/schema";
import type { ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Hyderabad, Telangana, India",
    link: null,
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 94400 86767",
    link: "tel:+919440086767",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@ifocusinfosolutions.com",
    link: "mailto:info@ifocusinfosolutions.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 7:00 PM",
    link: null,
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col" data-testid="page-contact">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="overflow-visible">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div
                      className="text-center py-12 space-y-4"
                      data-testid="success-message"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. Our team will
                        get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <h2 className="font-serif text-2xl font-semibold">
                            Send us a Message
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Fill out the form below and we'll get back to you
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
                                    {...field}
                                    data-testid="input-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    {...field}
                                    data-testid="input-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    {...field}
                                    data-testid="input-phone"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="course"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Interested Course</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-course">
                                      <SelectValue placeholder="Select a course" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {courseCategories.map((category) => (
                                      <SelectItem
                                        key={category.id}
                                        value={category.id}
                                      >
                                        {category.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your learning goals..."
                                  className="min-h-[120px]"
                                  {...field}
                                  data-testid="input-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full gap-2"
                          disabled={mutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {mutation.isPending ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. We're
                  here to help you start your journey.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="overflow-visible"
                    data-testid={`contact-info-${index}`}
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Visit Our Office</h3>
                      <p className="text-sm text-muted-foreground">
                        Hyderabad, Telangana, India
                      </p>
                      <a
                        href="https://ifocusinfosolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-2 inline-block"
                      >
                        ifocusinfosolutions.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
