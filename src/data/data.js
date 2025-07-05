// Hypercars
import jeskoImg from "@/assets/jesko.jpeg";
import bolideImg from "@/assets/bolide.jpeg";
import huayraRImg from "@/assets/huayra_r.jpeg";

// Sports Cars
import gt3Img from "@/assets/gt3.jpeg";
import corvetteImg from "@/assets/corvette.jpeg";
import gtrImg from "@/assets/gtr.jpeg";

// Muscle Cars
import challengerImg from "@/assets/challenger.jpeg";
import mustangImg from "@/assets/mustang.jpeg";
import camaroImg from "@/assets/camaro.jpeg";

// Luxury Cars
import phantomImg from "@/assets/phantom.jpeg";
import flyingSpurImg from "@/assets/flyingspur.jpeg";
import maybachImg from "@/assets/maybach.jpeg";

// Category thumbnails (optional if reused)
import hyperImg from "@/assets/hyper.jpeg";
import sportsImg from "@/assets/sports.jpeg";
import muscleImg from "@/assets/muscle.jpeg";
import luxuryImg from "@/assets/luxury.jpeg";

export const categories = [
  { slug: "hypercars", title: "Hyper Cars", image: hyperImg },
  { slug: "sports", title: "Sports Cars", image: sportsImg },
  { slug: "muscle", title: "Muscle Cars", image: muscleImg },
  { slug: "luxury", title: "Luxury Cars", image: luxuryImg },
];

export const carsByCategory = {
  hypercars: [
    {
      id: 1,
      name: "Koenigsegg Jesko Absolut",
      topSpeed: 531,
      price: "$3,400,000",
      image: jeskoImg,
      description:
        "Engineered for extreme speed — aims to be the fastest production car ever built.",
    },
    {
      id: 2,
      name: "Bugatti Bolide",
      topSpeed: 500,
      price: "$4,700,000",
      image: bolideImg,
      description:
        "A track-focused hypercar with lightweight design and a W16 engine delivering insane power.",
    },
    {
      id: 3,
      name: "Pagani Huayra R",
      topSpeed: 355,
      price: "$3,100,000",
      image: huayraRImg,
      description:
        "A naturally aspirated V12 monster — built purely for the track with no compromises.",
    },
  ],
  sports: [
    {
      id: 4,
      name: "Porsche 911 GT3",
      topSpeed: 320,
      price: "$170,000",
      image: gt3Img,
      description:
        "Precision-engineered for the track, yet road-legal — the ultimate driver’s car.",
    },
    {
      id: 5,
      name: "Chevrolet Corvette C8",
      topSpeed: 312,
      price: "$70,000",
      image: corvetteImg,
      description:
        "A mid-engine American sports car icon — performance meets affordability.",
    },
    {
      id: 6,
      name: "Nissan GT-R",
      topSpeed: 315,
      price: "$115,000",
      image: gtrImg,
      description:
        "Nicknamed “Godzilla” — dominates with AWD grip and brutal acceleration.",
    },
  ],
  muscle: [
    {
      id: 7,
      name: "Dodge Challenger SRT Hellcat",
      topSpeed: 327,
      price: "$85,000",
      image: challengerImg,
      description:
        "Supercharged V8 beast with classic muscle car DNA — raw and untamed.",
    },
    {
      id: 8,
      name: "Ford Mustang Shelby GT500",
      topSpeed: 290,
      price: "$77,000",
      image: mustangImg,
      description:
        "The most powerful street-legal Ford ever — aggressive and agile.",
    },
    {
      id: 9,
      name: "Chevrolet Camaro ZL1",
      topSpeed: 305,
      price: "$72,000",
      image: camaroImg,
      description:
        "Track-ready muscle with supercharged performance and sharp styling.",
    },
  ],
  luxury: [
    {
      id: 10,
      name: "Rolls-Royce Phantom",
      topSpeed: 250,
      price: "$460,000",
      image: phantomImg,
      description:
        "The pinnacle of luxury motoring — handcrafted excellence and silence.",
    },
    {
      id: 11,
      name: "Bentley Flying Spur",
      topSpeed: 333,
      price: "$215,000",
      image: flyingSpurImg,
      description:
        "Luxury sedan with supercar performance — elegance meets power.",
    },
    {
      id: 12,
      name: "Mercedes-Maybach S680",
      topSpeed: 250,
      price: "$230,000",
      image: maybachImg,
      description:
        "A rolling palace — luxury redefined with V12 serenity and innovation.",
    },
  ],
};
