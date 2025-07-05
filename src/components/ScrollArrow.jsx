import { ArrowDown } from "lucide-react";

const ScrollArrow = ({ targetId = "categories" }) => {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex justify-center animate-bounce cursor-pointer"
      onClick={handleScroll}
    >
      <ArrowDown className="h-8 w-8 text-primary" />
    </div>
  );
};

export default ScrollArrow;
