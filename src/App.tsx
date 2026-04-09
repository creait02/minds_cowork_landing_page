/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import StrategicRelations from './components/sections/StrategicRelations';
import Testimonials from './components/sections/Testimonials';
import Services from './components/sections/Features';
import NewLocation from './components/sections/NewLocation';
import Gallery from './components/sections/Gallery';
import Locations from './components/sections/Locations';
import InstagramFeed from './components/sections/InstagramFeed';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      
      <Hero />
      
      <Intro />

      <StrategicRelations />

      <Testimonials />

      <Services />

      <NewLocation />

      <Gallery />

      <Locations />

      <InstagramFeed />

      <Footer />
    </main>
  );
}
