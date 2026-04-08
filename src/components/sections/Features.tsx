import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "OFICINA PRIVADA",
    desc: "Ten una presentación memorable en nuestras salas de conferencias y eventos. Disfruta de atención personalizada y un espacio adaptado a tus necesidades.",
    image: "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775674261/3_w1efvk.png",
    bgColor: "bg-minds-cyan"
  },
  {
    title: "SALA DE EVENTOS",
    desc: "Ten una presentación memorable en nuestras salas de conferencias y eventos. Disfruta de atención personalizada y un espacio adaptado a tus necesidades.",
    image: "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775674261/3_w1efvk.png",
    bgColor: "bg-[#2F2F2F]"
  },
  {
    title: "DAY PASS",
    desc: "Ten una presentación memorable en nuestras salas de conferencias y eventos. Disfruta de atención personalizada y un espacio adaptado a tus necesidades.",
    image: "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775674261/3_w1efvk.png",
    bgColor: "bg-minds-cyan"
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 w-12 lg:w-16 h-64 bg-[#007A87] hidden xl:block" />
      <div className="absolute right-0 bottom-0 w-12 lg:w-16 h-64 bg-[#007A87] hidden xl:block" />
      
      {/* Dots Pattern */}
      <div className="absolute right-24 bottom-24 hidden xl:grid grid-cols-12 gap-4 opacity-40">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full border-2 border-minds-cyan" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter text-minds-black">
            ¿Qué puedes hacer con nosotros?
          </h2>
          <div className="space-y-6 max-w-4xl">
            <p className="text-minds-grey text-xl font-medium leading-relaxed">
              Trabajar cómodamente, ya sea en una oficina privada o en la modalidad de escritorio flexi o day pass, organizar un evento memorable, llevar a cabo talleres, darles vida a tus ideas y crecer en comunidad.
            </p>
            <p className="text-minds-grey text-xl font-medium leading-relaxed">
              Todo esto de la mano de un equipo que trabaja para ofrecerte una atención personalizada y todo lo que necesitas para desarrollar tu potencial.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 z-10 hidden xl:block">
            <button className="w-12 h-12 flex items-center justify-center bg-[#F4F7F9] rounded-xl hover:bg-gray-200 transition-colors shadow-sm">
              <ChevronLeft className="w-6 h-6 text-minds-black" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 z-10 hidden xl:block">
            <button className="w-12 h-12 flex items-center justify-center bg-[#F4F7F9] rounded-xl hover:bg-gray-200 transition-colors shadow-sm">
              <ChevronRight className="w-6 h-6 text-minds-black" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className={`${service.bgColor} p-10 flex-grow flex flex-col items-center justify-center text-center`}>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-[15px] font-medium leading-relaxed max-w-[280px]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
