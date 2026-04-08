import { Play } from 'lucide-react';

export default function Gallery() {
  const columns = [
    // Column 1
    [
      { url: "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775681286/BG-1_ugnovs.png", aspect: "aspect-[4/5]" },
      { url: "https://res.cloudinary.com/debywjrlg/image/upload/v1775681988/BG-3_uqaw2u.png", aspect: "aspect-square" },
    ],
    // Column 2
    [
      { url: "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775676264/Img_1_jl2mf4.png", aspect: "aspect-square" },
      { url: "https://res.cloudinary.com/debywjrlg/image/upload/v1775682278/BG-5_i5mjfk.png", aspect: "aspect-[4/5]", isVideo: true },
    ],
    // Column 3
    [
      { url: "https://res.cloudinary.com/debywjrlg/image/upload/q_auto/f_auto/v1775681322/BG-2_k5phcq.png", aspect: "aspect-[3/4]" },
      { url: "https://res.cloudinary.com/debywjrlg/image/upload/v1775682021/BG-4_nlj7wc.png", aspect: "aspect-square" },
    ]
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {column.map((img, imgIndex) => (
              <div 
                key={imgIndex} 
                className={`relative group overflow-hidden rounded-3xl shadow-lg ${img.aspect}`}
              >
                <img 
                  src={img.url} 
                  alt={`Gallery ${colIndex}-${imgIndex}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {img.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-minds-cyan shadow-2xl transform transition-transform group-hover:scale-110">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
