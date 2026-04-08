export default function Locations() {
  return (
    <section className="bg-minds-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">SEDE LAS MERCEDES</h3>
            <p className="text-gray-400 leading-relaxed">
              Torre Empresarial HTO, piso 1, calle Nueva York, <br />
              Urb. Las Mercedes, Caracas, Venezuela.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">SEDE EL ROSAL</h3>
            <p className="text-gray-400 leading-relaxed">
              Centro Empresarial Galipán, torre C, piso 4 y piso <br />
              12, Av. Francisco de Miranda, Caracas, Venezuela.
            </p>
          </div>
        </div>
        
        <div className="rounded-3xl overflow-hidden h-[400px] relative grayscale opacity-80">
          <img 
            src="https://picsum.photos/seed/map/1600/800" 
            alt="Map" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-minds-black/40" />
        </div>
      </div>
    </section>
  );
}
