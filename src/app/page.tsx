"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, Globe, Users, Droplets } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/ui/ProgramCard";

const FEATURED_PROGRAMS = [
  {
    id: "clean-water-initiative",
    title: "Clean Water Initiative",
    description: "Providing sustainable access to safe drinking water and sanitation facilities for rural communities in East Africa.",
    imageUrl: "https://images.unsplash.com/photo-1541817978267-368541c8f498?q=80&w=2070&auto=format&fit=crop",
    raised: 45000,
    goal: 100000,
    category: "Health & Sanitation",
  },
  {
    id: "education-for-all",
    title: "Education For All",
    description: "Building schools and providing learning materials to ensure every child has the opportunity to learn and grow.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
    raised: 82500,
    goal: 150000,
    category: "Education",
  },
  {
    id: "emergency-relief-fund",
    title: "Emergency Relief Fund",
    description: "Immediate response to natural disasters, providing food, shelter, and medical care to those affected.",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    raised: 210000,
    goal: 500000,
    category: "Disaster Relief",
  },
];

const STATS = [
  { value: "2.5M+", label: "Lives Impacted", icon: Users },
  { value: "45", label: "Countries Reached", icon: Globe },
  { value: "100%", label: "Transparency", icon: Heart },
  { value: "500+", label: "Clean Wells", icon: Droplets },
];

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
            alt="Children smiling"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <motion.div
          style={{ opacity, y }}
          className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium tracking-wide">100% of your donation funds our programs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight max-w-5xl"
          >
            Hope is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">verb.</span> Let's act.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12"
          >
            We believe that every person deserves access to basic human needs. 
            Join us in building a sustainable future for communities around the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="hover:glow rounded-full text-lg w-full sm:w-auto px-8" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="glass" className="rounded-full text-lg w-full sm:w-auto px-8" asChild>
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 relative z-20 -mt-12 md:-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card rounded-3xl p-6 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={stat.label}
                    className="flex flex-col items-center text-center space-y-3"
                  >
                    <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground font-medium text-sm md:text-base">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-serif font-bold mb-4"
              >
                Urgent Initiatives
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground text-base md:text-lg"
              >
                Discover the programs that need your immediate attention and support. 
                Your contribution can change a community's trajectory forever.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="rounded-full w-full sm:w-auto" asChild>
                <Link href="/programs">
                  View all programs <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROGRAMS.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Story Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1593113543329-a1d2e92c55e9?q=80&w=2070&auto=format&fit=crop"
            alt="Community building"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
                Not just charity. <br/>
                <span className="text-primary text-glow">Empowerment.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We go beyond immediate relief. Our approach focuses on building local capacity, 
                fostering leadership, and creating self-sustaining ecosystems. When you invest 
                with Hope, you're not just solving today's problems—you're preventing tomorrow's.
              </p>
              <ul className="space-y-4">
                {[
                  "Community-led development models",
                  "Sustainable infrastructure projects",
                  "Long-term educational scholarships",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-primary/20 rounded-full p-1 text-primary">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="rounded-full mt-4 w-full sm:w-auto" asChild>
                <Link href="/about">Learn Our Approach</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mt-8 md:mt-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1931&auto=format&fit=crop"
                alt="Student smiling"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="glass px-4 py-2 rounded-full inline-block mb-4">
                  <span className="text-primary font-medium text-sm">Success Story</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                  "Education changed my entire family's future."
                </h3>
                <p className="text-white/80">— Sarah, 14, Scholarship Recipient</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
