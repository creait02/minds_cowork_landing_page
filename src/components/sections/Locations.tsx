import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function Locations() {
  const sedes = [
    {
      name: "SEDE LAS MERCEDES",
      address: "Torre Empresarial HTO, piso 1, calle Nueva York, Urb. Las Mercedes, Caracas, Venezuela.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.2345!2d-66.8678!3d10.4845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI5JzA0LjIiTiA2NsKwNTInMDQuMSJX!5e0!3m2!1sen!2sve!4v123456789",
    },
    {
      name: "SEDE EL ROSAL",
      address: "Centro Empresarial Galipán, torre C, piso 4 y piso 12, Av. Francisco de Miranda, Caracas, Venezuela.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1234!2d-66.8567!3d10.4956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI5JzQ0LjIiTiA2NsKwNTEnMjQuMSJX!5e0!3m2!1sen!2sve!4v123456789",
    }
  ];

  return (
    <section className="bg-[#343434] py-24 px-6" id="sedes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            NUESTRAS SEDES
          </h2>
          <div className="w-24 h-2 bg-minds-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {sedes.map((sede, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#2F2F2F] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col"
            >
              {/* Map Placeholder Area */}
              <div className="h-80 w-full bg-[#3a3a3a] relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 p-8 text-center">
                  <MapPin className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-medium text-sm uppercase tracking-widest opacity-40">
                    Espacio para Google Maps
                  </p>
                  <p className="text-xs mt-2 opacity-30">
                    (Referencia para integración CMS)
                  </p>
                </div>
                {/* Visual placeholder for a map */}
                <div className="absolute inset-0 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={`https://picsum.photos/seed/map-${i}/800/600`} 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Info Area */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    {sede.name}
                  </h3>
                  <div className="bg-minds-cyan/10 p-3 rounded-2xl text-minds-cyan">
                    <Navigation className="w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                  {sede.address}
                </p>

                <button className="w-full py-4 bg-minds-cyan hover:bg-white hover:text-minds-black text-white font-bold rounded-2xl transition-all duration-300 uppercase tracking-widest text-sm shadow-lg hover:shadow-white/10">
                  Ver en Google Maps
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
