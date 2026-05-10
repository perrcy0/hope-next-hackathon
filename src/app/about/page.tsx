"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Heart, ShieldCheck, Target, TrendingUp, Users } from "lucide-react";

const TEAM = [
  { name: "Dr. Elena Rostova", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  { name: "Marcus Chen", role: "Head of Global Operations", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
  { name: "Sarah Jenkins", role: "Director of Impact", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
  { name: "David Okafor", role: "Field Director, Africa", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-8">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">Our Mission & Vision</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 md:mb-8 leading-tight">
            Building a World Where <span className="text-primary text-glow">Everyone Thrives.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Founded in 2010, Hope Organization is dedicated to eradicating poverty and 
            providing sustainable access to basic human needs across the globe. We believe 
            in empowerment, transparency, and the profound impact of collective action.
          </p>
        </motion.div>
      </section>

      {/* Global Impact Visualization Placeholder */}
      <section className="relative py-16 md:py-24 bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] max-w-[800px] aspect-square bg-primary/5 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Footprint</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With operations in over 45 countries, we've established a robust network 
                of local partners and field experts. Our data-driven approach ensures 
                resources are deployed where they can create the most significant, lasting change.
              </p>
              
              <div className="grid grid-cols-2 gap-6 md:gap-8 mt-8">
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-glow">45+</h4>
                  <p className="text-muted-foreground font-medium">Active Countries</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-glow">2.5M</h4>
                  <p className="text-muted-foreground font-medium text-sm md:text-base">Lives Changed</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-glow">120</h4>
                  <p className="text-muted-foreground font-medium text-sm md:text-base">Local Partners</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-glow">$85M</h4>
                  <p className="text-muted-foreground font-medium text-sm md:text-base">Funds Deployed</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl glass-card overflow-hidden p-8 flex flex-col justify-center items-center border border-white/10"
            >
              <Globe className="w-64 h-64 text-primary/20 absolute -right-10 -bottom-10" />
              <div className="space-y-6 relative z-10 w-full max-w-sm mx-auto">
                {[
                  { region: "Sub-Saharan Africa", impact: "45%" },
                  { region: "South Asia", impact: "30%" },
                  { region: "Latin America", impact: "15%" },
                  { region: "Middle East", impact: "10%" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-foreground">{stat.region}</span>
                      <span className="text-primary font-bold">{stat.impact}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.impact }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">100% Transparency Model</h2>
            <p className="text-lg text-muted-foreground">
              We separate our operating costs from public donations. A dedicated group of private donors 
              funds our overhead, meaning every cent of your donation goes directly to the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-16 text-center"
          >
            Leadership Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
