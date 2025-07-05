// src/components/CategoryGrid.jsx

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import hyperImg from "@/assets/hyper.jpeg";
import sportsImg from "@/assets/sports.jpeg";
import luxuryImg from "@/assets/luxury.jpeg";
import muscleImg from "@/assets/muscle.jpeg";

const categories = [
  {
    title: "Hyper Cars",
    slug: "hypercars", // ✅ fixed
    image: hyperImg,
    gradientClass: "text-hyper-gradient",
  },
  {
    title: "Sports Cars",
    slug: "sports", // ✅ correct
    image: sportsImg,
    gradientClass: "text-sport-gradient",
  },
  {
    title: "Luxury Cars",
    slug: "luxury", // ✅ correct
    image: luxuryImg,
    gradientClass: "text-luxury-gradient",
  },
  {
    title: "Muscle Cars",
    slug: "muscle", // ✅ fixed
    image: muscleImg,
    gradientClass: "text-muscle-gradient",
  },
];

const CategoryGrid = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-12 max-w-6xl mx-auto px-4"
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-8 bg-navbar-gradient bg-clip-text text-transparent transition-opacity duration-1000",
          inView ? "opacity-100 fade-in" : "opacity-0"
        )}
      >
        Browse By Category
      </h2>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-6 transition-opacity duration-1000",
          inView ? "opacity-100" : "opacity-0"
        )}
      >
        {categories.map((cat, idx) => (
          <Link
            to={`/category/${cat.slug}`}
            key={cat.slug}
            className={cn(
              "category-card transform scale-95 transition-transform duration-300",
              inView && "animate-drop-in",
              "hover:scale-105"
            )}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-40 sm:h-48 object-cover rounded-t-xl"
            />
            <div className="category-title-wrapper">
              <h2
                className={cn(
                  "text-xl md:text-2xl font-semibold text-center",
                  cat.gradientClass
                )}
              >
                {cat.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
