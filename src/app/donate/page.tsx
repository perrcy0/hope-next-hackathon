"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PRESET_AMOUNTS = [
  { amount: 20, impact: "Feeds a child for a week" },
  { amount: 50, impact: "Provides clean water for a family" },
  { amount: 100, impact: "Funds emergency medical supplies" },
  { amount: 250, impact: "Sponsors a student's education for a year" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isRecurring, setIsRecurring] = useState(true);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const displayAmount = selectedAmount === "custom" ? Number(customAmount) || 0 : selectedAmount;

  const currentImpact = PRESET_AMOUNTS.find(p => p.amount === selectedAmount)?.impact 
    || (selectedAmount === "custom" && displayAmount > 0 ? "Every dollar creates lasting impact" : "Select an amount to see your impact");

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden -z-10">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Make a <span className="text-primary">Difference</span> Today
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your generous donation helps us provide essential resources and sustainable solutions 
            to communities in need around the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_350px] gap-8 items-start">
          {/* Main Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-3xl p-6 md:p-8"
          >
            {/* Progress Stepper */}
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10 rounded-full" />
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
              
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                    step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s < step ? <CheckCircle2 className="w-6 h-6" /> : s}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Select Donation Frequency</h3>
                    <div className="flex p-1 bg-muted/50 rounded-xl">
                      <button
                        onClick={() => setIsRecurring(false)}
                        className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                          !isRecurring ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Give Once
                      </button>
                      <button
                        onClick={() => setIsRecurring(true)}
                        className={`flex-1 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                          isRecurring ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Heart className="w-4 h-4" /> Monthly
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Select Amount</h3>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                      {PRESET_AMOUNTS.map((preset) => (
                        <button
                          key={preset.amount}
                          onClick={() => setSelectedAmount(preset.amount)}
                          className={`py-3 md:py-4 rounded-xl border-2 transition-all ${
                            selectedAmount === preset.amount
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50 text-foreground"
                          }`}
                        >
                          <span className="text-xl md:text-2xl font-bold">${preset.amount}</span>
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">$</span>
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount("custom");
                        }}
                        className={`w-full bg-transparent border-2 rounded-xl py-4 pl-8 pr-4 text-xl outline-none transition-all ${
                          selectedAmount === "custom" ? "border-primary" : "border-border focus:border-primary/50"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-4 flex items-start gap-3 border border-primary/20">
                    <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-primary">{currentImpact}</span>
                    </p>
                  </div>

                  <Button 
                    className="w-full h-14 text-lg rounded-xl hover:glow" 
                    onClick={() => setStep(2)}
                    disabled={displayAmount <= 0}
                  >
                    Continue to Details <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold mb-4">Your Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 pt-4 border-t border-border">Payment Method</h3>
                  {/* Mock Payment Element */}
                  <div className="p-4 border border-border rounded-xl bg-background/50 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Card Number</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">CVC</label>
                        <input type="text" placeholder="123" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-xl" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button 
                      className="w-full sm:flex-1 h-14 text-lg rounded-xl hover:glow" 
                      onClick={() => setStep(3)}
                    >
                      Complete Donation
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Heart className="w-12 h-12 text-primary" fill="currentColor" />
                  </motion.div>
                  <h2 className="text-3xl font-serif font-bold">Thank You!</h2>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    Your {isRecurring ? "monthly " : ""}donation of ${displayAmount} has been processed successfully. 
                    A receipt has been sent to your email.
                  </p>
                  <Button asChild className="mt-8 rounded-full">
                    <Link href="/impact">See Your Impact</Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sticky Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-24 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h4 className="font-serif text-lg font-bold mb-4 border-b border-border pb-4">Donation Summary</h4>
              <div className="flex justify-between items-end mb-6">
                <span className="text-muted-foreground">Amount</span>
                <span className="text-3xl font-bold text-foreground">
                  ${displayAmount}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {isRecurring ? "/mo" : ""}
                  </span>
                </span>
              </div>
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-foreground/80 italic">"{currentImpact}"</p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-6 justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Secure 256-bit encryption
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-sm font-medium mb-2">100% Transparency Promise</p>
              <p className="text-xs text-muted-foreground">
                Every penny of your public donation goes directly to fund our programs. 
                Private donors cover our operating costs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
