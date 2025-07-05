import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 },
          color: { value: ["#ff00ff", "#00ffff", "#ffffff"] },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
        },
        background: { color: "transparent" },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

const CarForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    carName: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!\n\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <section className="relative py-16 px-6 min-h-screen bg-black text-white flex items-center justify-center">
      <BackgroundParticles />

      <div className="relative z-10 max-w-3xl w-full glassmorphic p-10 rounded-3xl shadow-[0_0_40px_#ff00ff44] transition-all hover:shadow-[0_0_60px_#ff00ff88] border border-pink-500/20">
        <h2 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-transparent bg-clip-text animate-fadeIn">
          Add Your Dream Car
        </h2>
        <p className="text-center text-sm text-gray-300 mb-8 animate-fadeIn delay-300">
          Share your dream car and we might feature it!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn delay-500">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-semibold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="carName" className="block mb-1 text-sm font-semibold">
              Dream Car Name
            </label>
            <input
              type="text"
              id="carName"
              name="carName"
              value={formData.carName}
              onChange={handleChange}
              placeholder="BMW M5 Competition"
              className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block mb-1 text-sm font-semibold">
              Why this car?
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Because it sounds amazing and looks perfect..."
              rows={4}
              className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 hover:from-pink-400 hover:to-cyan-300 transition-all shadow-[0_0_20px_#ff00ff66] hover:shadow-[0_0_25px_#ff00ffaa] animate-glow"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CarForm;
