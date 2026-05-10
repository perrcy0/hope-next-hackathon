"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProgramCard } from "@/components/ui/ProgramCard";

const ALL_PROGRAMS = [
  {
    id: "clean-water-initiative",
    title: "Clean Water Initiative",
    description: "Providing sustainable access to safe drinking water and sanitation facilities for rural communities in East Africa.",
    imageUrl: "https://images.unsplash.com/photo-1541817978267-368541c8f498?q=80&w=2070&auto=format&fit=crop",
    raised: 45000,
    goal: 100000,
    category: "Health & Water",
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
  {
    id: "sustainable-agriculture",
    title: "Sustainable Agriculture",
    description: "Training farmers in drought-resistant crop cultivation to ensure long-term food security in vulnerable regions.",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop",
    raised: 12500,
    goal: 50000,
    category: "Livelihood",
  },
  {
    id: "medical-outreach",
    title: "Mobile Medical Clinics",
    description: "Deploying mobile healthcare units to remote villages lacking basic medical infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
    raised: 135000,
    goal: 200000,
    category: "Health & Water",
  },
  {
    id: "girls-tech-empowerment",
    title: "Girls in Tech",
    description: "Empowering young women through intensive coding bootcamps and digital literacy programs.",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    raised: 68000,
    goal: 80000,
    category: "Education",
  },
];

const CATEGORIES = ["All", "Education", "Health & Water", "Disaster Relief", "Livelihood"];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms = activeCategory === "All" 
    ? ALL_PROGRAMS 
    : ALL_PROGRAMS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="text-primary text-glow">Programs</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our active initiatives around the globe. Each program is designed with 
            sustainability in mind, aiming to empower local communities and create lasting impact.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  : "glass hover:bg-white/10 text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPrograms.map((program, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={program.id}
              className="h-full"
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </motion.div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif font-semibold text-muted-foreground">
              No programs found for this category.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
