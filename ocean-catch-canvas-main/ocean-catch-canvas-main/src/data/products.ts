import pallaIlish from "@/assets/fish/palla-ilish.jpg";
import khapiSilverBelly from "@/assets/fish/khapi-silver-belly.jpg";
import saundaleParava from "@/assets/fish/saundale-parava.jpg";
import katlaCarp from "@/assets/fish/katla-carp.jpg";
import mandeliAnchovy from "@/assets/fish/mandeli-anchovy.jpg";
import redSnapper from "@/assets/fish/red-snapper.jpg";
import seaBass from "@/assets/fish/sea-bass.jpg";
import squidCalamari from "@/assets/fish/squid-calamari.jpg";
import karliSilverBar from "@/assets/fish/karli-silver-bar.jpg";
import rohuCarp from "@/assets/fish/rohu-carp.jpg";
import tilapiaChilapi from "@/assets/fish/tilapia-chilapi.jpg";
import yellowfinTuna from "@/assets/fish/yellowfin-tuna.jpg";
import clamsTisrya from "@/assets/fish/clams-tisrya.jpg";
import daraPinkSalmon from "@/assets/fish/dara-pink-salmon.jpg";
import rawasIndianSalmon from "@/assets/fish/rawas-indian-salmon.jpg";
import bombilBombayDuck from "@/assets/fish/bombil-bombay-duck.jpg";
import bangdaMackerel from "@/assets/fish/bangda-mackerel.jpg";
import seerSurmai from "@/assets/fish/seer-surmai.jpg";
import silverPomfret from "@/assets/fish/silver-pomfret.jpg";
import chinesePomfret from "@/assets/fish/chinese-pomfret.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  unit: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  nutritional: {
    calories: string;
    protein: string;
    fat: string;
    omega3: string;
  };
  origin: string;
  freshness: string;
  storage: string;
}

export const products: Product[] = [
  {
    id: "palla-ilish",
    name: "Palla (Ilish)",
    category: "Fresh Fish",
    tagline: "Renowned for distinctive flavor, fatty texture",
    price: "$28.99",
    unit: "per lb",
    image: pallaIlish,
    rating: 4.9,
    reviews: 189,
    description:
      "The Palla/Ilish is renowned for its distinctive flavor, fatty texture, and large size, making it one of the most popular fish in the region. Ilish is mainly found in river systems, especially in the Ganges and Brahmaputra rivers that flow into the Bay of Bengal, as well as in coastal areas.",
    features: [
      "High in Omega-3 fatty acids for heart health",
      "Rich source of high-quality protein",
      "Packed with Vitamin D and B12",
      "Contains healthy unsaturated fats",
      "Low in calories despite high fat content"
    ],
    nutritional: {
      calories: "185 per 100g",
      protein: "20g",
      fat: "11g",
      omega3: "2.8g"
    },
    origin: "Ganges and Brahmaputra rivers, Bay of Bengal",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "khapi-silver-belly",
    name: "Khapi (Silver Belly Pony Fish)",
    category: "Fresh Fish",
    tagline: "Small, shiny fish with silvery belly",
    price: "$12.99",
    unit: "per lb",
    image: khapiSilverBelly,
    rating: 4.5,
    reviews: 87,
    description:
      "Khapi, also known as Silver Belly Pony Fish, is a small, shiny fish with a distinctive silvery belly. Popular in coastal cuisines, it's known for its delicate flavor and is often fried or used in curries.",
    features: [
      "Rich in protein and low in calories",
      "Good source of calcium for bone health",
      "Contains essential minerals like phosphorus",
      "Easy to cook and digest",
      "Affordable and versatile"
    ],
    nutritional: {
      calories: "95 per 100g",
      protein: "18g",
      fat: "2g",
      omega3: "0.5g"
    },
    origin: "Indian Ocean coastal waters",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "saundale-parava",
    name: "Saundale (Parava / False Travelly)",
    category: "Marine Fish",
    tagline: "Mild flavor and firm texture",
    price: "$22.99",
    unit: "per lb",
    image: saundaleParava,
    rating: 4.6,
    reviews: 124,
    description:
      "Saundale, also known as Parava or False Travelly, is a marine fish with mild flavor and firm texture. It's excellent for grilling, frying, or curry preparations and is popular in coastal regions.",
    features: [
      "Firm texture ideal for grilling",
      "Rich in lean protein",
      "Good source of Vitamin B complex",
      "Low in saturated fats",
      "Versatile cooking options"
    ],
    nutritional: {
      calories: "110 per 100g",
      protein: "22g",
      fat: "3g",
      omega3: "0.8g"
    },
    origin: "Arabian Sea and Bay of Bengal",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "katla-carp",
    name: "Katla Fish",
    category: "Freshwater Fish",
    tagline: "Rich and flavorful freshwater delight",
    price: "$18.99",
    unit: "per lb",
    image: katlaCarp,
    rating: 4.7,
    reviews: 156,
    description:
      "Katla is a freshwater carp known for its rich, flavorful flesh. Popular in South Asian cuisine, it's excellent for traditional curries and has a distinctive taste that pairs well with bold spices.",
    features: [
      "High protein content",
      "Rich in Omega-3 fatty acids",
      "Good source of Vitamin A and D",
      "Supports heart and brain health",
      "Traditional favorite in Bengali cuisine"
    ],
    nutritional: {
      calories: "130 per 100g",
      protein: "19g",
      fat: "6g",
      omega3: "1.2g"
    },
    origin: "Rivers of India and Bangladesh",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "mandeli-anchovy",
    name: "Mandeli (Anchovy)",
    category: "Small Fish",
    tagline: "Small fish with big umami flavor",
    price: "$8.99",
    unit: "per lb",
    image: mandeliAnchovy,
    rating: 4.4,
    reviews: 92,
    description:
      "Mandeli, commonly known as Anchovy, is a small fish packed with intense umami flavor. These tiny fish are nutrient-dense and can be fried crispy or used to add depth to curries and condiments.",
    features: [
      "Extremely high in calcium",
      "Rich source of iron and niacin",
      "Packed with Omega-3 fatty acids",
      "Boosts immunity and metabolism",
      "Perfect for frying or curry"
    ],
    nutritional: {
      calories: "131 per 100g",
      protein: "20g",
      fat: "5g",
      omega3: "2.1g"
    },
    origin: "Coastal waters of India",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "red-snapper-tamoshi",
    name: "Red Snapper (Tamoshi)",
    category: "Fresh Fish",
    tagline: "Prized and flavorful seafood",
    price: "$32.99",
    unit: "per lb",
    image: redSnapper,
    rating: 4.8,
    reviews: 203,
    description:
      "Red Snapper, locally known as Tamoshi, is a prized fish with firm, white flesh and a sweet, nutty flavor. Its beautiful red skin and delicious taste make it a favorite for special occasions and fine dining.",
    features: [
      "Lean protein with low fat content",
      "Rich in selenium and B vitamins",
      "Supports thyroid function",
      "Firm texture perfect for grilling",
      "Mild, slightly sweet flavor"
    ],
    nutritional: {
      calories: "100 per 100g",
      protein: "20g",
      fat: "1.3g",
      omega3: "0.3g"
    },
    origin: "Deep sea waters, Indian Ocean",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "sea-bass-bhetki",
    name: "Sea Bass (Bhetki / Chonak)",
    category: "Fresh Fish",
    tagline: "Delicate and versatile seafood",
    price: "$24.99",
    unit: "per lb",
    image: seaBass,
    rating: 4.8,
    reviews: 178,
    description:
      "Sea Bass, known as Bhetki or Chonak in India, is prized for its delicate, buttery flavor and flaky white flesh. This versatile fish is low in fat and adapts beautifully to various cooking methods.",
    features: [
      "Low in fat, high in protein",
      "Rich in Omega-3 and Omega-6",
      "Good source of potassium",
      "Supports cardiovascular health",
      "Delicate, flaky texture"
    ],
    nutritional: {
      calories: "97 per 100g",
      protein: "18g",
      fat: "2g",
      omega3: "0.6g"
    },
    origin: "Coastal waters and estuaries",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "chinese-pomfret",
    name: "Chinese Pomfret (Kapri)",
    category: "Premium Fish",
    tagline: "Mild yet rich flavor profile",
    price: "$38.99",
    unit: "per lb",
    image: chinesePomfret,
    rating: 4.8,
    reviews: 223,
    description: "Chinese Pomfret, known as Kapri, is a premium fish with mild yet rich flavor and tender texture. It's versatile and delicious whether steamed, fried, or grilled.",
    features: [
      "Mild, versatile flavor",
      "Tender, flaky texture",
      "Rich in protein and Omega-3",
      "Good source of calcium",
      "Few bones, easy to eat"
    ],
    nutritional: {
      calories: "105 per 100g",
      protein: "19g",
      fat: "3g",
      omega3: "0.9g"
    },
    origin: "East Asian and Indian waters",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "bombil-bombay-duck",
    name: "Bombil / Bombay Duck",
    category: "Premium Fish",
    tagline: "Delicate and mildly sweet flavor",
    price: "$14.99",
    unit: "per lb",
    image: bombilBombayDuck, 
    rating: 4.5,
    reviews: 189,
    description: "Bombil, also known as Bombay Duck, is a unique fish with soft, gelatinous flesh and a delicate sweet flavor. Perfect for frying, grilling, or curries.",
    features: [
      "Soft, delicate texture",
      "Mildly sweet flavor",
      "Rich in protein and Omega-3",
      "Low in calories",
      "Absorbs spices well"
    ],
    nutritional: {
      calories: "95 per 100g",
      protein: "18g",
      fat: "2g",
      omega3: "0.8g"
    },
    origin: "Indian coastal waters",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "chinese-pomfret",
    name: "Chinese Pomfret (Kapri)",
    category: "Premium Fish",
    tagline: "Mild yet rich flavor profile",
    price: "$38.99",
    unit: "per lb",
    image: chinesePomfret,
    rating: 4.8,
    reviews: 223,
    description: "Chinese Pomfret, known as Kapri, is a premium fish with mild yet rich flavor and tender texture. It's versatile and delicious whether steamed, fried, or grilled.",
    features: [
      "Mild, versatile flavor",
      "Tender, flaky texture",
      "Rich in protein and Omega-3",
      "Good source of calcium",
      "Few bones, easy to eat"
    ],
    nutritional: {
      calories: "105 per 100g",
      protein: "19g",
      fat: "3g",
      omega3: "0.9g"
    },
    origin: "East Asian and Indian waters",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "katla-fish",
    name: "Katla Fish",
    category: "Freshwater Fish",
    tagline: "Rich and flavorful freshwater delicacy",
    price: "$12.99",
    unit: "per lb",
    image: katlaCarp, 
    rating: 4.6,
    reviews: 156,
    description: "Katla, a prominent freshwater fish, offers firm, tender flesh with a slightly oily texture. Ideal for curries, frying, steaming, or tandoori preparations.",
    features: [
      "Firm, tender flesh",
      "Slightly oily, flavorful",
      "Rich in protein and Omega-3",
      "Good source of vitamins & minerals",
      "Popular in South Asian cuisine"
    ],
    nutritional: {
      calories: "110 per 100g",
      protein: "20g",
      fat: "3.5g",
      omega3: "0.7g"
    },
    origin: "Rivers and lakes of South Asia",
    freshness: "Freshwater catch daily",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "silver-pomfret",
    name: "Silver Pomfret",
    category: "Premium Fish",
    tagline: "Delicate flavor with flaky texture",
    price: "$42.99",
    unit: "per lb",
    image: silverPomfret, 
    rating: 4.9,
    reviews: 248,
    description: "Silver Pomfret is a highly sought-after fish with mild, delicate flavor and tender, flaky texture. Perfect for grilling, steaming, frying, or curries.",
    features: [
      "Mild, subtle flavor",
      "Tender, flaky texture",
      "Rich in protein and Omega-3",
      "Low in calories",
      "Versatile in cooking methods"
    ],
    nutritional: {
      calories: "100 per 100g",
      protein: "19g",
      fat: "2.5g",
      omega3: "0.95g"
    },
    origin: "Indian Ocean and South China Sea",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  },
  {
    id: "seer-surmai-fish",
    name: "Seer / Surmai Fish",
    category: "Premium Fish",
    tagline: "Rich flavor and firm texture",
    price: "$36.99",
    unit: "per lb",
    image: seerSurmai, 
    rating: 4.7,
    reviews: 201,
    description: "Seer fish, also known as Surmai, is a premium Indo-Pacific fish with firm, flaky flesh and mild sweetness. Ideal for grilling, frying, curries, or tandoori preparations.",
    features: [
      "Firm, flaky texture",
      "Rich, mildly sweet flavor",
      "High in protein and Omega-3",
      "Versatile in cooking",
      "Nutrient-rich"
    ],
    nutritional: {
      calories: "115 per 100g",
      protein: "21g",
      fat: "4g",
      omega3: "1g"
    },
    origin: "Indian Ocean and Southeast Asia",
    freshness: "Fresh daily catch",
    storage: "Keep refrigerated at 32-38°F"
  }
];

export const categories = [
  "All",
  "Fresh Fish",
  "Freshwater Fish",
  "Marine Fish",
  "Shellfish",
  "Premium Fish",
  "Oily Fish",
  "Small Fish",
  "Large Fish",
  "Unique Fish"
];
