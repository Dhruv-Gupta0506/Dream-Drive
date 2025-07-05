import wheelIcon from "@/assets/wheels.jpeg";
import ScrollArrow from './ScrollArrow';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center h-screen text-center overflow-hidden bg-black px-4"
    >
      {/* Top row: spinning wheels + text */}
      <div className="relative z-10 px-2 flex items-center justify-center space-x-2 mb-4 flex-nowrap overflow-hidden w-full max-w-screen-lg">
        {/* Left wheel */}
        <img
          src={wheelIcon}
          alt="Wheel Logo"
          className="h-16 w-16 md:h-20 md:w-20 spin-fade-in rounded-full shrink-0"
          style={{ animationDelay: '0.1s' }}
        />

        {/* Hero text */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold animate-float flex space-x-1 flex-wrap justify-center">
          <span className="fade-in bg-cyan-purple-pink-gradient" style={{ animationDelay: '1.0s' }}>Welcome</span>
          <span className="fade-in bg-cyan-purple-pink-gradient" style={{ animationDelay: '2.0s' }}>To</span>
          <span className="fade-in bg-cyan-purple-pink-gradient" style={{ animationDelay: '3.0s' }}>Dream Drive</span>
        </h1>

        {/* Right wheel */}
        <img
          src={wheelIcon}
          alt="Wheel Logo"
          className="h-16 w-16 md:h-20 md:w-20 spin-fade-in rounded-full shrink-0"
          style={{ animationDelay: '0.1s' }}
        />
      </div>

      {/* Subtitle */}
      <p
        className="text-base sm:text-xl md:text-3xl mb-6 fade-in bg-red-orange-white-gradient bg-clip-text text-transparent leading-normal max-w-sm sm:max-w-full"
        style={{ animationDelay: '3.5s' }}
      >
        Your Dream Garage In Style
      </p>

      {/* Bottom explore & arrow */}
      <div
        className="relative z-10 mt-8 fade-in flex flex-col items-center"
        style={{ animationDelay: '4.5s' }}
      >
        <p className="text-lg md:text-2xl font-medium bg-navbar-gradient hover:bg-navbar-hover-gradient bg-clip-text text-transparent mb-2">
          Explore
        </p>
        <ScrollArrow targetId="categories" />
      </div>
    </section>
  );
};

export default Hero;
