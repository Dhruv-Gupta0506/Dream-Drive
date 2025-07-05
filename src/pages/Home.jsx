// src/pages/Home.jsx
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import CarForm from '../components/CarForm';

const Home = () => (
  <motion.main
    className="pt-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <Hero />
    <CategoryGrid />
    <CarForm />
  </motion.main>
);

export default Home;
