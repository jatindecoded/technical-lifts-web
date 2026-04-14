// ─── Site Info ────────────────────────────────────────────────────────────────

export const SITE = {
  name: "Technical Lifts",
  tagline: "Technical Lifts is Built for",
  taglineAccent: "Transformations",
  subheadline:
    "Certified trainers. Real equipment. No fluff. Whether you are starting out or training seriously — this is where progress happens.",
  phone: "+91-89205-76059",
  whatsapp: "+91-89205-76059",
  address: "C-596, Vikas Puri, Near PVR Cinema, New Delhi - 110018",
  // TODO: Add Google Maps URL for the gym when available
  googleMapsUrl: "",
  // TODO: Add Instagram handle URL
  instagramUrl: "",
  // TODO: Add Google Reviews URL
  googleReviewsUrl: "",
  trialCTA: "Book Free Trial",
  trialSubtext: "Free for website visitors. Walk-ins pay ₹500.",
  secondaryCTA: "See Membership Plans",
  timings: "Open 7 Days  |  5AM – 12AM (Midnight)",
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Facilities", href: "#facilities" },
  { label: "Trainers", href: "/#trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Transformations", href: "/transformations" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = [
  { name: "Facilities", href: "/#facilities" },
  { name: "Trainers", href: "/#trainers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Transformations", href: "/transformations" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL = [{ name: "Privacy Policy", href: "/privacy" }];

export const FOOTER_CTA = {
  heading: "Your First Session Is On Us",
  subheading:
    "Walk in, train once, see if it fits. Free trial for website visitors.",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO_FEATURES = [
  {
    title: "Certified Trainers",
    description:
      "Every trainer is ISSA or ACE certified with hands-on experience.",
    iconName: "Users",
  },
  {
    title: "Serious Equipment",
    description:
      "Squat racks, deadlift platforms, full machine section — no compromises.",
    iconName: "Zap",
  },
  {
    title: "Custom Programs",
    description:
      "Plans built around your schedule, body, and goals — not a template.",
    iconName: "Target",
  },
  {
    title: "Proven Results",
    description:
      "100+ members have hit real goals here. Progress you can measure.",
    iconName: "TrendingUp",
  },
];

// ─── Trust Bar ────────────────────────────────────────────────────────────────

export const TRUST_BAR = [
  { label: "100+ Google Reviews", iconName: "Star" },
  { label: "5+ Certified Trainers", iconName: "Users" },
  { label: "Vikaspuri's Top-Rated Gym", iconName: "Trophy" },
];

// ─── Features / Who It's For ──────────────────────────────────────────────────

export const FEATURES_TAGLINE = "MEASURE TWICE. LIFT RIGHT.";

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
  whoItsForHeading: "Which Type of Lifter Are You?",
  personalTrainingHeading: "Train With a Plan, Not Just Motivation",
  personalTrainingBody:
    "Most people plateau because they are working hard without direction. Our certified personal trainers build a plan around you — your schedule, your body, your goal.",
  personalTrainingCTA: "Talk to a Trainer — It's Free",
  personalTrainingCtaHref: "#trial",
  facilitiesHeading: "Built for Serious Training",
  facilitiesFootnote: "Everything you need. Nothing you don't.",
  personalTrainingImageAlt: "Member training with dumbbells",
};

// ─── Trial CTA (reusable section) ─────────────────────────────────────────────

export const TRIAL_CTA = {
  id: "trial",
  badge: "Free Trial",
  heading: "Come Train With Us",
  headingAccent: "Once. On Us.",
  body: "No commitment. No payment. Just come in, feel the space, train with our team. If it's not right for you, no hard feelings.",
  primaryCTA: "Book Free Trial",
  primaryCtaHref: "/contact",
  secondaryCTA: "Call Now",
  secondaryCtaHref: "tel:+918920576059",
  note: "Free for website visitors. Walk-ins pay ₹500.",
};

// ─── Gym Stats (About page) ───────────────────────────────────────────────────

export const GYM_STATS = [
  { value: "500+", label: "Active Members" },
  { value: "5+", label: "Years in Vikaspuri" },
  { value: "5", label: "Certified Trainers" },
  { value: "200+", label: "Transformations" },
];

// ─── About Page ───────────────────────────────────────────────────────────────

export const ABOUT_HERO = {
  heading: "We're Not a Franchise.",
  headingAccent: "We're a Commitment.",
  subheading:
    "Technical Lifts was built on one belief — every person who walks through the door deserves a real shot at their goals. Not a membership card and a treadmill.",
};

export const ABOUT_SECTIONS = [
  {
    title: "Why We Started",
    paragraphs: [
      "Technical Lifts opened in Vikaspuri because the neighbourhood deserved a serious gym — not a flashy one. We saw members driving across Delhi for a proper squat rack, a deadlift platform, a trainer who actually showed up.",
      "We fixed that. No gimmicks, no pop music playlists curated to impress Instagram. Just the equipment you need and the coaching that gets you there.",
    ],
  },
  {
    title: "How We Train",
    paragraphs: [
      "Every member gets assessed before they start. We look at your movement, your schedule, your goal — and build from there. Our trainers are ISSA and ACE certified, and they actually train here themselves.",
      "We've seen beginners become competitors, professionals lose 20kg, and people in their 50s deadlift for the first time. None of that happens by accident.",
    ],
    cta: { href: "/contact", text: "Book Your Free Trial" },
  },
];

// ─── Gym Highlights (replaces Investors on about page) ───────────────────────

export const GYM_HIGHLIGHTS = [
  {
    stat: "5AM–12AM",
    label: "Every day",
    description: "The gym is open seven days a week, including public holidays.",
  },
  {
    stat: "₹3,000",
    label: "Monthly membership",
    description:
      "No hidden charges. No joining fee. Full gym access from day one.",
  },
  {
    stat: "Free",
    label: "First session",
    description:
      "Walk in and train once before committing. We'll be there to help.",
  },
  {
    stat: "100%",
    label: "Certified trainers",
    description: "Every trainer holds an ISSA or ACE certification.",
  },
];

// ─── Trainers ─────────────────────────────────────────────────────────────────

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
    // Replace with: /gym/trainers/trainer-1.webp
    photo: "/stock-images/trainer-arms-crossed.webp",
  },
  {
    name: "Trainer Name",
    certification: "ACE CPT",
    speciality: "Weight Loss & Cardio",
    // Replace with: /gym/trainers/trainer-2.webp
    photo: "/stock-images/trainer-hands-on-hips.webp",
  },
  {
    name: "Trainer Name",
    certification: "ISSA CPT",
    speciality: "Functional Fitness",
    // Replace with: /gym/trainers/trainer-3.webp
    photo: "/stock-images/man-holding-dumbbells.webp",
  },
  {
    name: "Trainer Name",
    certification: "ACE CPT",
    speciality: "Muscle Building",
    // Replace with: /gym/trainers/trainer-4.webp
    photo: "/stock-images/man-barbell-squat-gym.webp",
  },
  {
    name: "Trainer Name",
    certification: "ISSA CPT",
    speciality: "Beginner Programs",
    // Replace with: /gym/trainers/trainer-5.webp
    photo: "/stock-images/man-squatting-gym.webp",
  },
];

// ─── Transformations ─────────────────────────────────────────────────────────

export const TRANSFORMATIONS_SECTION = {
  heading: "Real People. Real Results.",
  subheading: "No filters. No staged photos. Just progress you can see.",
  googleReviewsLine: "100+ five-star reviews on Google.",
};

export interface Transformation {
  name: string;
  result: string;
  duration: string;
  photo: string;
}

export const TRANSFORMATIONS: Transformation[] = [
  {
    name: "Priya",
    result: "Lost 14kg",
    duration: "5 months",
    // TODO: Replace with: /gym/transformations/priya.webp
    photo: "/stock-images/man-sitting-bench-gym.webp",
  },
  {
    name: "Arjun",
    result: "Gained 8kg lean muscle",
    duration: "4 months",
    // TODO: Replace with: /gym/transformations/arjun.webp
    photo: "/stock-images/man-barbell-squat-gym.webp",
  },
  {
    name: "Rahul",
    result: "Lost 10kg",
    duration: "3 months",
    // TODO: Replace with: /gym/transformations/rahul.webp
    photo: "/stock-images/man-squatting-gym.webp",
  },
  {
    name: "Sneha",
    result: "First fitness goal hit",
    duration: "6 weeks",
    // TODO: Replace with: /gym/transformations/sneha.webp
    photo: "/stock-images/trainer-hands-on-hips.webp",
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const PRICING_SECTION = {
  heading: "Find a Plan That Fits",
  subheading: "All plans include full gym access, no joining fee.",
  ctaLabel: "Get Started",
  footnote:
    "Personal Training pricing is customized. Talk to us — no commitment required.",
};

export interface PricingPlan {
  name: string;
  duration: string;
  price: string;
  priceNote: string;
  isPopular: boolean;
  features: string[];
}

const INCLUSIVE_FEATURES = [
  "Full gym access",
  "Weekly group classes",
  "Unlimited chiller shower",
  "Unlimited steam access",
  "General trainer guidance",
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Monthly",
    duration: "30 Days",
    price: "₹3,000",
    priceNote: "per month",
    isPopular: false,
    features: INCLUSIVE_FEATURES,
  },
  {
    name: "Quarterly",
    duration: "90 Days",
    price: "₹7,500",
    priceNote: "save ₹1,500",
    isPopular: false,
    features: INCLUSIVE_FEATURES,
  },
  {
    name: "Half Yearly",
    duration: "180 Days",
    price: "₹12,000",
    priceNote: "save ₹6,000",
    isPopular: true,
    features: INCLUSIVE_FEATURES,
  },
  {
    name: "Yearly",
    duration: "365 Days",
    price: "₹16,000",
    priceNote: "best value",
    isPopular: false,
    features: INCLUSIVE_FEATURES,
  },
];

// ─── Personal Training Plan (for pricing page comparison) ────────────────────

export const PT_PLAN = {
  heading: "Personal Training",
  subheading: "Dedicated 1-on-1 coaching. Customized to you.",
  price: "Custom",
  priceNote: "Talk to us for pricing",
  features: [
    "Everything in regular membership",
    "Dedicated personal trainer",
    "Custom workout program",
    "Diet plan tailored to your lifestyle",
    "Weekly progress check-ins",
    "Body composition tracking",
  ],
  cta: "Enquire Now",
  ctaHref: "/contact",
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQ_SECTION = {
  heading: "Common Questions",
  supportLinePrefix: "Can't find what you're looking for?",
  supportLinkLabel: "Get in touch",
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Where is Technical Lifts located in Vikaspuri?",
    answer:
      "We are located at C-596, Vikas Puri, Near PVR Cinema, New Delhi — 110018. Easy to find with parking on premises.",
  },
  {
    question: "Do you offer a free trial before joining?",
    answer:
      "Yes. Come in, train once, see if it fits. No payment required for website visitors.",
  },
  {
    question: "Is personal training included in the membership?",
    answer:
      "Standard memberships cover full gym access. Personal Training is a separate program — dedicated trainer, custom diet plan, and weekly progress tracking.",
  },
  {
    question: "What are your gym timings?",
    answer:
      "Open every day 5AM to 12AM (Midnight). Including weekends and public holidays.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, parking is available on premises.",
  },
  {
    question: "Do you have trainers for beginners?",
    answer:
      "Absolutely. All our trainers are certified to work with any level. Beginners get extra attention in the first few sessions to build solid foundations.",
  },
  {
    question: "What is the best gym membership plan in Vikaspuri?",
    answer:
      "Depends on your commitment. Most members see the best value in the half-yearly plan — you save ₹6,000 compared to monthly.",
  },
  {
    question: "Can I join mid-month?",
    answer:
      "Yes. Your membership starts from the day you join — no pro-rating, no waiting for the 1st.",
  },
];

// ─── Contact Form ─────────────────────────────────────────────────────────────

export const CONTACT_FORM = {
  heading: "Send a Message",
  submitLabel: "Send Message",
  submittingLabel: "Sending...",
  successHeading: "Message Sent",
  successBody:
    "We'll get back to you within a few hours. Or just call us directly.",
  inquiryOptions: [
    { value: "trial", label: "Book a free trial" },
    { value: "membership", label: "Membership enquiry" },
    { value: "personal-training", label: "Personal training" },
    { value: "other", label: "Something else" },
  ],
};

// ─── Images ───────────────────────────────────────────────────────────────────
// Drop real photos from the Drive into public/gym/ and update paths here.
// TODO: Replace placeholder image paths with production assets when available.

export const IMAGE_ASSETS = {
  hero: {
    // TODO: Replace with: /gym/gallery/hero.webp
    src: "/stock-images/group-sitting-in-gym.webp",
    alt: "Group training inside Technical Lifts gym",
  },
  whoItsFor: [
    {
      // TODO: Replace with: /gym/gallery/equipment.webp
      src: "/stock-images/gym-machine-speaker.webp",
      alt: "Gym equipment and machine setup",
    },
    {
      // TODO: Replace with: /gym/gallery/kettlebells.webp
      src: "/stock-images/black-red-kettlebells.webp",
      alt: "Kettlebells and strength equipment",
    },
    {
      // TODO: Replace with: /gym/gallery/trainer.webp
      src: "/stock-images/trainer-arms-crossed.webp",
      alt: "Trainer standing with arms crossed",
    },
  ],
  personalTraining: {
    // TODO: Replace with: /gym/gallery/personal-training.webp
    src: "/stock-images/man-holding-dumbbells.webp",
    alt: "Member holding dumbbells in gym",
  },
  about: [
    {
      // TODO: Replace with: /gym/gallery/about-1.webp
      src: "/stock-images/trainer-hands-on-hips.webp",
      alt: "Trainer at Technical Lifts",
    },
    {
      // TODO: Replace with: /gym/gallery/about-2.webp
      src: "/stock-images/man-sitting-bench-gym.webp",
      alt: "Member resting between sets",
    },
    {
      // TODO: Replace with: /gym/gallery/about-3.webp
      src: "/stock-images/man-barbell-squat-gym.webp",
      alt: "Member performing barbell squat",
    },
    {
      // TODO: Replace with: /gym/gallery/about-4.webp
      src: "/stock-images/man-squatting-gym.webp",
      alt: "Member squatting during gym session",
    },
  ],
};

// ─── Pages & Blog Posts (content source for new pages) ────────────────────────

export const BLOG_POSTS = [
  {
    slug: "training-philosophy",
    title: "Training Philosophy",
    excerpt:
      "Why measured, progressive training beats fads — a concise look at the coaching principles that guide every program at Technical Lifts.",
    content: [
      "Our approach is simple: assess, program, progress. Every plan starts with a movement screen and a schedule that fits your life.",
      "Progressive overload, consistent coaching, and attention to recovery form the backbone of long-term results. Shortcuts and fads are avoided in favour of methods that scale with you.",
      "Coaches focus on technique, load management, and simple metrics so progress can be tracked and sustained.",
    ],
    meta: {
      description:
        "Technical Lifts — Training Philosophy: progressive overload, coaching, and consistency over quick fixes.",
    },
  },
  {
    slug: "strength-program-basics",
    title: "Strength Program Basics",
    excerpt: "A beginner-friendly primer on sets, reps, frequency, and how to build strength without overtraining.",
    content: [
      "Strength training is built on three pillars: specificity, progressive overload, and recovery.",
      "Simple programming templates work best: compound movements 2–4x/week, accessory work to address weaknesses, and planned deloads every 6–8 weeks.",
      "Nutrition and sleep are non-negotiable components for meaningful strength gains.",
    ],
    meta: { description: "Strength training basics from Technical Lifts — practical advice for real progress." },
  },
  {
    slug: "nutrition-for-performance",
    title: "Nutrition for Performance",
    excerpt: "Practical nutrition for gym-goers who want to build muscle, lose fat, or simply feel better during training.",
    content: [
      "Prioritise protein, maintain a slight caloric surplus for muscle gain, and plan meals around training times.",
      "Small, consistent changes beat restrictive diets. Hydration and timing matter for workout quality.",
      "If you need a tailored plan, our personal trainers include practical nutrition guidance as part of PT packages.",
    ],
    meta: { description: "Nutrition fundamentals that support training — practical, simple, and sustainable." },
  },
  {
    slug: "recovery-and-mobility",
    title: "Recovery & Mobility",
    excerpt: "Short reads on movement prep, mobility drills, and recovery strategies that keep you training longer and harder.",
    content: [
      "Active recovery, sleep, foam rolling, and mobility work keep training consistent. Small daily habits compound over months.",
      "Our trainers prescribe targeted mobility drills to address individual movement restrictions — a 10-minute routine can dramatically improve lift quality.",
    ],
    meta: { description: "Recovery and mobility tips to maintain progress and reduce injury risk." },
  },
];

export const COMPONENT_PAGES = [
  {
    slug: "hero-variants",
    title: "Hero Variants",
    excerpt: "A showcase of hero layouts and headline treatments used across the site.",
    content: [
      "Two-tone headlines, tight tracking, and a single accent word define our hero treatments. Variants show different CTA priorities and visual balance.",
    ],
  },
  {
    slug: "card-variants",
    title: "Card Variants",
    excerpt: "Design and use-cases for the card components used site-wide.",
    content: [
      "Cards are low-contrast surfaces with subtle borders and tight typography. Use them for trainers, transformations, and blog teasers.",
    ],
  },
  {
    slug: "schedule-pricing",
    title: "Schedule & Pricing",
    excerpt: "Detailed breakdown of class schedules, membership tiers, and PT booking flow.",
    content: [
      "Use this page to deep-link pricing CTAs and provide an expanded explanation of what's included in each plan.",
    ],
  },
  {
    slug: "member-story",
    title: "Member Story — Ravi",
    excerpt: "An editorial-style case study documenting one member's transformation.",
    content: [
      "Ravi came with inconsistent training and limited time. With a focused 16-week plan, he improved strength, moved better, and regained confidence.",
    ],
  },
];

// quick combined list for routing and sitemap generation
export const EXTRA_PAGES = [...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, title: p.title })),
  ...COMPONENT_PAGES.map((p) => ({ path: `/${p.slug}`, title: p.title }))];

// Page-level headings and small copy used by scaffolding pages
export const PAGES = {
  // TODO: Replace with final editorial heading for blog index
  blogIndexHeading: "From the Gym Floor",
  // TODO: Replace with final editorial heading for component showcases
  componentsHeading: "Design System: Components",
};
