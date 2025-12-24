"use client";

import { motion } from "framer-motion";

const brands = [
  "Acme Corp", "GlobalTech", "Nebula", "Velocity", "FoxRun", "Circle", "Trio"
];

export function Brands() {
  return (
    <section className="py-12 border-y border-zinc-100 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-widest">
          Powering 500+ Businesses Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold font-serif"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
