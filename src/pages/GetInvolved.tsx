import { Link } from "react-router-dom";
import { Heart, Users, Handshake, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const donationTiers = [
  {
    amount: "₹500",
    impact: "Provides school supplies for one child for a month",
    popular: false,
  },
  {
    amount: "₹2,000",
    impact: "Feeds a child nutritious meals for 3 months",
    popular: false,
  },
  {
    amount: "₹5,000",
    impact: "Sponsors a child's education for a semester",
    popular: true,
  },
  {
    amount: "₹10,000",
    impact: "Funds vocational training for one youth",
    popular: false,
  },
  {
    amount: "₹25,000",
    impact: "Supports a family with comprehensive care for a year",
    popular: false,
  },
  {
    amount: "Custom",
    impact: "Every amount makes a difference",
    popular: false,
  },
];

const volunteerRoles = [
  {
    title: "Teaching Volunteer",
    description: "Share your knowledge by tutoring children in academics, languages, or life skills.",
    commitment: "4-8 hours/week",
  },
  {
    title: "Mentorship Programme",
    description: "Guide and inspire youth through one-on-one mentoring relationships.",
    commitment: "2-4 hours/week",
  },
  {
    title: "Event Support",
    description: "Help organize community events, workshops, and awareness campaigns.",
    commitment: "Flexible",
  },
  {
    title: "Professional Services",
    description: "Contribute your professional skills in areas like legal, medical, IT, or finance.",
    commitment: "Project-based",
  },
];

const partnerTypes = [
  {
    title: "Corporate Partners",
    description: "CSR partnerships, employee volunteering programmes, and cause marketing opportunities.",
    benefits: ["Brand visibility", "Employee engagement", "Impact reporting", "Tax benefits"],
  },
  {
    title: "Foundation Partners",
    description: "Grant partnerships for programme expansion, research, and capacity building.",
    benefits: ["Direct impact", "Transparent reporting", "Site visits", "Joint initiatives"],
  },
  {
    title: "Implementation Partners",
    description: "Collaborate on service delivery, knowledge sharing, and geographic expansion.",
    benefits: ["Shared expertise", "Extended reach", "Resource pooling", "Best practices"],
  },
];

const GetInvolved = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted overflow-hidden">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Get Involved
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Be the Change You Wish to See
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              There are many ways to contribute to our mission. Whether you donate, 
              volunteer your time, or partner with us, your support creates ripples 
              of positive change in communities across India.
            </p>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Make a Donation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your generosity fuels our programmes and transforms lives. Choose a 
              donation amount that works for you—every contribution matters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {donationTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 text-center transition-all hover:shadow-card-hover cursor-pointer ${
                  tier.popular
                    ? "bg-primary text-primary-foreground shadow-lg ring-2 ring-secondary"
                    : "bg-background border border-border hover:border-primary"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`text-3xl font-heading font-bold mb-2 ${
                  tier.popular ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {tier.amount}
                </div>
                <p className={`text-sm ${
                  tier.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {tier.impact}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="warm" size="xl">
              <Heart className="w-5 h-5" />
              Donate Now
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Donations are tax-deductible under Section 80G of the Income Tax Act.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="section-padding bg-section-gradient">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Volunteer With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your time, skills, and passion. Our volunteers are the heart of our 
              organisation, bringing energy and expertise to everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {volunteerRoles.map((role, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {role.title}
                </h3>
                <p className="text-muted-foreground mb-4">{role.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">Time Commitment:</span>
                  <span className="text-muted-foreground">{role.commitment}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg">
              Apply to Volunteer
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
              <Handshake className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Partner With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic partnerships amplify our impact. We welcome collaborations with 
              corporates, foundations, and other organisations aligned with our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {partnerTypes.map((partner, index) => (
              <div
                key={index}
                className="bg-muted rounded-2xl p-8"
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {partner.title}
                </h3>
                <p className="text-muted-foreground mb-6">{partner.description}</p>
                <div className="space-y-2">
                  {partner.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Discuss Partnership
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hope-gradient">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you choose to donate, volunteer, or partner with us, you are 
            joining a community committed to transforming lives. Together, we can 
            create a brighter future for thousands of children and families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Heart className="w-4 h-4" />
              Start Giving Today
            </Button>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
