export const projectData = [
  {
    slug: "sanlam-allianz-sales-portal",
    title: "Sanlam Allianz Sales Portal",
    year: "2024–2025",
    role: "Full-stack",
    tags: ["Enterprise"],
    stack: ["Angular", "TypeScript", "FastAPI", "Docker", "Azure CI/CD"],
    image: "/SAGI.png",
    liveUrl: "https://gisales.ke.sanlamallianz.com/",
    summary:
      "The nationwide hub Sanlam Allianz Kenya agents and branches use for new business, renewals, and vehicle valuations.",
    lead: "I rebuilt the sales portal agents actually work in — not a brochure site, the production system behind insurance operations across the country.",
    what: "A central sales portal for agents and branches: new business, policy renewals, and vehicle valuations in one place, instead of a pile of disconnected tools.",
    did: "Led the rebuild end to end on Angular, TypeScript, FastAPI, Docker, and Azure CI/CD. The brief was scale, security, and something that stays up in production — not a demo.",
    outcome:
      "Live at gisales.ke.sanlamallianz.com. It's the system agents and branches use day to day.",
  },
  {
    slug: "class-space",
    title: "Class-Space",
    year: "2024",
    role: "Full-stack",
    tags: ["Product"],
    stack: ["React", "Node", "MongoDB"],
    image: "/class-space.png",
    liveUrl: "https://class-space.vercel.app/",
    summary:
      "Students and class reps find empty rooms and book them without the double-booking circus.",
    lead: "Campus rooms get claimed by whoever shows up first. I built a live view of vacant classrooms and a booking flow that stops two classes landing in the same space.",
    what: "A web app for students and class representatives to see which rooms are free and lock one in, in real time.",
    did: "Designed and shipped the full product: availability, booking, and the rules that keep two groups from grabbing the same room.",
    outcome: "A working booking flow on the web — less corridor hunting, fewer clashes.",
  },
  {
    slug: "chama",
    title: "Chama",
    year: "2024",
    role: "Full-stack",
    tags: ["Product"],
    stack: ["React", "Node", "MongoDB"],
    image: "/chama.png",
    liveUrl: "http://chama-blue.vercel.app/",
    summary:
      "Group contributions, balances, history, and goals — built around how chamas already run.",
    lead: "Chamas don't need a bank. They need a clear ledger: who paid, what's in the pot, and what the group is saving toward.",
    what: "A web platform for group savings: contributions, balances, transaction history, and shared goals.",
    did: "Built the member-facing app end to end so people can pay in, see the books, and track the goal without a spreadsheet owner bottleneck.",
    outcome: "A live chama tool at chama-blue.vercel.app.",
  },
  {
    slug: "kladi-outfits",
    title: "Kladi Outfits",
    year: "2024",
    role: "Full-stack",
    tags: ["Commerce"],
    stack: ["React", "Node", "Payments"],
    image: "/KLADI.jpg",
    liveUrl: "https://kladi-outfits.vercel.app/",
    summary:
      "Storefront, inventory, payments, and an admin that isn't a spreadsheet.",
    lead: "A clothing label needed a real shop: stock that stays honest, payments that clear, and a back office someone can run.",
    what: "A full e-commerce site with live inventory, checkout, and an admin dashboard.",
    did: "Shipped the customer storefront and the ops side — catalog, stock, payments, order handling.",
    outcome: "Live at kladi-outfits.vercel.app.",
  },
];

export const projectFilters = ["All", "Enterprise", "Product", "Commerce"];

export function getProject(slug) {
  return projectData.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = projectData.findIndex((project) => project.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? projectData[index - 1] : null,
    next: index < projectData.length - 1 ? projectData[index + 1] : null,
  };
}
