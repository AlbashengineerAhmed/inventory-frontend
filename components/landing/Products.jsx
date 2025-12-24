"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$299.00",
    rating: 4.8,
    image: "🎧",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: "$199.00",
    rating: 4.6,
    image: "⌚",
    tag: "New",
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    price: "$450.00",
    rating: 4.9,
    image: "🪑",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: "$150.00",
    rating: 4.7,
    image: "⌨️",
  },
];

export function Products() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Products</h2>
            <p className="text-muted-foreground">Top picks for your inventory this week.</p>
          </motion.div>
          <Button variant="ghost" className="hidden sm:flex">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                {product.image}
              </div>
              
              {product.tag && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground hover:bg-primary">
                  {product.tag}
                </Badge>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                    <Star className="h-4 w-4 fill-current" />
                    {product.rating}
                  </div>
                </div>
                <div className="text-muted-foreground text-sm mb-4">Premium Quality</div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <Button size="icon" className="rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
