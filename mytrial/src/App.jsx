import React from 'react';
import "./App.css"
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CompanyLogoAnim from './components/CompanyLogoAnim';
import Purpose from "./components/Purpose";
import FeaturesSection from './components/FeaturesSection';
import ScheduleSection from './components/ScheduleSection';
import MonitorSection from './components/MonitorSection';
import PricingSection from './components/PrincingSection'
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="absolute -top-28 -left-28 w-125 h-125
      bg-linear-to-tr from-indigo-500/20 to-pink-500/20
      rounded-full blur-[80px] -z-10"
      />

      <NavBar />
      <Hero />
      <CompanyLogoAnim />
      <Purpose />
      <FeaturesSection />
      <ScheduleSection />
      <MonitorSection />
      <PricingSection />
      <ServicesSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );

}
