import { motion } from 'motion/react';

const instagramImages = [
  "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775681286/BG-1_ugnovs.png",
  "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775676264/Img_1_jl2mf4.png",
  "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775681322/BG-2_k5phcq.png",
  "https://res.cloudinary.com/debywjrlg/image/upload/v1775681988/BG-3_uqaw2u.png",
  "https://res.cloudinary.com/debywjrlg/image/upload/v1775682278/BG-5_i5mjfk.png",
  "https://res.cloudinary.com/debywjrlg/image/upload/v1775682021/BG-4_nlj7wc.png",
  "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775674261/3_w1efvk.png",
  "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775676243/Img_2_y7idng.png",
];

export default function InstagramFeed() {
  // Duplicate images for seamless infinite scroll
  const allImages = [...instagramImages, ...instagramImages];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-minds-cyan font-bold tracking-[0.3em] uppercase text-sm md:text-base">
          INSTAGRAM @MINDSCOWORK
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden">
        {/* Infinite Scroll Container */}
        <motion.div 
          className="flex gap-6 px-3"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 50, // Very slow speed to appreciate details
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {allImages.map((src, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={src} 
                alt={`Instagram Feed ${i}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
