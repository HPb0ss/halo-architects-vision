import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Users, Palette, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const HomePage = () => {
  useEffect(() => {
    document.title = "HALO Architects | Sustainable Modern Architecture";
    window.scrollTo(0, 0);
  }, []);

  // Sample project data
  const featuredProjects = [
    {
      id: 1,
      title: "Azure Pavilion",
      category: "Residential",
      imageSrc:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      id: 2,
      title: "Meridian Tower",
      category: "Commercial",
      imageSrc: "/public/images/masrur-rahman-Q0oO-6KKEcY-unsplash.webp",
    },
    {
      id: 3,
      title: "Solstice Villa",
      category: "Residential",
      imageSrc:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
  ];

  const services = [
    {
      title: "Residential Design",
      description:
        "Creating beautiful, sustainable living spaces tailored to your lifestyle and needs.",
      icon: Building,
    },
    {
      title: "Commercial Architecture",
      description:
        "Innovative commercial spaces that balance functionality, aesthetics, and sustainability.",
      icon: Lightbulb,
    },
    {
      title: "Interior Design",
      description:
        "Thoughtful interior spaces that complement the architecture and enhance the user experience.",
      icon: Palette,
    },
    {
      title: "Team Collaboration",
      description:
        "Working closely with clients, engineers, and contractors to realize your vision.",
      icon: Users,
    },
  ];

  const testimonials = [
    {
      quote:
        "HALO Architects transformed our concept into a breathtaking home that exceeds all our expectations. Their attention to detail and commitment to sustainability was impressive.",
      author: "Sarah Johnson",
      role: "Homeowner",
    },
    {
      quote:
        "Working with HALO on our office redesign was a seamless experience. They understood our brand and created a space that inspires creativity and collaboration.",
      author: "Michael Chen",
      role: "CEO",
      company: "Innovative Solutions",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl stagger-animate">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Sustainable Modern Architecture
            </span>
            <h1 className="hero-text text-4xl md:text-5xl lg:text-7xl text-white mb-6">
              Designing spaces that inspire and endure
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl">
              HALO Architects combines innovation, sustainability, and timeless
              design to create extraordinary spaces for living and working.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-md font-medium">
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md bg-white/10 text-white border-white/20 hover:bg-white/20 font-medium"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <RevealOnScroll>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                  Our Approach
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                  Designing with purpose and precision
                </h2>
                <p className="text-foreground/70 mb-6">
                  At HALO Architects, we believe that great architecture goes
                  beyond aesthetics. It's about creating spaces that resonate
                  with people, respect the environment, and stand the test of
                  time.
                </p>
                <p className="text-foreground/70 mb-8">
                  Our collaborative approach involves understanding your vision,
                  analyzing the site and context, and delivering innovative
                  solutions that exceed expectations while adhering to
                  sustainability principles.
                </p>
                <Button asChild className="rounded-md font-medium">
                  <Link to="/team">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                    alt="Architects working"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden border-4 border-background shadow-xl hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400"
                    alt="Blueprint details"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Projects Section */}
      <RevealOnScroll>
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                Our Portfolio
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Featured Projects
              </h2>
              <p className="text-foreground/70">
                Explore our diverse portfolio of residential and commercial
                projects, each reflecting our commitment to innovative design
                and sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  imageSrc={project.imageSrc}
                  delay={index * 100}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                className="rounded-md font-medium"
              >
                <Link to="/portfolio">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Services Section */}
      <RevealOnScroll>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                Our Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                How We Can Help You
              </h2>
              <p className="text-foreground/70">
                We offer a comprehensive range of architectural services to
                bring your vision to life, from concept to completion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Testimonials Section */}
      <RevealOnScroll>
        <section className="py-20 md:py-28 bg-primary/5 border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                Testimonials
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                What Our Clients Say
              </h2>
              <p className="text-foreground/70">
                Don't just take our word for it. Here's what our clients have to
                say about their experience working with HALO Architects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                />
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* CTA Section */}
      <RevealOnScroll>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Ready to bring your vision to life?
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Contact us to
                discuss your project and discover how HALO Architects can help
                you realize your dreams.
              </p>
              <Button asChild size="lg" className="rounded-md font-medium">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <Footer />
    </div>
  );
};

export default HomePage;
