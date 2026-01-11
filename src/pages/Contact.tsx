import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Community Lane", "Vasant Kunj, New Delhi", "India 110070"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 123 456 7890", "+91 987 654 3210"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@padminisocialimpact.org", "support@padminisocialimpact.org"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted overflow-hidden">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              We Would Love to Hear From You
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our programmes? Want to get involved? 
              Reach out to us and we will be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, dIndex) => (
                        <p key={dIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-background border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="mb-2 block">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-2 block">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="mb-2 block">Subject *</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-11 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partnership">Partnership</option>
                        <option value="programmes">Programmes</option>
                        <option value="support">Support Request</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-2 block">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted">
        <div className="w-full h-full flex items-center justify-center bg-primary/5">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              Interactive map would be displayed here
            </p>
            <p className="text-sm text-muted-foreground">
              123 Community Lane, Vasant Kunj, New Delhi - 110070
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="section-padding bg-hope-gradient">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                Want to Donate?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Support our mission with a contribution
              </p>
              <Button variant="hero" size="default" asChild>
                <a href="/get-involved">Donate Now</a>
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                Looking for Support?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Apply for our programmes and grants
              </p>
              <Button variant="heroOutline" size="default" asChild>
                <a href="/apply">Apply Today</a>
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                Want to Volunteer?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Join our team of dedicated volunteers
              </p>
              <Button variant="heroOutline" size="default" asChild>
                <a href="/get-involved">Join Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
