export const SITE = {
  name: "Technical Lifts",
  tagline: "Built for",
  taglineAccent: "SERIOUS LIFTERS",
  subheadline:
    "Certified trainers. Real equipment. No fluff. Whether you are starting out or training seriously - this is where progress happens.",
  phone: "+91XXXXXXXXXX",
  email: "hello@technicallifts.in",
  address: "Full Address, Vikaspuri, New Delhi",
  googleMapsUrl: "",
  instagramUrl: "",
  googleReviewsUrl: "",
  trialCTA: "Book Free Trial",
  secondaryCTA: "See Membership Plans",
  timings: "Mon-Sat: 6AM - 10PM  |  Sun: 7AM - 1PM",
};

export const NAV_LINKS = [
  { label: "Facilities", href: "#facilities" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Transformations", href: "#transformations" },
  { label: "Contact", href: "#trial" },
];

export const TRUST_BAR = [
  { label: "100+ Google Reviews", iconName: "Star" },
  { label: "5+ Certified Trainers", iconName: "Users" },
  { label: "Vikaspuri's Top-Rated Gym", iconName: "Trophy" },
];

export const WHO_ITS_FOR = [
  {
    title: "Beginners",
    description:
      "We'll build your foundation right. No judgment, full guidance from day one.",
  },
  {
    title: "Serious Lifters",
    description:
      "Squat racks, deadlift platforms, people who take training seriously. You'll fit right in.",
  },
  {
    title: "Busy Professionals",
    description:
      "Structured programs, efficient sessions. You don't need 2 hours. You need the right plan.",
  },
];

export const PT_INCLUDES = [
  "Custom workout schedule",
  "Diet plan built around your lifestyle",
  "Progress tracking every step",
];

export const FACILITIES = [
  "Squat Racks",
  "Dedicated Deadlift Platforms",
  "Full Machine Section",
  "Cardio Zone",
  "Locker Rooms",
  "Parking Available",
];

export const FEATURE_SECTIONS = {
  whoItsForHeading: "Whether You Are Just Starting or Going All In",
  personalTrainingHeading: "Train With a Plan, Not Just Motivation",
  personalTrainingBody:
    "Most people plateau because they are working hard without direction. Our certified personal trainers build a plan around you - your schedule, your body, your goal.",
  personalTrainingCTA: "Talk to a Trainer - It's Free",
  personalTrainingCtaHref: "#trial",
  facilitiesHeading: "Built for Serious Training",
  facilitiesFootnote: "Everything you need. Nothing you don't.",
  personalTrainingImageAlt: "Personal training session",
};

export const TRAINERS_SECTION = {
  id: "trainers",
  heading: "The People Behind Your Progress",
  subline:
    "Every trainer is certified and has helped real members hit real goals.",
};

export interface Trainer {
  name: string;
  certification: string;
  speciality: string;
  photo: string;
}

export const TRAINERS: Trainer[] = [
  {
    name: "Trainer Name",
    certification: "ISSA CPT",
    speciality: "Strength & Hypertrophy",
    photo: "/trainers/t1.jpg",
  },
  {
    name: "Trainer Name",
    certification: "ACE CPT",
    speciality: "Weight Loss & Cardio",
    photo: "/trainers/t2.jpg",
  },
  {
    name: "Trainer Name",
    certification: "ISSA CPT",
    speciality: "Functional Fitness",
    photo: "/trainers/t3.jpg",
  },
  {
    name: "Trainer Name",
    certification: "ACE CPT",
    speciality: "Muscle Building",
    photo: "/trainers/t4.jpg",
  },
  {
    name: "Trainer Name",
    certification: "ISSA CPT",
    speciality: "Beginner Programs",
    photo: "/trainers/t5.jpg",
  },
];

export interface Transformation {
  name: string;
  result: string;
  photo: string;
}

export const TRANSFORMATIONS: Transformation[] = [
  {
    name: "Priya",
    result: "Lost 14kg in 5 months",
    photo: "/transformations/priya.jpg",
  },
  {
    name: "Arjun",
    result: "Gained 8kg lean muscle in 4 months",
    photo: "/transformations/arjun.jpg",
  },
  {
    name: "Rahul",
    result: "Lost 10kg in 3 months",
    photo: "/transformations/rahul.jpg",
  },
  {
    name: "Sneha",
    result: "Completed first fitness goal in 6 weeks",
    photo: "/transformations/sneha.jpg",
  },
];

export interface PricingPlan {
  name: string;
  duration: string;
  price: string;
  isPopular: boolean;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Monthly",
    duration: "1 Month",
    price: "₹X",
    isPopular: false,
    features: ["Full gym access", "Locker room", "Parking"],
  },
  {
    name: "Quarterly",
    duration: "3 Months",
    price: "₹X",
    isPopular: false,
    features: ["Full gym access", "Locker room", "Parking"],
  },
  {
    name: "Half Yearly",
    duration: "6 Months",
    price: "₹X",
    isPopular: true,
    features: ["Full gym access", "Locker room", "Parking", "Best value"],
  },
  {
    name: "Yearly",
    duration: "12 Months",
    price: "₹X",
    isPopular: false,
    features: ["Full gym access", "Locker room", "Parking", "Max savings"],
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Where is Technical Lifts located in Vikaspuri?",
    answer: "We are located at [full address], Vikaspuri, New Delhi.",
  },
  {
    question: "Do you offer a free trial before joining?",
    answer: "Yes. Come in, train once, see if it fits. No payment required.",
  },
  {
    question: "Is personal training included in the membership?",
    answer:
      "Standard memberships cover full gym access. PT is a separate program with a dedicated trainer, diet plan, and progress tracking.",
  },
  {
    question: "What are your gym timings?",
    answer: "Monday to Saturday: 6AM to 10PM. Sunday: 7AM to 1PM.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, parking is available on premises.",
  },
  {
    question: "Do you have trainers for beginners?",
    answer:
      "All our trainers are certified to work with any level. Beginners get extra attention in the first few sessions.",
  },
  {
    question: "What is the best gym membership plan in Vikaspuri?",
    answer:
      "Depends on your commitment. Most members see the best value in the half-yearly plan.",
  },
];
