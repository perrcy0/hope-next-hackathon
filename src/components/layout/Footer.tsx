"use client";

import Link from "next/link";
import { Heart, Globe, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide">
                Hope.
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Empowering communities globally through sustainable programs and
              compassionate aid. Join us in making a difference today.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-foreground">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Global Impact
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/financials" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Financial Reports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get updates on our programs and impact.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-muted/50 border border-border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Hope Organization. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground">
            Designed with compassion.
          </div>
        </div>
      </div>
    </footer>
  );
}
