import { motion } from 'motion/react';

export default function Intro() {
  return (
    <section className="relative flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
        <img 
          src="https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775581099/Bitmap_bfpjiz.png" 
          alt="Minds Cowork Office Space" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 bg-[#F4F7F9] flex items-center justify-center px-8 lg:px-24 py-24 relative">
        {/* Decorative Circle (Sphere) */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#BDE3E9] rounded-full opacity-60 pointer-events-none" />
        
        {/* Outline Background Text "GROW" */}
        <div className="absolute -bottom-10 -right-10 text-[12rem] md:text-[18rem] font-black text-outline opacity-40 select-none uppercase leading-none pointer-events-none">
          GROW
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl relative z-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-[900] leading-[1] mb-10 uppercase tracking-[-0.04em]">
            <span className="text-minds-cyan">CONECTAMOS E IMPULSAMOS</span> <br />
            <span className="text-minds-black">A LAS PERSONAS QUE HACEN VIDA EN NUESTROS ESPACIOS MIENTRAS CRECEMOS COMO COMUNIDAD.</span>
          </h2>
          
          <p className="text-minds-grey text-lg md:text-xl font-medium leading-relaxed max-w-[90%]">
            Este lugar está pensado para brindarles a empresarios, profesionales establecidos, freelancers y emprendedores la oportunidad de trabajar a gusto y un arsenal de recursos para desarrollar su potencial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
