import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-minds-black text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase max-w-md leading-tight">
            EN COMUNIDAD DESARROLLAMOS AÚN MÁS TU POTENCIAL
          </h2>
          
          <button className="px-10 py-4 bg-minds-cyan text-white font-bold rounded-lg uppercase tracking-widest hover:bg-minds-cyan/90 transition-all">
            Contactanos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 text-sm text-gray-400">
          <div>
            <p className="mb-4">
              <span className="text-white font-bold">Las Mercedes:</span> Torre Empresarial HTO, piso 1, calle Nueva York, Urb. Las Mercedes, Caracas, Venezuela.
            </p>
            <p>
              <span className="text-white font-bold">Sede El Rosal:</span> Centro Empresarial Galipán, torre C, piso 4 y piso 12, Av. Francisco de Miranda, Caracas, Venezuela.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 mb-4">
              <span className="text-white font-bold">Email:</span> info@mindscowork.com
            </p>
          </div>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 cursor-pointer hover:text-minds-cyan transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-minds-cyan transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-minds-cyan transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-minds-cyan transition-colors" />
          </div>
        </div>

        <div className="text-center text-[10px] text-gray-600 uppercase tracking-[0.3em] pt-10 border-t border-white/5">
          © 2026 Minds Cowork. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
