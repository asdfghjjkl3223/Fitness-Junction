export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  notFeatures?: string[];
  isPopular?: boolean;
}

export interface ServiceZone {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  image: string;
  details?: string[];
}

export interface GeneralFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentClass: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  stats: {
    clients: number;
    rating: number;
  };
}

export interface GymStats {
  members: number;
  trainers: number;
  space: number;
}
