// ============================================================
// CENTRALIZED CONTENT CONFIGURATION
// Edit this file to update articles, links, and contact info
// ============================================================

export const siteConfig = {
  name: "Harshika Gahlot",
  tagline: "Content Writer · AI Content Writer · Creative Writer",
  heroHeadline: "Content, Creativity & AI —",
  heroHeadlineAccent: "Written With Purpose.",
  heroSubtitle: "Some ideas deserve more than a passing thought.",
  heroDescription:
    "A writer driven by curiosity, storytelling, and the desire to explore ideas that make us think a little differently.",
  heroCTA1: "Explore My Writing",
  heroCTA2: "Let's Connect",

  // ── CONTACT ──────────────────────────────────────────────
  // Add your email address below when ready
  email: "", // e.g. "harshika@example.com"

  social: {
    dev: "https://dev.to/harshika_gahlot_06a853c7e",
    blog: "https://productandperspective.blogspot.com/",
    linkedin: "", // Add your LinkedIn URL here
  },
};

// ── WRITING CATEGORIES ────────────────────────────────────
export const categories = [
  {
    id: "ideas",
    label: "Ideas & Perspectives",
    description:
      "Observations on products, brands, people, and the ideas that shape how we live and think.",
    link: "https://productandperspective.blogspot.com/",
  },
  {
    id: "ai",
    label: "AI & Technology",
    description:
      "Practical experiments with AI tools, workflows, and honest reflections on what actually works.",
    link: "https://dev.to/harshika_gahlot_06a853c7e",
  },
  {
    id: "creative",
    label: "Creative Writing",
    description:
      "Personal reflections, original quotes, and pieces written from curiosity rather than obligation.",
    link: null,
  },
];

// ── ARTICLES ──────────────────────────────────────────────
// Real articles from DEV Community and Product & Perspective blog
export const articles = [
  // --- DEV COMMUNITY ARTICLES ---
  {
    id: "dev-1",
    title: "I Built an Auto-Reply Workflow in n8n Without Paying for an AI API",
    description:
      "A hands-on account of building a real automated email-reply system using n8n and free AI tools — and what I learned when things didn't go as planned.",
    category: "ai",
    source: "DEV Community",
    tags: ["#ai", "#n8n", "#automation"],
    link: "https://dev.to/harshika_gahlot_06a853c7e/i-built-an-auto-reply-workflow-in-n8n-without-paying-for-an-ai-api-2384",
    featured: true,
    coverImage: null, // Will use generated cover
    coverColor: "#2d1f3d",
  },
  {
    id: "dev-2",
    title: "I Caught AI Making Promises It Couldn't Keep: 6 Rules I Now Use",
    description:
      "After discovering AI confidently giving wrong answers, I developed six personal rules for working with AI tools more critically and effectively.",
    category: "ai",
    source: "DEV Community",
    tags: ["#ai", "#learning"],
    link: "https://dev.to/harshika_gahlot_06a853c7e/i-caught-ai-making-promises-it-couldnt-keep-6-rules-i-now-use-4k3g",
    featured: true,
    coverImage: null,
    coverColor: "#1f2d3d",
  },
  {
    id: "dev-3",
    title: "I Tested 3 AI Prompts for Customer Support — Here's What I Learned",
    description:
      "Testing different prompt strategies for customer support AI and documenting what actually produced helpful, accurate responses.",
    category: "ai",
    source: "DEV Community",
    tags: ["#ai", "#productivity"],
    link: "https://dev.to/harshika_gahlot_06a853c7e/i-tested-3-ai-prompts-for-customer-support-heres-what-i-learned-42m0",
    featured: false,
    coverImage: null,
    coverColor: "#1a2d2d",
  },

  // --- PRODUCT & PERSPECTIVE BLOG ARTICLES ---
  {
    id: "blog-1",
    title: "What I Noticed While Studying boAt",
    description:
      "A deep dive into boAt's brand identity, marketing approach, and what makes an Indian D2C brand resonate with its audience.",
    category: "ideas",
    source: "Product & Perspective",
    tags: ["#brand", "#marketing"],
    link: "https://productandperspective.blogspot.com/",
    featured: true,
    coverImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBJ8W4UHtwAcMaXcqlCl7QgUZ58W6fkFMPjxekWRdHYtVSEhJ1e-2ZuZGixxpOHYAj4a-ichGMuzZXvnXnUn8wvcLU2z4DKzc9jkS1U9ViVGvyV31pVVaEreyY3C-igvhjJfzuYywR2XZDnnbmpiFBmqU6M9PMcMM8RA7gbmWuNGjRGV18scEaL8BGk1M/w600-h400/boat.png",
    coverColor: "#1d2a1d",
  },
  {
    id: "blog-2",
    title: "My First Startup Experience: Lessons Beyond the Job Description",
    description:
      "Reflections on working at a startup for the first time — what no one tells you, what surprised me, and the lessons that stayed.",
    category: "ideas",
    source: "Product & Perspective",
    tags: ["#startup", "#learning"],
    link: "https://productandperspective.blogspot.com/",
    featured: false,
    coverImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhES6VNw3JTSJ0hPWgluNKeYaZeus8_ruCnO7is6I_IYzKMmA6hnsarJE4Mae5Lham85IEZlFvvDlxWkOLPlbRTdcHr_C3I5izupai1nLcWR1916SreFRkhc61G_y3-buITgBFt6Pe64mlPUIvGqiqwh0BGFY1fbbqN77KJh4NRVI0ZKBf7OhDJcJrw1Ck/w600-h400/OIP.webp",
    coverColor: "#2d2010",
  },
  {
    id: "blog-3",
    title: "The Product Isn't the Stay. It's Trust.",
    description:
      "An analysis of Airbnb's real value proposition — why the platform succeeds not because of listings, but because of the trust it builds between strangers.",
    category: "ideas",
    source: "Product & Perspective",
    tags: ["#product", "#airbnb"],
    link: "https://productandperspective.blogspot.com/",
    featured: false,
    coverImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDUz8D5yhSYlEhmKnrit0qhKhHRKDnOFQ4nV6AtJFejpo0hh6MWFueMUoFkaIyeTr3bnPQ3wWjRCW5GSBvF33xt0NHiKrmW9XeOm_nPrkvYxQw2msQpzI5bSV9zYakwShzMM_3uV0FaKLhhT3B1WjgqjqlDIOgrVdpAXBolNnJ4FVElpWZWSEDHmEP6Ig/w600-h400/airbnb-logo-design-by-wearedesignstudio.png",
    coverColor: "#2d1a10",
  },
  {
    id: "blog-4",
    title: "Instagram Stories Teardown: Why Millions Watch but Few Create",
    description:
      "Examining the psychology behind content consumption on Instagram Stories — and why the gap between watchers and creators is by design.",
    category: "ideas",
    source: "Product & Perspective",
    tags: ["#ux", "#instagram", "#psychology"],
    link: "https://productandperspective.blogspot.com/",
    featured: false,
    coverImage: null,
    coverColor: "#2d1a2d",
  },
  {
    id: "blog-5",
    title: "What Comparing boAt, Noise, and Boult Taught Me About Customer Psychology",
    description:
      "A comparative study of three Indian audio brands and what their marketing strategies reveal about consumer decision-making.",
    category: "ideas",
    source: "Product & Perspective",
    tags: ["#marketing", "#consumer", "#brands"],
    link: "https://productandperspective.blogspot.com/",
    featured: false,
    coverImage: null,
    coverColor: "#1a1a2d",
  },
  {
    id: "blog-6",
    title: "Spotify Doesn't Just Play Music. It Understands Me.",
    description:
      "Why Spotify's true product is not music streaming but personalization — and how it's quietly become one of the most intimate apps we use.",
    category: "ideas",
    source: "Product & Perspective",
    tags: ["#spotify", "#product", "#personalization"],
    link: "https://productandperspective.blogspot.com/",
    featured: false,
    coverImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTviMjji3bbBm-zfMDY8fA_bnD4Gby7RNvZvZeLiYEMOXd0vrhoi-4Mdrw5JF-znWJSmPhTMnGdD2ofJ2qNtAfEbYpvSPtZXJASZ6Tufx-ojFlsJvqkAmkSKUX03G4WS-A9XRJljooAraP7dNDvzZ9oP7lBQsSWSItbOlYkMGkBWQBkKtr9u4J_xV88U0/w600-h400/spotify.jpg",
    coverColor: "#0d2d1a",
  },
  {
    id: "blog-7",
    title: "Blinkit Isn't Selling Groceries. It's Selling Convenience.",
    description:
      "A look at how Blinkit reframed quick-commerce not as a delivery service but as a lifestyle utility — and what that means for how we shop.",
    category: "ideas",
    source: "Product & Perspective",
    tags: ["#blinkit", "#product", "#ecommerce"],
    link: "https://productandperspective.blogspot.com/",
    featured: false,
    coverImage: null,
    coverColor: "#2d2d0d",
  },
  {
    id: "blog-8",
    title: "Duolingo Isn't Teaching Language. It's Teaching Consistency.",
    description:
      "What Duolingo actually teaches is not vocabulary — it's the daily habit of showing up. A reflection on gamification and behavioural design.",
    category: "ideas",
    source: "Product & Perspective",
    tags: ["#duolingo", "#gamification", "#habit"],
    link: "https://productandperspective.blogspot.com/",
    featured: false,
    coverImage: null,
    coverColor: "#1d2a10",
  },

  // --- CREATIVE WRITING (placeholder - editable) ---
  // Add creative writing pieces below when ready
  // {
  //   id: "creative-1",
  //   title: "Your Creative Piece Title",
  //   description: "A short description of this piece.",
  //   category: "creative",
  //   source: "Original",
  //   tags: [],
  //   link: null,
  //   featured: false,
  //   coverImage: null,
  //   coverColor: "#2d1a2d",
  // },
];

// ── ORIGINAL QUOTES ───────────────────────────────────────
// Add your original quotes here. The section will be hidden if this array is empty.
export const originalQuotes = [
  // Add your quotes below when ready, e.g.:
  // {
  //   id: "q1",
  //   text: "Your original quote text goes here.",
  //   context: "Optional short context or date",
  // },
];

// ── WRITING PHILOSOPHY ────────────────────────────────────
export const philosophy = {
  heading: "Why I Write",
  body: "To me, writing is more than putting thoughts into words. It is a way of understanding them. It helps me discover what I think, explore what I feel, and share the ideas that make me curious. Whether I am writing about AI, an observation, or a personal experience, I believe authenticity is what gives words their meaning.",
};

// ── PERSONAL CLOSING NOTE ─────────────────────────────────
export const closingNote = {
  heading: "A Note Before You Leave",
  paragraphs: [
    "My relationship with writing began long before I knew what it meant to be a writer. As a child, I would fill birthday and welcome cards for my family with little thoughtful sentences, unaware that those small gestures were the beginning of something meaningful.",
    "Over time, writing became more than a way to express myself. It became a way to understand myself. Some thoughts remain tangled in our minds until we put them into words. Writing helps me declutter, reflect, and discover things about myself that I might never have understood otherwise.",
    "Today, I write about ideas, AI, products, experiences, and the little things that make me curious. I believe in being genuine with what I write — sharing not only the discoveries and successes, but also the frustrations, mistakes, and lessons along the way.",
    "I hope my words do more than inform. I hope they make someone think, feel, question, or see something from a different perspective.",
    "Because, to me, writing is not just about putting thoughts into words. It is about finding meaning in them.",
  ],
};
