import { PricingPlan, ServiceZone, GeneralFeature, Trainer, GymStats } from "./types";

export const gymStats: GymStats = {
  members: 404,
  trainers: 9,
  space: 12120,
};

export const generalFeatures: GeneralFeature[] = [
  {
    id: "imported-equipment",
    title: "Imported Equipment",
    description: "Biomechanically flawless machinery for optimal gains.",
    iconName: "Dumbbell",
    accentClass: "text-surface-tint group-hover:bg-surface-tint/20",
  },
  {
    id: "climate-controlled",
    title: "Climate Controlled",
    description: "Fully AC environment for intense, uninterrupted workouts.",
    iconName: "Wind",
    accentClass: "text-secondary-container group-hover:bg-secondary-container/20",
  },
  {
    id: "rooftop-arena",
    title: "Rooftop Arena",
    description: "Open-air functional training space with panoramic views.",
    iconName: "Trees",
    accentClass: "text-surface-tint group-hover:bg-surface-tint/20",
  },
  {
    id: "pro-trainers",
    title: "Pro Trainers",
    description: "Certified experts dedicated to your transformation.",
    iconName: "Award",
    accentClass: "text-secondary-container group-hover:bg-secondary-container/20",
  },
];

export const serviceZones: ServiceZone[] = [
  {
    id: "functional-training",
    title: "Functional Training",
    description: "Dynamic movements on our specialized turf area to build real-world strength.",
    badge: "Zone A",
    badgeColor: "bg-surface-tint text-black",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlFa8PSTtXjnG3tt6xse2JGuNL2sv8BGS_weShrzoKMpKqbyadqSHryklgzv5-3Nuay1j8nlSUZ4vAWf2OIjadH3j76TtCYXYCKI7UDdzut-CmoKG7tSB5u4RpZhynhr5ilRRz71iutfalc3Egct-50YzJLib9x_-tQWt4pBvC8BEYCZCVEAb1tFkjipda4z0PP0wfDbZL4SIOTO-RKRwNJwHrnXw9AtyeBHuMSr8TwZ0iGmHBz-mB_tc9Uq69ztogs3cYAe5pbLc",
    details: [
      "Custom Sprinting & Sled Turf (30 meters)",
      "Premium Polyurethane Kettlebells (4kg to 48kg)",
      "Calisthenics Rigs & Gymnastic Rings",
      "Slam Balls, Plyo Boxes, and Battleropes",
    ],
  },
  {
    id: "protein-junction",
    title: "Protein Junction",
    description: "Premium supplements and post-workout recovery shakes available on-site.",
    badge: "Fuel",
    badgeColor: "bg-secondary-container text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtP93aKdbwPcKNiiWXbRNqf6_ydUMmwEb08TzijthilMtB5k0jesIkdfvc8pBV9tMygB0hXKYOG0VALqAkOgKOmjR_-qYx0S1qvsM6zQ3iz6QVm8iPa8QFZSVcFkZEN5P6rtXQiOq5kHyBw1U_uUwlCPBjyUkuY8V-1CWXNVwaJ4cIBU8KFKS4hDfgWq2xi4RKLCb98ciej2bR7W12-nkmxa5pu_aXRe7QyiRnTSJN7I_YimmYwzqB2C4vnEW3EAYJHnSGKXeT_YA",
    details: [
      "Whey Isolate & Vegan Protein Shakes",
      "Dynamic Pre-workout & BCAA recovery elixirs",
      "Custom nutrition planning & supplement advisor guidance",
      "Fresh cold-brew zero-sugar post-session energy refreshers",
    ],
  },
  {
    id: "strength-conquest",
    title: "Iron Sanctuary",
    description: "Dedicated heavy lifting zone featuring Olympic-grade plates, calibrated-bars, and elite benches.",
    badge: "Zone B",
    badgeColor: "bg-amber-500 text-black",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    details: [
      "Calibrated Powerlifting Plates",
      "5 Olympic Squat Rigs & Deadlift Platforms",
      "Professional Dumbbells ranging from 2.5kg to 60kg",
      "Athelite adjustable custom bench assets"
    ],
  },
  {
    id: "cardio-vortex",
    title: "Cardio Vortex",
    description: "Elevate your metabolic rate with high-performance treadmill, air-bike, and climbing suites.",
    badge: "Metabolic",
    badgeColor: "bg-cyan-500 text-black",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    details: [
      "Sled-push simulated smart treadmills",
      "Assault AirBikes and Rogue Echo Suites",
      "Concept2 SkiErg and Ergometer Rowers",
      "Live heart-rate zone telemetry diagnostics"
    ]
  }
];

export const trainers: Trainer[] = [
  {
    id: "trainer-vikram",
    name: "Vikram Singh",
    role: "Master Strength Coach",
    experience: "8+ Years",
    specialty: "Powerlifting & Body Recomposition",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop",
    stats: {
      clients: 150,
      rating: 4.9,
    }
  },
  {
    id: "trainer-neha",
    name: "Neha Sharma",
    role: "HIIT & Nutrition Specialist",
    experience: "6+ Years",
    specialty: "Functional Training & Weight Management",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    stats: {
      clients: 120,
      rating: 5.0,
    }
  },
  {
    id: "trainer-rajiv",
    name: "Rajiv Malhotra",
    role: "Athletic Performance Director",
    experience: "10+ Years",
    specialty: "Olympic Weightlifting & Strength Development",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop", // high-quality visual trainer portrait
    stats: {
      clients: 210,
      rating: 4.9,
    }
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: 2500,
    period: "mo",
    features: ["Full Gym Access", "Locker Room Access", "Complimentary High-Speed Wi-Fi"],
    notFeatures: ["Personal Training Sessions", "Free Towel & Laundry Service", "Bi-weekly Fitness Report"],
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: 6500,
    period: "3mo",
    features: ["Full Gym Access", "Locker Room Access", "2 Free PT Sessions", "Customized Diet Chart", "Shower Facility Access"],
    isPopular: true,
  },
  {
    id: "annual",
    name: "Annual",
    price: 22000,
    period: "yr",
    features: ["Full Gym Access & Premium Lockers", "1 Month Free Personal Training", "Unlimited Body Mass Scans", "Complementary Workout Apparel", "Global Lounge Access", "Dedicated Nutritional Coaching"],
  },
];
