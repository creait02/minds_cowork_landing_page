import { Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            EN COMUNIDAD DESARROLLAMOS AÚN MÁS TU POTENCIAL
          </h2>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            {/* Contact Info */}
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="space-y-2 text-[15px] text-gray-400">
                <p>
                  <span className="text-gray-300 font-bold">Las Mercedes:</span> Torre Empresarial HTO, piso 1, calle Nueva York, Urb. Las Mercedes, Caracas, Venezuela.
                </p>
                <p>
                  <span className="text-gray-300 font-bold">Sede El Rosal:</span> Centro Empresarial Galipán, torre C, piso 4, Av. Francisco de Miranda, Caracas, Venezuela.
                </p>
              </div>

              {/* Email with Icon */}
              <div className="flex items-center gap-3 mt-2">
                <Mail className="w-5 h-5 text-white" />
                <a 
                  href="mailto:infoccs@mindscowork.com" 
                  className="text-white font-bold underline decoration-1 underline-offset-4 hover:text-minds-cyan transition-colors"
                >
                  infoccs@mindscowork.com
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <button className="px-12 py-4 bg-minds-cyan text-white font-black rounded-lg uppercase tracking-tighter text-xl hover:bg-minds-cyan/90 transition-all shadow-lg">
              CONTACTANOS
            </button>
          </div>

          {/* Social Icons and Divider */}
          <div className="pt-10 mt-4 border-t border-white/5 flex items-center gap-6">
            <Twitter className="w-5 h-5 cursor-pointer text-[#55ACEE] hover:scale-110 transition-transform" />
            <Facebook className="w-5 h-5 cursor-pointer text-white hover:text-minds-cyan transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer text-white hover:text-minds-cyan transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer text-white hover:text-minds-cyan transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
