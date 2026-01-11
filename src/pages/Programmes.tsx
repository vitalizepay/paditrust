import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Home, Users, Briefcase, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-children-learning.jpg";
import safeSpacesImage from "@/assets/safe-spaces.jpg";
import communityImage from "@/assets/community-support.jpg";
import capacityImage from "@/assets/capacity-building.jpg";

const programmes = [
  {
    id: "education",
    icon: BookOpen,
    title: "Education Excellence Programme",
    tagline: "Unlocking Potential Through Learning",
    description: "Our flagship education initiative provides comprehensive support to ensure every child has access to quality education and the resources they need to succeed academically.",
    image: heroImage,
    features: [
      "Scholarship support for underprivileged students",
      "Free tutoring and homework assistance",
      "School supplies and uniform distribution",
      "Digital literacy programmes",
      "English language and communication skills",
      "STEM education initiatives",
    ],
    impact: "Over 5,000 children educated since 2010",
  },
  {
    id: "safe-spaces",
    icon: Home,
    title: "Safe Spaces Initiative",
    tagline: "Nurturing Environments for Growth",
    description: "We create secure, supportive after-school environments where children can learn, play, and develop essential life skills in a protected setting.",
    image: safeSpacesImage,
    features: [
      "After-school care and supervision",
      "Recreational and creative activities",
      "Nutritious meal programmes",
      "Mentorship and counselling",
      "Life skills education",
      "Child protection and safety training",
    ],
    impact: "25+ community centres across 5 states",
  },
  {
    id: "community",
    icon: Users,
    title: "Community Support Programme",
    tagline: "Strengthening Families, Building Communities",
    description: "We address the holistic needs of families through healthcare access, nutrition support, and social welfare initiatives that strengthen community bonds.",
    image: communityImage,
    features: [
      "Healthcare awareness and access",
      "Nutrition and food security programmes",
      "Women empowerment initiatives",
      "Family counselling services",
      "Financial literacy training",
      "Community health camps",
    ],
    impact: "12,000+ families supported annually",
  },
  {
    id: "capacity",
    icon: Briefcase,
    title: "Capacity Building Programme",
    tagline: "Skills for Sustainable Livelihoods",
    description: "Our vocational training and skill development initiatives prepare youth and adults for meaningful employment and entrepreneurship opportunities.",
    image: capacityImage,
    features: [
      "Vocational skills training",
      "Computer and IT education",
      "Entrepreneurship development",
      "Job placement assistance",
      "Soft skills workshops",
      "Microfinance access support",
    ],
    impact: "85% of trainees gain employment within 6 months",
  },
];

const Programmes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted overflow-hidden">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Programmes
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Comprehensive Solutions for Lasting Change
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our integrated programmes address the multifaceted challenges faced by 
              disadvantaged communities, creating pathways to sustainable development 
              and self-reliance.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes List */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="space-y-20">
            {programmes.map((programme, index) => (
              <div
                key={programme.id}
                id={programme.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <img
                      src={programme.image}
                      alt={programme.title}
                      className="rounded-2xl shadow-card w-full"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg">
                      <programme.icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                    {programme.tagline}
                  </span>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    {programme.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {programme.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {programme.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-foreground">Impact:</span>
                      <span className="text-muted-foreground">{programme.impact}</span>
                    </div>
                  </div>

                  <Link to="/apply">
                    <Button>
                      Apply for This Programme
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hope-gradient">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Support Our Programmes
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Your contribution helps us expand our reach and deepen our impact. 
            Every donation makes a difference in the lives of children and families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button variant="hero" size="lg">
                <Heart className="w-4 h-4" />
                Donate Now
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button variant="heroOutline" size="lg">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programmes;
