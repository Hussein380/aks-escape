export interface Room {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  priceFrom: number;
  images: string[];
  amenities: string[];
  maxGuests: number;
  size: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
  location: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const rooms: Room[] = [
  {
    id: "1",
    slug: "deluxe-king",
    name: "Deluxe King",
    shortDescription: "Spacious king room with city views",
    longDescription: "Our signature Deluxe King room offers 35 square meters of contemporary luxury. Floor-to-ceiling windows provide stunning city views, while premium furnishings and marble accents create an atmosphere of sophisticated comfort.",
    priceFrom: 299,
    images: ["room-deluxe.jpg"],
    amenities: ["King Bed", "City View", "Marble Bathroom", "Minibar", "Free WiFi"],
    maxGuests: 2,
    size: "35 sqm"
  },
  {
    id: "2",
    slug: "twin-superior",
    name: "Twin Superior",
    shortDescription: "Modern twin room perfect for business travelers",
    longDescription: "Designed with the modern traveler in mind, our Twin Superior rooms feature two comfortable single beds, a dedicated workspace, and all the amenities needed for a productive stay.",
    priceFrom: 249,
    images: ["room-deluxe.jpg"],
    amenities: ["Twin Beds", "Work Desk", "High-Speed WiFi", "Coffee Machine"],
    maxGuests: 2,
    size: "30 sqm"
  },
  {
    id: "3",
    slug: "executive-suite",
    name: "Executive Suite",
    shortDescription: "Luxury suite with separate living area",
    longDescription: "Experience the pinnacle of luxury in our Executive Suite. With a separate living area, panoramic views, and exclusive access to the Executive Lounge, this suite redefines sophisticated hospitality.",
    priceFrom: 599,
    images: ["room-suite.jpg"],
    amenities: ["Separate Living Room", "Panoramic Views", "Executive Lounge Access", "Butler Service"],
    maxGuests: 3,
    size: "65 sqm"
  },
  {
    id: "4",
    slug: "family-suite",
    name: "Family Suite",
    shortDescription: "Spacious suite designed for families",
    longDescription: "Our Family Suite offers ample space for the whole family with connecting rooms, child-friendly amenities, and thoughtful touches that ensure comfort for guests of all ages.",
    priceFrom: 449,
    images: ["room-suite.jpg"],
    amenities: ["Connecting Rooms", "Kitchenette", "Kids' Amenities", "Balcony"],
    maxGuests: 4,
    size: "55 sqm"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    comment: "Absolutely exceptional service and stunning facilities. The attention to detail and luxury amenities made our anniversary celebration truly memorable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    location: "New York, USA"
  },
  {
    id: "2",
    name: "Michael Chen",
    comment: "Perfect location and impeccable staff. The business center and meeting facilities exceeded our expectations. Will definitely stay again.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    location: "Singapore"
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    comment: "The spa services were world-class and the rooftop restaurant offered incredible views. A truly luxurious experience from check-in to check-out.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    location: "Madrid, Spain"
  }
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 3:00 PM and check-out is until 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability."
  },
  {
    id: "2",
    question: "Do you offer airport shuttle service?",
    answer: "Yes, we provide complimentary airport shuttle service. Please contact our concierge at least 24 hours in advance to arrange pickup."
  },
  {
    id: "3",
    question: "What dining options are available?",
    answer: "AKs Hotel features three distinctive dining venues: our signature rooftop restaurant, a casual bistro, and 24-hour room service. We also offer special dietary accommodations."
  },
  {
    id: "4",
    question: "Is parking available?",
    answer: "Yes, we offer both self-parking and valet parking services. Complimentary parking is included for all guests staying in our suites."
  },
  {
    id: "5",
    question: "Do you have spa and wellness facilities?",
    answer: "Our world-class spa offers a full range of treatments, a fitness center with state-of-the-art equipment, an indoor pool, and a relaxation lounge."
  },
  {
    id: "6",
    question: "What business facilities do you provide?",
    answer: "We feature a fully equipped business center, multiple meeting rooms, a boardroom, and conference facilities with audiovisual equipment and dedicated event coordination."
  }
];

export const amenities: Amenity[] = [
  {
    id: "1",
    name: "Luxury Spa",
    icon: "Sparkles",
    description: "World-class spa treatments and wellness facilities"
  },
  {
    id: "2",
    name: "Fitness Center",
    icon: "Dumbbell",
    description: "State-of-the-art equipment and personal training"
  },
  {
    id: "3",
    name: "Fine Dining",
    icon: "ChefHat",
    description: "Award-winning restaurants and culinary experiences"
  },
  {
    id: "4",
    name: "Business Center",
    icon: "Building",
    description: "Meeting rooms and conference facilities"
  },
  {
    id: "5",
    name: "Pool & Terrace",
    icon: "Waves",
    description: "Rooftop pool with panoramic city views"
  },
  {
    id: "6",
    name: "Concierge",
    icon: "Bell",
    description: "24/7 personalized guest services"
  },
  {
    id: "7",
    name: "Free WiFi",
    icon: "Wifi",
    description: "High-speed internet throughout the hotel"
  },
  {
    id: "8",
    name: "Airport Shuttle",
    icon: "Car",
    description: "Complimentary transportation to/from airport"
  }
];