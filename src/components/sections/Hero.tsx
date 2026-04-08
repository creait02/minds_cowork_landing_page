import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-96px)] flex flex-col lg:flex-row overflow-hidden mt-24">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 bg-[#F4F7F9] flex items-center justify-center px-8 lg:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[68px] font-[900] leading-[0.9] mb-12 text-minds-black tracking-[-0.04em] uppercase">
            EN COMUNIDAD <br />
            DESARROLLAMOS AÚN <br />
            MÁS TU POTENCIAL
          </h1>
          <button className="px-16 py-4 bg-minds-cyan text-white text-xl font-bold rounded-xl hover:bg-minds-cyan/90 transition-all">
            Unete
          </button>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
        <img 
          src="https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775580835/4_ethwqh.png" 
          alt="Minds Cowork Reception" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
