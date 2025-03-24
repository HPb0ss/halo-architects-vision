import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import MemberCard from "@/components/MemberCard";

import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 }, // Start fully transparent
  animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }, // Fade in smoothly
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }, // Fade out before next page appears
};

const TeamPage = () => {
  useEffect(() => {
    document.title = "Our Team | HALO Architects";
    window.scrollTo(0, 0);
  }, []);

  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: "Alexandra Chen",
      title: "Principal Architect & Founder",
      bio: "With over 15 years of experience, Alexandra leads the firm with a vision for creating sustainable, innovative spaces that transform how people live and work.",
      imageSrc:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
    },
    {
      id: 2,
      name: "Marcus Rivera",
      title: "Senior Architect",
      bio: "Marcus specializes in commercial architecture with a focus on adaptive reuse and urban revitalization projects that bring new life to cities.",
      imageSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
    },
    {
      id: 3,
      name: "Sophia Kim",
      title: "Design Director",
      bio: "Sophia's approach combines cutting-edge technology with timeless design principles to create spaces that are both beautiful and functional.",
      imageSrc:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
    },
    {
      id: 4,
      name: "James Patel",
      title: "Sustainability Lead",
      bio: "James ensures that sustainability is at the core of every project, implementing innovative green technologies and materials.",
      imageSrc:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      title: "Interior Design Specialist",
      bio: "Olivia creates cohesive interior spaces that complement the architecture, focusing on materials, textures, and lighting to enhance the user experience.",
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
    },
    {
      id: 6,
      name: "David Thompson",
      title: "Project Manager",
      bio: "David ensures that projects are delivered on time and within budget, managing relationships with clients, contractors, and consultants.",
      imageSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      <div className="min-h-screen">
        <Navbar />

        {/* Header */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Meet Our Team
              </h1>
              <p className="text-foreground/70 text-lg md:text-xl max-w-2xl">
                Our diverse team of passionate architects and designers brings
                together expertise, creativity, and a shared commitment to
                excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <RevealOnScroll>
          <section className="pb-20 md:pb-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                    Our Approach
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                    Our Design Philosophy
                  </h2>
                  <p className="text-foreground/70 mb-6">
                    At HALO Architects, we believe that architecture should be a
                    harmonious blend of form, function, and sustainability. Our
                    collaborative approach ensures that every project reflects
                    the unique vision and needs of our clients.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-medium">01</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-xl font-medium mb-2">
                          Human-Centered Design
                        </h3>
                        <p className="text-foreground/70">
                          We design spaces that prioritize human experience,
                          comfort, and well-being.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-medium">02</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-xl font-medium mb-2">
                          Sustainable Innovation
                        </h3>
                        <p className="text-foreground/70">
                          We integrate cutting-edge sustainable practices and
                          materials in all our designs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-medium">03</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-xl font-medium mb-2">
                          Contextual Sensitivity
                        </h3>
                        <p className="text-foreground/70">
                          Our designs respond thoughtfully to their cultural,
                          historical, and environmental context.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Team Members */}
        <RevealOnScroll>
          <section className="py-20 md:py-28 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center mb-16">
                <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                  Our Experts
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                  The People Behind HALO
                </h2>
                <p className="text-foreground/70">
                  Our talented team brings together diverse skills and
                  perspectives to create extraordinary architectural
                  experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <MemberCard
                    key={member.id}
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    imageSrc={member.imageSrc}
                  />
                ))}
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Join Our Team */}
        <RevealOnScroll>
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                  Join Our Team
                </h2>
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  We're always looking for talented architects and designers who
                  share our passion for innovative, sustainable design. If
                  you're interested in joining HALO Architects, we'd love to
                  hear from you.
                </p>
                <a
                  href="mailto:careers@haloarchitects.com"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  View Open Positions
                </a>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <Footer />
      </div>
    </motion.div>
  );
};

export default TeamPage;
