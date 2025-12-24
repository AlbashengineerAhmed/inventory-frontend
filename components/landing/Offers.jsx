"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Timer, Tag } from "lucide-react";

export function Offers() {
  return (
    <section id="offers" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-pink-500/30 rounded-full blur-[80px]" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[80px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8 text-center md:text-left">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium border border-white/10">
                <Tag className="h-4 w-4" />
                <span>Limited Time Offer</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Get 50% Off Your First Month
              </h2>
              <p className="text-lg text-indigo-100">
                Experience the premium features of SmartPOS. No credit card required for the 14-day trial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-bold rounded-full h-12 px-8">
                  Claim Offer
                </Button>
                <div className="flex items-center gap-2 justify-center text-indigo-200 font-medium">
                  <Timer className="h-5 w-5" />
                  <span>Ends in 2 days</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="text-[120px] md:text-[180px] font-black leading-none opacity-20 select-none">
                50%
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl md:text-6xl font-bold rotate-[-10deg] bg-white text-indigo-600 px-6 py-2 shadow-xl transform hover:scale-110 transition-transform">
                  SALE
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
