"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Store Manager",
    content: "This POS system revolutionized how we handle our daily transactions. The inventory tracking is precise and the UI is stunning.",
    avatar: "AJ",
  },
  {
    name: "Sarah Williams",
    role: "Retail Owner",
    content: "Finally, a dashboard that looks as good as it performs. My staff learned it in minutes. Highly recommended!",
    avatar: "SW",
  },
  {
    name: "Michael Brown",
    role: "Franchise Operator",
    content: "The analytics feature helped us identify our best sellers and optimize stock. It's a game changer for our business growth.",
    avatar: "MB",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Retailers</h2>
          <p className="text-muted-foreground">See what our customers are saying about SmartPOS.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-lg bg-white/50 dark:bg-black/40 backdrop-blur-md">
                <CardContent className="p-8 flex flex-col gap-6">
                  <Quote className="h-10 w-10 text-primary/20" />
                  <p className="text-lg leading-relaxed italic">"{t.content}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">{t.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
