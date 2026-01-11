import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, BookOpen, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-children-learning.jpg";
import communityImage from "@/assets/community-support.jpg";
import safeSpacesImage from "@/assets/safe-spaces.jpg";
import capacityImage from "@/assets/capacity-building.jpg";

const impactStats = [
  { number: "5,000+", label: "Children Educated", icon: BookOpen },
  { number: "12,000+", label: "Families Supported", icon: Users },
  { number: "25+", label: "Community Centres", icon: Home },
  { number: "98%", label: "Programme Success Rate", icon: Heart },
];

const programmes = [
  {
    title: "Education Excellence",
    description: "Providing quality education, scholarships, and learning resources to underprivileged children.",
    image: heroImage,
    link: "/programmes",
  },
  {
    title: "Safe Spaces",
    description: "Creating nurturing environments where children can learn, play, and grow safely after school.",
    image: safeSpacesImage,
    link: "/programmes",
  },
  {
    title: "Community Support",
    description: "Empowering families through healthcare, nutrition programmes, and social welfare initiatives.",
    image: communityImage,
    link: "/programmes",
  },
  {
    title: "Capacity Building",
    description: "Vocational training and skill development for youth to build sustainable livelihoods.",
    image: capacityImage,
    link: "/programmes",
  },
];

const testimonials = [
  {
    quote: "Padmini Trust gave my daughter a chance at education she never would have had. Today, she dreams of becoming a doctor.",
    author: "Lakshmi Devi",
    role: "Parent, Delhi",
  },
  {
    quote: "The after-school programme changed my life. I found mentors who believed in me when no one else did.",
    author: "Rahul Kumar",
    role: "Programme Alumni",
  },
  {
    quote: "Their community health initiatives have transformed our village. Our children are healthier and happier.",
    author: "Sunita Sharma",
    role: "Community Leader",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Children learning together in a bright classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        {/* Content */}
        <div className="relative container-wide mx-auto px-4 md:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <span className="inline-block px-4 py-2 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-semibold mb-6">
              Transforming Lives Since 2010
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Empowering Children & Families to Build Brighter Futures
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Through education, safe spaces, and community support, we uplift disadvantaged 
              communities and create lasting change across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved">
                <Button variant="hero" size="xl">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="heroOutline" size="xl">
                  Learn Our Story
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Every Child Deserves a Chance to Thrive
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Padmini Social Impact Trust, we believe that education is the most powerful 
            tool for breaking the cycle of poverty. We work hand-in-hand with communities 
            to create sustainable change through comprehensive programmes that address 
            the holistic needs of children and their families.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Discover Our Story
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="section-padding bg-section-gradient">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Core Programmes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to create lasting impact in the lives 
              of children and families across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programmes.map((programme, index) => (
              <Link
                key={index}
                to={programme.link}
                className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={programme.image}
                    alt={programme.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {programme.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{programme.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programmes">
              <Button size="lg">
                View All Programmes
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Voices of Change
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Stories That Inspire Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-muted rounded-2xl p-8 relative"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground text-2xl font-serif">"</span>
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6 mt-4">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hope-gradient" />
        <div className="relative container-narrow mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Your support can transform lives. Whether you donate, volunteer, or partner 
            with us, together we can create a future where every child has the opportunity 
            to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button variant="hero" size="xl">
                <Heart className="w-5 h-5" />
                Donate Today
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button variant="heroOutline" size="xl">
                Become a Volunteer
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
