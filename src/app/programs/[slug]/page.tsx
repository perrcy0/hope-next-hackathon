"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Users, MapPin, Target, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Mock data fetching function since we don't have a real backend
const getProgramDetails = (slug: string) => {
  return {
    id: slug,
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: "This is a detailed description of the program. It provides sustainable access to safe drinking water and sanitation facilities for rural communities. Our comprehensive approach ensures long-lasting impact.",
    imageUrl: "https://images.unsplash.com/photo-1541817978267-368541c8f498?q=80&w=2070&auto=format&fit=crop",
    raised: 45000,
    goal: 100000,
    location: "Sub-Saharan Africa",
    beneficiaries: "12,500+",
    impactMetric: "Clean Wells Built",
    impactValue: "45",
    story: `In many parts of the world, access to clean water is a luxury. Women and children often walk miles every day to fetch water that is unsafe to drink. This program aims to change that reality by building sustainable water infrastructure right in the heart of these communities.

Our approach isn't just about drilling wells; it's about community empowerment. We train local water committees to maintain the infrastructure, ensuring that the wells function for generations to come. By bringing water closer to home, we give children the time to go to school and women the opportunity to start businesses.`,
    milestones: [
      { date: "Q1 2026", title: "Site Assessment & Planning", status: "completed" },
      { date: "Q2 2026", title: "Drilling & Construction", status: "in-progress" },
      { date: "Q3 2026", title: "Community Training", status: "upcoming" },
    ]
  };
};

export default function ProgramDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const program = getProgramDetails(slug);
  
  const progress = Math.min((program.raised / program.goal) * 100, 100);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] w-full">
        <Image
          src={program.imageUrl}
          alt={program.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12">
          <div className="container mx-auto px-4 md:px-6">
            <Link 
              href="/programs" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Programs
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 max-w-4xl leading-tight"
            >
              {program.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-4 text-white/90 font-medium"
            >
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-primary" /> {program.location}
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" /> {program.beneficiaries} Impacted
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">The Story</h2>
              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                {program.story.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">Milestones</h2>
              <div className="space-y-6">
                {program.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full mt-1.5 ${
                        milestone.status === 'completed' ? 'bg-primary' : 
                        milestone.status === 'in-progress' ? 'bg-blue-400 animate-pulse' : 'bg-muted'
                      }`} />
                      {idx !== program.milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border my-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm text-primary font-medium">{milestone.date}</p>
                      <h4 className="text-lg font-semibold">{milestone.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sticky Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="sticky top-28 space-y-6"
          >
            <div className="glass-card rounded-3xl p-8">
              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-4xl font-bold text-foreground">
                    ${program.raised.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground mb-1">
                    of ${program.goal.toLocaleString()}
                  </span>
                </div>
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
                <p className="text-sm font-medium text-right mt-2 text-primary">
                  {Math.round(progress)}% Funded
                </p>
              </div>

              <div className="space-y-4">
                <Button className="w-full h-14 text-lg rounded-xl hover:glow shadow-[0_0_20px_rgba(16,185,129,0.3)]" asChild>
                  <Link href={`/donate?program=${program.id}`}>Donate to this Program</Link>
                </Button>
                <Button variant="outline" className="w-full h-14 rounded-xl gap-2">
                  <Share2 className="w-5 h-5" /> Share this cause
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{program.impactMetric}</p>
                  <p className="text-2xl font-bold text-foreground">{program.impactValue}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <p className="text-sm text-muted-foreground">
                Over <span className="font-bold text-foreground">1,200 people</span> have donated to this program.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
