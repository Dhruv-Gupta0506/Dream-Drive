import CarCard from './CarCard';

const CarSection = ({ cars }) => (
  <section className="py-12 max-w-6xl mx-auto px-4 space-y-12">
    {cars.map((car, index) => (
      <CarCard key={car.id} car={car} flip={index % 2 !== 0} />
    ))}
  </section>
);

export default CarSection;
