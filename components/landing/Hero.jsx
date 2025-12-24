"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart2, ShoppingCart, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
            The Future of Retail Management
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Smart Inventory & <br />
            <span className="text-primary">Powerful POS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            Manage your store with elegance. Real-time tracking, seamless sales, and insightful analytics in one beautiful dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/login">
              <Button size="lg" className="rounded-full text-lg h-12 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#offers">
              <Button variant="outline" size="lg" className="rounded-full text-lg h-12 px-8 backdrop-blur-sm bg-white/50 dark:bg-black/50">
                View Offers
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Fast Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <BarChart2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Easy Sales</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
            {/* Glassmorphic Dashboard Preview Card */}
            <div className="relative z-10 rounded-2xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-2xl p-6 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl pointer-events-none" />
                
                {/* Mock UI Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="h-2 w-20 bg-primary/20 rounded-full" />
                </div>

                {/* Mock UI Content */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/50 dark:bg-zinc-800/50 rounded-xl p-4 backdrop-blur-md border border-white/10">
                            <div className="h-8 w-8 rounded-lg bg-primary/20 mb-3" />
                            <div className="h-2 w-16 bg-muted-foreground/20 rounded mb-2" />
                            <div className="h-4 w-12 bg-primary/40 rounded" />
                        </div>
                    ))}
                </div>

                <div className="bg-white/30 dark:bg-zinc-800/30 rounded-xl p-4 h-48 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <div className="text-muted-foreground/50 text-sm">Real-time Sales Chart</div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl border border-white/20 backdrop-blur-md"
            >
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                        <ArrowRight className="h-5 w-5 rotate-[-45deg]" />
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground">Revenue</div>
                        <div className="text-lg font-bold">+$12,450</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
