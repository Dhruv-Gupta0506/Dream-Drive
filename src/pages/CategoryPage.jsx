// src/pages/CategoryPage.jsx
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { categories, carsByCategory } from '../data/data';
import CarSection from '../components/CarSection';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const { type } = useParams();
  const category = categories.find(c => c.slug === type);
  const cars = carsByCategory[type] || [];

  if (!category) {
    return <p className="text-center py-12">Category not found</p>;
  }

  return (
    <motion.main
      className="pt-24 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-float bg-navbar-gradient bg-clip-text text-transparent">
        {category.title}
      </h1>
      <CarSection cars={cars} />
      <div className="text-center mt-8">
        <Link to="/" className="cosmic-button">← Back to Home</Link>
      </div>
    </motion.main>
  );
};

export default CategoryPage;
