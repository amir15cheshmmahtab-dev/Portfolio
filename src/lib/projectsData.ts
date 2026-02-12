export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  color: string;
  hoverColor: string;
  features: ProjectFeature[];
  techStack: string[];
  implementation: string;
  liveUrl?: string;
  githubUrl?: string;
  images: {
    hero: string;
    gallery: string[];
  };
}

export const projects: Project[] = [
  {
    id: "nebula-dashboard",
    title: "Elixia Application",
    shortDescription: "Get personalized training, diet plans, and injury care through our flexible free tier or secure premium options with easy online payments. This all-in-one platform integrates expert wellness protocols and recovery tools to ensure a professional, safe, and seamless fitness journey for everyone",
    fullDescription: "Nebula Dashboard is a cutting-edge analytics platform designed to provide real-time insights through beautiful, interactive data visualizations. Built with performance and user experience in mind, it transforms complex data into actionable intelligence.",
    tags: ["React", "Express", "Tailwindcss" ,'Shadcn UI', "PostgreSQL" ,'Node.js' ,'Docker' ,'Redis' ],
    color: "from-primary/40 to-blue-500/40",
    hoverColor: "group-hover:from-primary/60 group-hover:to-blue-500/60",
    features: [
      { title: "Real-time Data Sync", description: "Live data updates through WebSocket connections with zero latency" },
      { title: "Interactive Charts", description: "Fully interactive D3.js powered visualizations with zoom, pan, and drill-down capabilities" },
      { title: "Custom Dashboards", description: "Drag-and-drop dashboard builder with over 20 widget types" },
      { title: "Smart Alerts", description: "AI-powered anomaly detection with customizable alert thresholds" },
    ],
    techStack: ["React 18", "TypeScript", "D3.js", "WebSocket", "Node.js", "PostgreSQL", "Redis", "Docker"],
    implementation: "The dashboard leverages React's concurrent features for smooth 60fps animations while streaming real-time data. D3.js handles complex visualizations with GPU-accelerated rendering. WebSocket connections are managed through a custom reconnection strategy ensuring 99.9% uptime.",
    liveUrl: "https://nebula-demo.example.com",
    githubUrl: "https://github.com/example/nebula",
    images: {
      hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      ],
    },
  },
  {
    id: "velocity-app",
    title: "Ecommerce-website",
    shortDescription: "The project simulates a real-world online shopping experience, allowing users to browse products, manage their shopping carts, and wishlists.",
    fullDescription: "Velocity is a revolutionary fitness tracking application that combines cutting-edge motion sensors with gamification to make exercise fun and addictive. Designed for athletes and beginners alike, it adapts to your fitness level and goals.",
    tags: ["React", "Bootstrap", "Redux-toolkit",],
    color: "from-accent/40 to-pink-500/40",
    hoverColor: "group-hover:from-accent/60 group-hover:to-pink-500/60",
    features: [
      { title: "Motion Tracking", description: "Advanced accelerometer and gyroscope integration for precise movement detection" },
      { title: "Gamification", description: "Earn XP, unlock achievements, and compete with friends on global leaderboards" },
      { title: "AI Coach", description: "Personalized workout recommendations powered by machine learning" },
      { title: "Social Challenges", description: "Create and join fitness challenges with your community" },
    ],
    techStack: ["React Native", "TypeScript", "Firebase", "TensorFlow Lite", "Reanimated 3", "Expo", "Node.js"],
    implementation: "Built with React Native and Reanimated 3 for butter-smooth 120fps animations on supported devices. Firebase provides real-time sync for social features. TensorFlow Lite runs on-device for instant workout recognition without cloud latency.",
    liveUrl: "https://velocity-app.example.com",
    githubUrl: "https://github.com/example/velocity",
    images: {
      hero: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop",
      ],
    },
  },
  {
    id: "aurora-studio",
    title: "Lead managment with analysis ROI",
    shortDescription: "Creative portfolio platform for Leaders and Companies to manage thier leads and analyze the ROI of their marketing campaigns with according to the data and insights provided by the platform.",
    fullDescription: "Aurora Studio is a next-generation portfolio platform designed specifically for digital artists and designers. It showcases work with stunning 3D presentations and immersive transitions that make portfolios truly memorable.",
    tags: ["Next.js","TypeScript","Tailwindcss", "Shadcn UI","Node.js", "Docker","Mongodb"],
    color: "from-emerald-500/40 to-primary/40",
    hoverColor: "group-hover:from-emerald-500/60 group-hover:to-primary/60",
    features: [
      { title: "3D Galleries", description: "Immersive 3D spaces to showcase artwork with WebGL-powered environments" },
      { title: "Smooth Transitions", description: "GSAP-powered page transitions that feel like native app navigation" },
      { title: "Client Proofing", description: "Built-in approval workflows for client review and feedback" },
      { title: "Analytics", description: "Detailed visitor analytics to understand portfolio engagement" },
    ],
    techStack: ["Next.js 14", "TypeScript", "Three.js", "React Three Fiber", "GSAP", "Framer Motion", "Prisma", "Vercel"],
    implementation: "Leverages Next.js 14 App Router with React Server Components for optimal performance. Three.js scenes are progressively enhanced based on device capabilities. GSAP handles complex scroll-triggered animations with sub-16ms frame times.",
    liveUrl: "https://aurora-studio.example.com",
    githubUrl: "https://github.com/example/aurora",
    images: {
      hero: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      ],
    },
  },
    {
    id: "aurora-studio",
    title: "Co-Up Booking application",
    shortDescription: "A complete website for reserving a room or chair for a co-working space in Pardis Technology Park: This website includes a private chat for active co-up users.A system for reserving chairs or rooms for training workshops on an hourly or daily basis.",
    fullDescription: "Aurora Studio is a next-generation portfolio platform designed specifically for digital artists and designers. It showcases work with stunning 3D presentations and immersive transitions that make portfolios truly memorable.",
    tags: ["React","TypeScript","Tailwindcss", "Zustand","Shadcn UI","Node.js", "Docker","Mongodb"],
    color: "from-emerald-500/40 to-primary/40",
    hoverColor: "group-hover:from-emerald-500/60 group-hover:to-primary/60",
    features: [
      { title: "3D Galleries", description: "Immersive 3D spaces to showcase artwork with WebGL-powered environments" },
      { title: "Smooth Transitions", description: "GSAP-powered page transitions that feel like native app navigation" },
      { title: "Client Proofing", description: "Built-in approval workflows for client review and feedback" },
      { title: "Analytics", description: "Detailed visitor analytics to understand portfolio engagement" },
    ],
    techStack: ["Next.js 14", "TypeScript", "Three.js", "React Three Fiber", "GSAP", "Framer Motion", "Prisma", "Vercel"],
    implementation: "Leverages Next.js 14 App Router with React Server Components for optimal performance. Three.js scenes are progressively enhanced based on device capabilities. GSAP handles complex scroll-triggered animations with sub-16ms frame times.",
    liveUrl: "https://aurora-studio.example.com",
    githubUrl: "https://github.com/example/aurora",
    images: {
      hero: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      ],
    },
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
