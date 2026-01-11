import { useState } from "react";
import { ArrowRight, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";

const eligibilityCriteria = [
  "Families with annual income below ₹2,00,000",
  "Children from marginalised communities",
  "Single-parent households or orphaned children",
  "Children with disabilities or special needs",
  "Families affected by natural disasters or crises",
  "First-generation learners seeking higher education",
];

const supportTypes = [
  {
    title: "Educational Support",
    description: "Scholarships, school fees, books, uniforms, and tutoring support for children.",
  },
  {
    title: "Safe Space Access",
    description: "Enrollment in our after-school centres with meals, mentoring, and activities.",
  },
  {
    title: "Family Welfare",
    description: "Healthcare support, nutrition assistance, and emergency relief for families.",
  },
  {
    title: "Skill Development",
    description: "Vocational training and capacity building programmes for youth and adults.",
  },
];

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    supportType: "",
    familySize: "",
    income: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your application. We will review it and contact you soon.");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted overflow-hidden">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Apply for Support
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              We Are Here to Help
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you or your family needs support, we encourage you to apply. Our team 
              will review your application and connect you with the right programmes 
              and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Types of Support Available
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a range of support services tailored to meet the diverse needs 
              of children and families.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportTypes.map((type, index) => (
              <div
                key={index}
                className="bg-muted rounded-2xl p-6 hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>

          {/* Eligibility */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Eligibility Criteria
                  </h3>
                  <p className="text-muted-foreground">
                    Our programmes are designed for those who need them most. You may 
                    be eligible if you meet one or more of the following criteria:
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-section-gradient">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Submit Your Application
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you within 
                5-7 working days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-card">
              <div className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="mb-2 block">Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your complete address"
                    rows={2}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="familySize" className="mb-2 block">Family Size *</Label>
                    <Input
                      id="familySize"
                      name="familySize"
                      type="number"
                      value={formData.familySize}
                      onChange={handleChange}
                      placeholder="Number of family members"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="income" className="mb-2 block">Annual Family Income *</Label>
                    <Input
                      id="income"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      placeholder="e.g., ₹1,50,000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="supportType" className="mb-2 block">Type of Support Needed *</Label>
                  <select
                    id="supportType"
                    name="supportType"
                    value={formData.supportType}
                    onChange={handleChange}
                    className="w-full h-11 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Select support type</option>
                    <option value="education">Educational Support</option>
                    <option value="safe-space">Safe Space Access</option>
                    <option value="family">Family Welfare</option>
                    <option value="skills">Skill Development</option>
                    <option value="multiple">Multiple / Comprehensive</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="description" className="mb-2 block">
                    Tell Us About Your Situation *
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please describe your situation and how we can help..."
                    rows={4}
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    All information provided will be kept confidential and used only 
                    for assessment purposes.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
