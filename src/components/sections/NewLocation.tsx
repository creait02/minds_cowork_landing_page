import { motion } from 'motion/react';

export default function NewLocation() {
  return (
    <section className="relative bg-white pt-24 pb-48 overflow-hidden">
      {/* Cyan Background Block - occupies about 60% of the section height for pop-out effect */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-minds-cyan z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-start">
          
          {/* Left Side Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                APERTURA NUEVA SEDE
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <p className="text-white text-xl font-medium leading-relaxed max-w-xl">
                Apostando por espacios de llenos de personalidad, calidez y versatilidad que sirvan de inspiración para desarrollar el potencial de pequeños y grandes empresarios dentro de nuestra comunidad.
              </p>
            </motion.div>

            {/* Left Image - Vertical aspect to match right image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-lg"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775676264/Img_1_jl2mf4.png" 
                  alt="Interior Design" 
                  className="w-full h-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side Image - Starts higher up, between title and description */}
          <div className="relative pt-16 lg:pt-36">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775676243/Img_2_y7idng.png" 
                  alt="Team Office" 
                  className="w-full h-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Far Right Vertical Text "LANZAMIENTO" */}
      <div className="absolute top-0 right-0 h-[60%] w-24 md:w-40 flex items-center justify-center pointer-events-none overflow-hidden z-20">
        <div className="rotate-90 text-white text-[8rem] md:text-[11rem] font-black uppercase tracking-tighter leading-none whitespace-nowrap">
          LANZAMIENTO
        </div>
      </div>
    </section>
  );
}
