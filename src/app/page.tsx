import AboutSection from "@/components/AboutSecction/AboutSecction";
import ArticlesSection from "@/components/ArticlesSection/ArticlesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import Footer from "@/components/Footer/Footer";
import GallerySection from "@/components/GallerySection/GallerySection";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSecction/HeroSecction";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Testimonials from "@/components/Testimonials/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection id="hero"/>
      <AboutSection id="about"/>
      <ServicesSection id="services"/>
      <ArticlesSection id="articles"/>
      <Testimonials id="testimonials"/>
      <GallerySection id="gallery"/>
      <FAQSection id="faq"/>
      <ContactSection id="contact"/>
      <Footer />
    </>
  );
}
