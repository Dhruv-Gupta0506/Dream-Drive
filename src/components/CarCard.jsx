import { useEffect, useRef, useState } from 'react';

const CarCard = ({ car, flip }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        flex flex-col md:flex-row items-center gap-6 transition-all duration-700
        ${flip ? 'md:flex-row-reverse' : ''}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* Gradient Image with Glow */}
      <div className="md:w-1/2 group p-[2px] rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-60 object-cover rounded-xl"
        />
      </div>

      {/* Plain Text Section – No box, just spacing */}
      <div className="md:w-1/2 space-y-3">
        <h3 className="text-2xl font-bold text-white">{car.name}</h3>
        <p className="text-gray-300">{car.description}</p>
        <p className="text-sm text-lime-400">Top Speed: {car.topSpeed} km/h</p>
        <p className="text-sm text-cyan-400">Price: {car.price}</p>
        <button className="cosmic-button mt-2">Add to Favorites</button>
      </div>
    </div>
  );
};

export default CarCard;
