import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-children-learning.jpg";
import safeSpacesImage from "@/assets/safe-spaces.jpg";
import communityImage from "@/assets/community-support.jpg";
import capacityImage from "@/assets/capacity-building.jpg";

const newsArticles = [
  {
    id: 1,
    title: "Padmini Trust Opens 5 New Community Centres Across Rural Maharashtra",
    excerpt: "Expanding our reach to serve over 1,000 additional children with safe spaces and educational support in underserved villages.",
    date: "December 15, 2024",
    readTime: "4 min read",
    category: "Expansion",
    image: safeSpacesImage,
    featured: true,
  },
  {
    id: 2,
    title: "Annual Scholarship Programme Awards ₹50 Lakh to 200 Students",
    excerpt: "Our largest scholarship distribution ever, supporting first-generation learners pursuing higher education dreams.",
    date: "November 28, 2024",
    readTime: "3 min read",
    category: "Education",
    image: heroImage,
    featured: false,
  },
  {
    id: 3,
    title: "Women Empowerment Initiative Graduates 150 Participants",
    excerpt: "Celebrating the success of our vocational training programme that has helped women gain financial independence.",
    date: "November 10, 2024",
    readTime: "5 min read",
    category: "Empowerment",
    image: communityImage,
    featured: false,
  },
  {
    id: 4,
    title: "Youth Skills Summit 2024: Building Tomorrow's Leaders",
    excerpt: "Over 500 young people participated in our annual summit focused on digital skills and entrepreneurship.",
    date: "October 25, 2024",
    readTime: "4 min read",
    category: "Events",
    image: capacityImage,
    featured: false,
  },
  {
    id: 5,
    title: "Partnership with Tech Giants Brings Digital Learning to Rural Schools",
    excerpt: "New collaboration will provide tablets and internet access to students in our partner schools.",
    date: "October 12, 2024",
    readTime: "3 min read",
    category: "Partnerships",
    image: heroImage,
    featured: false,
  },
  {
    id: 6,
    title: "Community Health Camp Serves 2,000+ Families",
    excerpt: "Free medical check-ups, medicines, and health education provided at our quarterly health camp.",
    date: "September 30, 2024",
    readTime: "4 min read",
    category: "Health",
    image: communityImage,
    featured: false,
  },
];

const News = () => {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted overflow-hidden">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              News & Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Updates from the Field
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay connected with the latest news, success stories, and updates from 
              our programmes. See how your support is making a difference every day.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section-padding">
          <div className="container-wide mx-auto px-4 md:px-8">
            <Link
              to={`/news/${featuredArticle.id}`}
              className="group grid lg:grid-cols-2 gap-8 bg-muted rounded-2xl overflow-hidden hover:shadow-card-hover transition-all"
            >
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:py-12 flex flex-col justify-center">
                <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-foreground">
              Recent Updates
            </h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-primary">
                All
              </Button>
              <Button variant="ghost" size="sm">
                Education
              </Button>
              <Button variant="ghost" size="sm">
                Events
              </Button>
              <Button variant="ghost" size="sm">
                Impact
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Stories
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-muted">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive the latest news, stories, and 
            impact updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
