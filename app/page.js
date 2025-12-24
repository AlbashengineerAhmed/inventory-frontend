import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Categories } from "@/components/landing/Categories";
import { Products } from "@/components/landing/Products";
import { Testimonials } from "@/components/landing/Testimonials";
import { Brands } from "@/components/landing/Brands";
import { Offers } from "@/components/landing/Offers";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Categories />
        <Products />
        <Offers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
