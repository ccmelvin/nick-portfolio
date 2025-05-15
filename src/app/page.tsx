"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import PortfolioItem from "@/components/portfolio-item";
import TestimonialCard from "@/components/testimonial-card";
import ContactForm from "@/components/contact-form";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main ref={ref} className="min-h-screen bg-[#f8f8f8]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <Image
            src="/images/hero-background.jpg"
            alt="Background"
            fill
            priority
            className="object-cover opacity-30"
          />
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 text-[#333333]">
              Creating beautiful & functional designs
            </h1>
            <p className="font-sans text-lg md:text-xl text-[#555555] mb-10 max-w-xl mx-auto">
              A creative studio specializing in branding, web design, and
              digital experiences that connect with your audience.
            </p>
            <Button className="bg-[#333333] hover:bg-[#555555] text-white rounded-none px-8 py-6 text-base">
              View My Work
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="#333333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/hero-background.jpg"
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/professional-portrait.jpg"
                alt="About Me"
                width={600}
                height={800}
                className="w-full h-auto object-cover shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <SectionHeading
                subtitle="About Me"
                title="The creative mind behind the designs"
              />

              <p className="font-sans text-[#555555] mb-6">
                As a dedicated designer with 8+ years of expertise, I specialize
                in crafting visually captivating and user-centric designs that
                empower brands to forge meaningful connections with their
                audiences. My work marries artistic vision with data-driven
                strategy, ensuring every project not only resonates
                aesthetically but also drives measurable outcomes that surpass
                client objectives.
              </p>

              <p className="font-sans text-[#555555] mb-10">
                Whether you&apos;re launching a brand from scratch, revitalizing
                your current identity, or building an eye-catching website, I
                combine innovative creativity, meticulous precision, and a
                mastery of design fundamentals to bring your vision to life.
              </p>

              <Button
                variant="outline"
                className="border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white rounded-none px-8 py-6 text-base"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <SectionHeading
              subtitle="Services"
              title="How I Can Elevate Your Brand"
              centered
            />
            <p className="font-sans text-[#555555] mt-4">
              I offer a range of creative services to help elevate your brand
              and digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Brand Identity"
              description="Develop a cohesive visual identity that captures your brand's essence and resonates with your target audience."
              icon="Palette"
              delay={0}
            />
            <ServiceCard
              title="Web Design"
              description="Create beautiful, functional websites that provide an exceptional user experience and effectively communicate your message."
              icon="Globe"
              delay={0.2}
            />
            <ServiceCard
              title="Digital Marketing"
              description="Develop strategies and assets that help you connect with your audience and grow your online presence."
              icon="BarChart"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <SectionHeading
              subtitle="Portfolio"
              title="Selected Works"
              centered
            />
            <p className="font-sans text-[#555555] mt-4">
              A showcase of recent projects and collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PortfolioItem
              title="Botanical Branding"
              category="Brand Identity"
              imageSrc="/images/botanical-branding.jpg"
              delay={0}
            />
            <PortfolioItem
              title="Minimalist E-commerce"
              category="Web Design"
              imageSrc="/images/minimalist-eCommerce.jpg"
              delay={0.2}
            />
            <PortfolioItem
              title="Luxury Packaging"
              category="Print Design"
              imageSrc="/images/luxury-packing.jpg"
              delay={0.4}
            />
            <PortfolioItem
              title="Wellness App"
              category="UI/UX Design"
              imageSrc="/images/wellness-app.jpg"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <SectionHeading
              subtitle="Client Love"
              title="Success Stories"
              centered
            />
            <p className="font-sans text-[#555555] mt-4">
              The proof is in the results - see how my work has made an impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="From initial concept to final execution, they demonstrated an incredible ability to translate our vision into a compelling brand identity that truly resonates with our audience."
              author="Sarah Cole"
              company="Bloom Botanicals"
              delay={0}
            />
            <TestimonialCard
              quote="Our new website achieved a 40% increase in engagement while maintaining our brand's premium aesthetic. The strategic approach to design made all the difference."
              author="Andy Newton"
              company="Horizonas Tech"
              delay={0.2}
            />
            <TestimonialCard
              quote="Exceptional craftsmanship and strategic thinking. Every detail was considered, resulting in a brand identity that has become our most valuable business asset."
              author="Aline Santos"
              company="Lunar Studios"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <SectionHeading
                subtitle="Get in Touch"
                title="Let's create something amazing together"
              />

              <p className="font-sans text-[#555555] mb-10">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#f8f5f2] rounded-full mr-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5"
                        stroke="#333333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-sans text-[#555555]">
                    hello@example.com
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#f8f5f2] rounded-full mr-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C18.2 22.09 16.48 21.89 14.87 21.37C13.38 20.89 12.01 20.14 10.8 19.15C9.63 18.1813 8.59 17.0732 7.72 15.85C6.73 14.63 5.98 13.26 5.5 11.77C4.98 10.16 4.78 8.43 4.91 6.67C4.91 6.12 5.12 5.59 5.49 5.21C5.86 4.84 6.39 4.62 6.94 4.62H9.94C10.95 4.62 11.83 5.37 11.98 6.37C12.08 7.01 12.25 7.63 12.49 8.23C12.79 9.01 12.61 9.88 12.05 10.44L11.09 11.4C11.9 12.57 12.88 13.55 14.05 14.36L15.01 13.4C15.57 12.84 16.44 12.66 17.22 12.96C17.82 13.2 18.44 13.37 19.08 13.47C20.09 13.62 20.85 14.51 20.85 15.53L22 16.92Z"
                        stroke="#333333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-sans text-[#555555]">
                    +1 (555) 123-4567
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#f8f5f2] rounded-full mr-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="#333333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="#333333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-sans text-[#555555]">New York, NY</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
