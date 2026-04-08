import { motion } from 'motion/react';

export default function StrategicRelations() {
  return (
    <section className="relative flex flex-col lg:flex-row overflow-hidden min-h-[600px]">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 bg-minds-cyan flex items-center justify-center px-8 lg:px-24 py-24 relative overflow-hidden">
        {/* Outline Background Text "NEAR HOME" */}
        <div className="absolute -bottom-10 -left-6 text-[8rem] md:text-[12rem] font-black text-outline-white opacity-40 select-none uppercase leading-[0.75] pointer-events-none z-0 flex flex-col">
          <span>NEAR</span>
          <span className="ml-32 md:ml-56">HOME</span>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl relative z-10 text-white"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase leading-tight tracking-tight">
            NOS MOTIVA SER PROMOTORES <br />
            DE RELACIONES ESTRATÉGICAS
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed">
            ¡Nos motiva ser promotores de relaciones estratégicas entre nuestros miembros y todas las personas que visitan nuestros espacios!
          </p>
          <button className="px-10 py-4 bg-white text-minds-cyan rounded-xl font-black hover:bg-white/90 transition-all uppercase text-lg tracking-tight shadow-xl">
            Agenda un tour
          </button>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
        <img 
          src="https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775665506/Group_jwyfsl.png" 
          alt="Strategic Relations" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
