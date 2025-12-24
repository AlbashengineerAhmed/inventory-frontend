"use client";

import { motion } from "framer-motion";
import { Laptop, Shirt, Coffee, Utensils, Watch, Music } from "lucide-react";

const categories = [
  { name: "Electronics", icon: Laptop, color: "bg-blue-500" },
  { name: "Fashion", icon: Shirt, color: "bg-pink-500" },
  { name: "Groceries", icon: Coffee, color: "bg-green-500" },
  { name: "Dining", icon: Utensils, color: "bg-orange-500" },
  { name: "Accessories", icon: Watch, color: "bg-purple-500" },
  { name: "Entertainment", icon: Music, color: "bg-red-500" },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of products organized for your convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 p-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-lg transition-all border border-zinc-200 dark:border-zinc-700">
                <div className={`p-4 rounded-full ${cat.color} bg-opacity-10 dark:bg-opacity-20 text-${cat.color.replace('bg-', '')} group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className={`h-8 w-8 ${cat.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="font-semibold text-lg">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
