import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Award, Users, BookOpen, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import safeSpacesImage from "@/assets/safe-spaces.jpg";

const impactMetrics = [
  { number: "5,000+", label: "Children Educated", icon: BookOpen, growth: "+15% from last year" },
  { number: "12,000+", label: "Families Supported", icon: Users, growth: "+22% from last year" },
  { number: "25+", label: "Community Centres", icon: MapPin, growth: "5 new centres in 2024" },
  { number: "98%", label: "Programme Success Rate", icon: Award, growth: "Consistent excellence" },
  { number: "850+", label: "Youth Trained for Jobs", icon: TrendingUp, growth: "85% placement rate" },
  { number: "₹2.5Cr+", label: "Scholarships Awarded", icon: Heart, growth: "+30% increase" },
];

const outcomes = [
  {
    title: "Educational Achievement",
    stats: [
      { label: "Students passed board exams", value: "94%" },
      { label: "Children reading at grade level", value: "87%" },
      { label: "Students continuing to higher education", value: "72%" },
    ],
  },
  {
    title: "Community Health",
    stats: [
      { label: "Reduction in child malnutrition", value: "45%" },
      { label: "Families accessing healthcare", value: "8,500+" },
      { label: "Health awareness sessions conducted", value: "200+" },
    ],
  },
  {
    title: "Economic Empowerment",
    stats: [
      { label: "Youth employed after training", value: "85%" },
      { label: "Women in self-help groups", value: "1,200+" },
      { label: "Average income increase", value: "60%" },
    ],
  },
];

const testimonials = [
  {
    quote: "Before joining the Trust's education programme, I struggled in school and had no hope for my future. Today, I am studying engineering on a full scholarship. Padmini Trust changed my destiny.",
    author: "Amit Singh",
    role: "Engineering Student, Former Beneficiary",
    image: null,
  },
  {
    quote: "The safe space centre became my second home. The mentors taught me not just academics, but how to dream. I now mentor younger children, giving back what I received.",
    author: "Priya Kumari",
    role: "Youth Mentor & Alumni",
    image: null,
  },
  {
    quote: "The vocational training programme gave me skills I never thought I could have. Within three months of completing the course, I got a job. Now I support my entire family.",
    author: "Mohammed Farhan",
    role: "IT Professional, Programme Graduate",
    image: null,
  },
  {
    quote: "As a single mother, I didn't know how I would educate my three children. The Trust not only educated them but supported me with livelihood training. We are now self-sufficient.",
    author: "Kamala Devi",
    role: "Parent & Community Member",
    image: null,
  },
];

const Impact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted overflow-hidden">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Impact
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Measurable Change, Lasting Transformation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in accountability and transparency. Here is the evidence of how 
              your support translates into real change in the lives of children and 
              families across India.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Impact by the Numbers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to data-driven decision making ensures we continuously 
              improve and scale what works.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-6 hover:shadow-card transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {metric.growth}
                  </span>
                </div>
                <div className="text-3xl font-heading font-bold text-foreground mb-1">
                  {metric.number}
                </div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-section-gradient">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Programme Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Results That Matter
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-card"
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6 pb-4 border-b border-border">
                  {outcome.title}
                </h3>
                <div className="space-y-4">
                  {outcome.stats.map((stat, sIndex) => (
                    <div key={sIndex} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="text-lg font-bold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Voices of Transformation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from the lives we have touched. These testimonials remind us 
              why we do what we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-muted rounded-2xl p-8 relative"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground text-2xl font-serif">"</span>
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6 mt-4 italic">
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

      {/* Image Banner */}
      <section className="relative h-80 overflow-hidden">
        <img
          src={safeSpacesImage}
          alt="Children learning and playing in a safe environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Every Number Represents a Life Changed
            </h3>
            <p className="text-primary-foreground/90 max-w-xl mx-auto">
              Behind every statistic is a child who now believes in their dreams, 
              a family with renewed hope, and a community growing stronger.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hope-gradient">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Help Us Create More Success Stories
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Your support directly contributes to these outcomes. Join us in expanding 
            our impact to reach more children and families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button variant="hero" size="lg">
                <Heart className="w-4 h-4" />
                Donate Today
              </Button>
            </Link>
            <Link to="/news">
              <Button variant="heroOutline" size="lg">
                Read More Stories
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
