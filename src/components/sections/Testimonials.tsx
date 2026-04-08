import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Roberto',
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop',
    quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis mi ac vulputate cursus. Vivamus consectetur suscipit felis id semper.”',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop',
    quote: '“Excelente ambiente de trabajo y una comunidad increíble. He logrado conectar con personas maravillosas que han impulsado mi carrera.”',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <button 
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center bg-[#F4F7F9] rounded-xl hover:bg-gray-200 transition-colors shadow-sm"
          >
            <ChevronLeft className="w-6 h-6 text-minds-black" />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <button 
            onClick={next}
            className="w-12 h-12 flex items-center justify-center bg-[#F4F7F9] rounded-xl hover:bg-gray-200 transition-colors shadow-sm"
          >
            <ChevronRight className="w-6 h-6 text-minds-black" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Avatar */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${current.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={current.image} 
                  alt={current.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#F6AD55] text-[#F6AD55]" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-2xl md:text-3xl font-black text-minds-black mb-8 leading-tight tracking-tight">
                  {current.quote}
                </blockquote>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <span className="text-xl font-black text-minds-black uppercase tracking-tighter">
                    {current.name}
                  </span>
                  <span className="text-lg text-minds-grey font-medium">
                    {current.role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
