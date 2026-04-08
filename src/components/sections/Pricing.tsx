import { motion } from 'motion/react';
import { Check, Settings } from 'lucide-react';
import { useCMS } from '@/src/CMSContext';

export default function Pricing() {
  const { data, isAdmin, toggleAdmin, updateData } = useCMS();

  const updatePlanPrice = (id: string, newPrice: string) => {
    const newPlans = data.plans.map(p => p.id === id ? { ...p, price: newPrice } : p);
    updateData({ plans: newPlans });
  };

  return (
    <section id="planes" className="py-24 px-6 bg-gray-50 relative">
      {/* Admin Toggle Button */}
      <button 
        onClick={toggleAdmin}
        className="fixed bottom-6 right-6 z-[100] p-4 bg-brand-primary text-white rounded-full shadow-2xl hover:bg-brand-accent transition-all flex items-center gap-2 group"
      >
        <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
          {isAdmin ? 'Guardar Cambios' : 'Modo CMS'}
        </span>
      </button>

      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">Planes a tu <span className="text-brand-accent italic">medida</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light">Desde emprendedores individuales hasta equipos corporativos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border ${plan.recommended ? 'bg-white border-brand-accent shadow-2xl shadow-brand-accent/10 relative overflow-hidden' : 'bg-white border-gray-100'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-brand-accent text-white px-4 py-1 text-xs font-bold rounded-bl-xl">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                {isAdmin ? (
                  <input 
                    className="text-4xl font-black bg-transparent border-b border-brand-accent w-32 focus:outline-none"
                    value={plan.price}
                    onChange={(e) => updatePlanPrice(plan.id, e.target.value)}
                  />
                ) : (
                  <span className="text-4xl font-black">{plan.price}</span>
                )}
                <span className="text-gray-400 text-sm">/mes</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-brand-accent" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-brand-accent text-white hover:bg-brand-primary' : 'bg-gray-100 text-brand-primary hover:bg-gray-200'}`}>
                Elegir Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
