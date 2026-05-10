"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target } from "lucide-react";
import { Button } from "./Button";

export interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  raised: number;
  goal: number;
  category: string;
}

export function ProgramCard({
  id,
  title,
  description,
  imageUrl,
  raised,
  goal,
  category,
}: ProgramCardProps) {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col group"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-foreground">
          {category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
          {description}
        </p>

        <div className="mt-auto space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-primary">
                ${raised.toLocaleString()}
              </span>
              <span className="text-muted-foreground">
                of ${goal.toLocaleString()}
              </span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-primary rounded-full relative"
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </motion.div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-border">
            <Button variant="ghost" size="sm" asChild className="px-0 hover:bg-transparent">
              <Link href={`/programs/${id}`} className="text-muted-foreground hover:text-primary">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button size="sm" asChild className="hover:glow">
              <Link href={`/donate?program=${id}`}>Donate</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
