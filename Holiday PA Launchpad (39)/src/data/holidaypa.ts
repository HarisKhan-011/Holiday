import catChef from "@/assets/cat-chef.jpg";
import catSpa from "@/assets/cat-spa.jpg";
import catActivities from "@/assets/cat-activities.jpg";
import catTransfer from "@/assets/cat-transfer.jpg";
import catGrocery from "@/assets/cat-grocery.jpg";
import catMassage from "@/assets/cat-massage.jpg";
import destMallorca from "@/assets/dest-mallorca.jpg";
import destMarbella from "@/assets/dest-marbella.jpg";
import destSantorini from "@/assets/dest-santorini.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destAmalfi from "@/assets/dest-amalfi.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "private-chefs",
    name: "Private Chefs",
    blurb: "Restaurant-grade dining in your villa, from breakfast spreads to tasting menus.",
    image: catChef,
  },
  {
    slug: "spa-wellness",
    name: "Spa & Wellness",
    blurb: "Treatments, facials and recovery sessions brought to your door.",
    image: catSpa,
  },
  {
    slug: "activities",
    name: "Activities & Experiences",
    blurb: "Yacht days, guided tours and once-in-a-trip moments, fully arranged.",
    image: catActivities,
  },
  {
    slug: "airport-transfers",
    name: "Airport Transfers",
    blurb: "Private, on-time chauffeurs from the gate to your front door.",
    image: catTransfer,
  },
  {
    slug: "grocery-prestock",
    name: "Grocery Pre-stock",
    blurb: "Arrive to a fridge that's already full with everything you love.",
    image: catGrocery,
  },
  {
    slug: "in-villa-massage",
    name: "In-villa Massage",
    blurb: "Unwind with a therapist on your terrace, overlooking the sea.",
    image: catMassage,
  },
];

export type Service = {
  id: string;
  title: string;
  category: string;
  categoryName: string;
  location: string;
  priceFrom: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  includes: string[];
  provider: string;
  providerBlurb: string;
  duration: string;
};

export const services: Service[] = [
  {
    id: "coastal-tasting-menu",
    title: "Coastal Tasting Menu",
    category: "private-chefs",
    categoryName: "Private Chefs",
    location: "Mallorca, Spain",
    priceFrom: 95,
    rating: 4.9,
    reviews: 214,
    image: catChef,
    description:
      "A five-course seasonal tasting menu cooked and plated in your villa by an award-winning local chef. Each dish celebrates Mediterranean produce sourced from nearby markets that morning.",
    includes: ["5-course tasting menu", "Personal chef & commis", "Market-fresh ingredients", "Full kitchen clean-down"],
    provider: "Chef Marco Rivas",
    providerBlurb: "Marco trained in Michelin kitchens across Barcelona and San Sebastián before going private.",
    duration: "≈ 3.5 hours",
  },
  {
    id: "sunset-deep-tissue",
    title: "Sunset Deep-Tissue Massage",
    category: "in-villa-massage",
    categoryName: "In-villa Massage",
    location: "Santorini, Greece",
    priceFrom: 70,
    rating: 4.95,
    reviews: 168,
    image: catMassage,
    description:
      "A restorative 75-minute deep-tissue treatment on your terrace as the sun sets. Your therapist brings the table, oils and calming playlist — you just relax.",
    includes: ["75-minute treatment", "Mobile massage table", "Aromatherapy oils", "Therapist travel included"],
    provider: "Aegean Wellness Co.",
    providerBlurb: "A collective of certified therapists serving the Cyclades islands since 2016.",
    duration: "75 minutes",
  },
  {
    id: "private-yacht-day",
    title: "Private Yacht Day",
    category: "activities",
    categoryName: "Activities & Experiences",
    location: "Marbella, Spain",
    priceFrom: 320,
    rating: 4.88,
    reviews: 96,
    image: catActivities,
    description:
      "A full day aboard a private motor yacht with skipper, swim stops in hidden coves, paddleboards and chilled drinks on board.",
    includes: ["Skippered motor yacht", "Fuel & mooring", "Paddleboards & snorkels", "Drinks & light bites"],
    provider: "Costa Charters",
    providerBlurb: "Family-run charter company with a fleet of immaculately maintained yachts.",
    duration: "8 hours",
  },
  {
    id: "airport-chauffeur",
    title: "Private Airport Chauffeur",
    category: "airport-transfers",
    categoryName: "Airport Transfers",
    location: "Dubai, UAE",
    priceFrom: 55,
    rating: 4.92,
    reviews: 312,
    image: catTransfer,
    description:
      "A professional chauffeur meets you in arrivals with a name board and whisks you to your rental in a chilled executive sedan.",
    includes: ["Meet & greet in arrivals", "Executive sedan", "Flight tracking", "60 min free wait time"],
    provider: "Elite Drive",
    providerBlurb: "Licensed chauffeur service with a 5-star safety record across the Emirates.",
    duration: "Door to door",
  },
  {
    id: "villa-grocery-prestock",
    title: "Villa Grocery Pre-stock",
    category: "grocery-prestock",
    categoryName: "Grocery Pre-stock",
    location: "Amalfi, Italy",
    priceFrom: 40,
    rating: 4.85,
    reviews: 142,
    image: catGrocery,
    description:
      "Send us your shopping list and arrive to a fully stocked kitchen — fresh bread, local produce, wine and breakfast essentials waiting for you.",
    includes: ["Personalised shopping list", "Local & organic produce", "Fridge & pantry stocking", "Welcome flowers"],
    provider: "Costiera Concierge",
    providerBlurb: "Local concierge team with deep relationships across Amalfi's family markets.",
    duration: "Before arrival",
  },
  {
    id: "poolside-facial",
    title: "Poolside Glow Facial",
    category: "spa-wellness",
    categoryName: "Spa & Wellness",
    location: "Bali, Indonesia",
    priceFrom: 65,
    rating: 4.9,
    reviews: 188,
    image: catSpa,
    description:
      "A 60-minute brightening facial using botanical Balinese skincare, performed poolside with a scalp and shoulder massage to finish.",
    includes: ["60-minute facial", "Botanical skincare", "Scalp & shoulder massage", "Therapist to your villa"],
    provider: "Ubud Glow Studio",
    providerBlurb: "Boutique skincare studio blending Balinese ritual with clinical results.",
    duration: "60 minutes",
  },
  {
    id: "breakfast-chef",
    title: "Daily Breakfast Chef",
    category: "private-chefs",
    categoryName: "Private Chefs",
    location: "Bali, Indonesia",
    priceFrom: 45,
    rating: 4.87,
    reviews: 121,
    image: catChef,
    description:
      "Wake to a freshly made breakfast each morning — tropical fruit, fresh juices, pastries and a hot dish of your choice.",
    includes: ["Daily breakfast service", "Fresh juices & coffee", "Seasonal fruit", "Kitchen tidy-up"],
    provider: "Island Table",
    providerBlurb: "A team of private cooks specialising in relaxed island breakfasts.",
    duration: "Each morning",
  },
  {
    id: "guided-coast-hike",
    title: "Guided Sunrise Coast Hike",
    category: "activities",
    categoryName: "Activities & Experiences",
    location: "Amalfi, Italy",
    priceFrom: 38,
    rating: 4.91,
    reviews: 77,
    image: catActivities,
    description:
      "A guided sunrise hike along the cliff paths with a local expert, finishing with espresso and pastries in a hidden village.",
    includes: ["Expert local guide", "Sunrise timing", "Coffee & pastries", "Photo stops"],
    provider: "Sentieri Walks",
    providerBlurb: "Certified mountain guides sharing the secret trails of the Amalfi Coast.",
    duration: "3 hours",
  },
];

export type Destination = {
  name: string;
  country: string;
  image: string;
  services: number;
};

export const destinations: Destination[] = [
  { name: "Mallorca", country: "Spain", image: destMallorca, services: 142 },
  { name: "Marbella", country: "Spain", image: destMarbella, services: 118 },
  { name: "Santorini", country: "Greece", image: destSantorini, services: 96 },
  { name: "Dubai", country: "UAE", image: destDubai, services: 203 },
  { name: "Bali", country: "Indonesia", image: destBali, services: 167 },
  { name: "Amalfi", country: "Italy", image: destAmalfi, services: 84 },
];

export type Testimonial = {
  quote: string;
  name: string;
  trip: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We arrived to a stocked fridge and had a private chef twice during the week. It turned a great villa into the best holiday we've ever had.",
    name: "Sophie Bennett",
    trip: "Family trip · Mallorca",
    avatar: avatar1,
  },
  {
    quote:
      "The transfer was waiting the second we landed, and the yacht day was flawless. Holiday PA handled everything — we just showed up.",
    name: "James Okafor",
    trip: "Anniversary · Marbella",
    avatar: avatar2,
  },
  {
    quote:
      "Daily breakfasts and a sunset massage on the terrace. Genuinely felt like a five-star resort, but in our own private villa.",
    name: "Mia Larsen",
    trip: "Friends' getaway · Bali",
    avatar: avatar3,
  },
];

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "How does booking a service work?",
    a: "Search your destination and dates, browse trusted local providers, and send a request to book. Your personal PA confirms availability and handles the details before you arrive.",
  },
  {
    q: "When do I pay?",
    a: "This is a demo experience, so no payment is taken. In the full product, you'd confirm and pay securely once your PA verifies the booking.",
  },
  {
    q: "Which destinations are covered?",
    a: "We're live across the Mediterranean, the Middle East and Southeast Asia, with new destinations added every month as our local network grows.",
  },
  {
    q: "Can I book multiple services for one stay?",
    a: "Absolutely. Most guests combine a few — a chef, a transfer and a spa treatment — into one seamless, concierge-managed trip.",
  },
  {
    q: "I run a rental platform. Can I offer this to my guests?",
    a: "Yes. Holiday PA embeds into your guest experience so you can unlock add-on services revenue. Visit our For Partners page to learn more.",
  },
];
