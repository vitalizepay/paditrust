import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Lightbulb, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import communityImage from "@/assets/community-support.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We lead with empathy, understanding the unique challenges each family faces.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creative solutions to address complex social challenges.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of collective action and community-led development.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of transparency and accountability.",
  },
];

const teamMembers = [
  { name: "Dr. Padmini Sharma", role: "Founder & Chairperson" },
  { name: "Rajesh Gupta", role: "Executive Director" },
  { name: "Priya Menon", role: "Director of Programmes" },
  { name: "Anil Kumar", role: "Head of Community Outreach" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted overflow-hidden">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our Story of Hope and Transformation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over a decade, Padmini Social Impact Trust has been at the forefront 
              of creating meaningful change in the lives of disadvantaged children and 
              families across India.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                From a Vision to a Movement
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Padmini Social Impact Trust was born from a simple yet profound belief: 
                  every child, regardless of their circumstances, deserves access to education, 
                  safety, and the opportunity to dream.
                </p>
                <p>
                  Founded in 2010 by Dr. Padmini Sharma, a former educator who witnessed 
                  firsthand the barriers that prevent children from marginalised communities 
                  from reaching their potential, the Trust started with a small learning centre 
                  in a Delhi slum.
                </p>
                <p>
                  What began as an initiative serving 50 children has grown into a comprehensive 
                  organisation reaching thousands of beneficiaries across multiple states. 
                  Today, we operate educational programmes, safe spaces, community health 
                  initiatives, and vocational training centres.
                </p>
                <p>
                  Our approach is rooted in community participation and sustainable development. 
                  We do not just provide services—we empower communities to become agents of 
                  their own transformation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={communityImage}
                alt="Community members participating in a support programme"
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-heading font-bold">14+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-section-gradient">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To uplift disadvantaged children and families through quality education, 
                safe and nurturing environments, comprehensive community support programmes, 
                and capacity building initiatives that foster self-reliance and sustainable 
                development.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every child has equal access to opportunities, where 
                communities thrive through collective empowerment, and where the cycle 
                of poverty is broken through education and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              What Guides Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-muted rounded-2xl hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our People
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to our mission of creating lasting social change.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hope-gradient">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create a world where every child has the opportunity 
            to reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button variant="hero" size="lg">
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
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

export default About;
