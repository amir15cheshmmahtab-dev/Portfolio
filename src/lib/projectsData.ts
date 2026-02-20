import ecommerceHeror from "../../public/images/e-commerce/ecommerce.webp"
// gallery ==> e-commerce
import addedToBasket from "../../public/images/e-commerce/addedToBasket.png";
import homepage1 from "../../public/images/e-commerce/homepage1.png";
import homepage2 from "../../public/images/e-commerce/homepage2.png";
import loginPage from "../../public/images/e-commerce/loginPage.png";
import chooseCity from "../../public/images/e-commerce/chooseCity.png";
import basket from "../../public/images/e-commerce/basket.png";
import navbar from "../../public/images/e-commerce/navbar.png";
import seeAllProducts from "../../public/images/e-commerce/seeAllProducts.png";
import mobileHomePage2 from "../../public/images/e-commerce/mobileHomePage2.png";
import mobileHomePage1 from "../../public/images/e-commerce/mobileHomePage1.png";
import mobileBasket from "../../public/images/e-commerce/mobileBasket.png";
import mobileNavBar from "../../public/images/e-commerce/mobileNavBar.png";
import mobileLoginPage from "../../public/images/e-commerce/mobileLoginPage.png";
import mobileSeeAllProducts from "../../public/images/e-commerce/mobileSeeAllProducts.png";
// gallery ==> coUP
import herocoup from "../../public/images/co-up/herocoup.png"
import herocoup2 from "../../public/images/co-up/paneladmincoup3.png.png"
import adminpanel from "../../public/images/co-up//adminpanel.png";
import adminpanel2 from "../../public/images/co-up//adminpanel2.png";
import chairreservatioin from "../../public/images/co-up//chairreservatioin.png";
import communication from "../../public/images/co-up//communication.png";
import financialrecorde from "../../public/images/co-up//financialrecorde.png";
import homepagecoup from "../../public/images/co-up//homepagecoup.png";
import homepage2coup from "../../public/images/co-up//homepage2coup.png";
import loginadminpanle from "../../public/images/co-up//loginadminpanle.png";
import loginpage2 from "../../public/images/co-up//loginpage2.png";
import profile from "../../public/images/co-up//profile.png";
import mainpage from "../../public/images/co-up//mainpage.png";
import mainpage2 from "../../public/images/co-up//mainpage2.png";
import mainpage3 from "../../public/images/co-up//mainpage3.png";
import mainpage4 from "../../public/images/co-up//mainpage4.png";
import roomadminpanle from "../../public/images/co-up//roomadminpanle.png";
import roomreservation from "../../public/images/co-up//roomreservation.png";
import ticketsadminpanel from "../../public/images/co-up//ticketsadminpanel.png";
// gallery ==> elixia
import one from "../../public/images/elixia/1.png"
import two from "../../public/images/elixia/2.png"
import three from "../../public/images/elixia/2.png"
import four from "../../public/images/elixia/4.png"
import five from "../../public/images/elixia/5.png"
import six from "../../public/images/elixia/6.png"
import seven from "../../public/images/elixia/7.png"
import eight from "../../public/images/elixia/8.png"
import nine from "../../public/images/elixia/9.png"
import ten from "../../public/images/elixia/10.png"
import eleven from "../../public/images/elixia/11.png"
import twelve from "../../public/images/elixia/12.png"
import thirteen from "../../public/images/elixia/13.png"
import fourtheen from "../../public/images/elixia/14.png"
// gallery ==> lead management
import leadManagementHero from "../../public/images/lead-magement/leadheroimage.jpg"
import onelead from "../../public/images/lead-magement/1.png"
import twolead from "../../public/images/lead-magement/1-3.png"
import threelead from "../../public/images/lead-magement/2.png"
import fourlead from "../../public/images/lead-magement/3.png"
import fivelead from "../../public/images/lead-magement/4.png"
import sixlead from "../../public/images/lead-magement/5.png"
import sevenlead from "../../public/images/lead-magement/6.png"
import eightlead from "../../public/images/lead-magement/7.png"
import ninelead from "../../public/images/lead-magement/8.png"
// import tenlead from "../../public/images/lead-magement/9.png"





export interface ProjectFeature {
  title: string;
  description: string ;
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
    id: "Elixia",
    title: "Elixia Application",
    shortDescription: "Get personalized training, diet plans, and injury care through our flexible free tier or secure premium options with easy online payments. This all-in-one platform integrates expert wellness protocols and recovery tools to ensure a professional, safe, and seamless fitness journey for everyone",
    fullDescription: `Get personalized training, diet plans, and injury care through our flexible free tier or secure premium options with easy online payments.
    This means users are not locked into a one-size-fits-all system. The platform adapts to individual goals, fitness levels, medical history, and lifestyle constraints. Whether someone is starting from zero, returning after a break, or training at an advanced level, the programs adjust accordingly. The free tier provides essential guidance and foundational tools, allowing users to build habits and experience the system before committing financially. The premium option unlocks deeper customization, advanced tracking, direct expert support, and more specialized recovery protocols, all handled through secure and straightforward digital payments.
    This all-in-one platform integrates expert wellness protocols and recovery tools to ensure a professional, safe, and seamless fitness journey for everyone.
    Rather than forcing users to rely on scattered apps, random online advice, or inconsistent routines, the platform centralizes training, nutrition, mobility, and injury prevention into one structured system. Programs are built using evidence-based methods designed by qualified professionals, reducing the risk of overtraining, poor form, or ineffective dieting. Recovery tools—such as guided mobility sessions, structured deload plans, and injury-specific rehabilitation guidance—are built directly into the training flow, not treated as an afterthought.
    The result is a streamlined experience where planning, tracking, support, and progress monitoring work together. Users move from goal-setting to execution to recovery without friction, confusion, or gaps in guidance. The system is designed to minimize guesswork, improve consistency, and create long-term results while prioritizing safety and sustainability over quick, risky outcomes.
    `,
    tags: ["React", "Express", "TypeScript", "Tailwindcss" ,'Shadcn UI', "PostgreSQL" ,'Node.js' ,'Docker' ,'Redis' ],
    color: "from-primary/40 to-blue-500/40",
    hoverColor: "group-hover:from-primary/60 group-hover:to-blue-500/60",
    features: [
      { title: "Real-time Data Sync", description: " Live data updates through WebSocket connections with zero latency" },
      { title: "High-Density Rendering", description: "Optimized visual engine capable of displaying complex datasets without compromising browser performance." },
      { title: "Custom Dashboards", description: "Drag-and-drop dashboard builder with over 20 widget types" },
      { title: "Smart Alerts", description: "AI-powered anomaly detection with customizable alert thresholds" },
    ],
    techStack: ["React", "TypeScript", "XPathExpression.js" ,"Tailwindcss" , "WebSocket", "Node.js", "PostgreSQL", "Redis", "Docker"],
    implementation: "The architecture integrates a custom AI logic engine that cross-references biometric data—including waist circumference and BMI—against medical contraindications to ensure user safety. Node.js handles high-concurrency requests for real-time diet and training adjustments, while PostgreSQL manages complex relational health profiles. The front end leverages Tailwind CSS for a pixel-perfect, responsive UI, featuring a persistent state-managed Dark/Light mode and secure JWT-based authentication for medical-grade data privacy.",
    liveUrl: "https://Myelixia.com",
    githubUrl: "https://github.com/example/nebula",
    images: {
     hero:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop",
        one,
        two,
        three,
        four, 
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirteen,
        fourtheen,
      ],
    },
  },
  {
    id: "E-commerce-App",
    title: "Ecommerce-website",
    shortDescription: "The project simulates a real-world online shopping experience, allowing users to browse products, manage their shopping carts, and wishlists.",
    fullDescription: "This project is a deep dive into the frontend architecture of a modern retail platform. It simulates a complete, end-to-end shopping journey—from product discovery to checkout—focusing on fluid state transitions, high-conversion UI design, and robust data handling. By bridging the gap between static design and dynamic functionality, it demonstrates how to build a scalable storefront that remains performant under heavy interaction.",
    tags: ["React", "Bootstrap", "Redux-toolkit",],
    color: "from-accent/40 to-pink-500/40",
    hoverColor: "group-hover:from-accent/60 group-hover:to-pink-500/60",
    features: [
      { title: "Persistent Cart Logic", description: "Integrated browser storage synchronization ensuring shopping carts and wishlists remain intact across sessions for a frictionless return experience." },
      { title: "Intelligent Filtering", description: "High-performance search and multi-category filtering logic that updates the product grid instantaneously without page reloads" },
      { title: "Visual State Feedback", description: "Advanced UI feedback loops including 'Add to Cart' animations, dynamic button states, and skeleton loaders to bridge data-fetching gaps." },
      { title: "Adaptive UI Architecture", description: "A pixel-perfect, mobile-first design system featuring a dynamic Dark/Light mode toggle that respects user system preferences automatically." },
    ],
    techStack: ["React", "Javascript", "Bootstrap", "Mock api" , "Redux-toolkit"],
    implementation: "The architecture focuses on advanced state management to synchronize complex shopping cart logic and user wishlists in real-time. By integrating a structured Mock API, the system simulates asynchronous data fetching with high-fidelity error handling and loading states. The UI is engineered with a mobile-first approach using Tailwind CSS, ensuring high-performance rendering and a seamless 'perfect-pixel' transition across all device breakpoints.",
    liveUrl: "https://velocity-app.example.com",
    githubUrl: "https://github.com/example/velocity",
    images: {
      // hero: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop",
       hero: ecommerceHeror ,
      gallery: [
        homepage1 ,
        homepage2,
        navbar,
        loginPage ,
        chooseCity ,
        basket,
        addedToBasket,
        seeAllProducts ,
        mobileHomePage2 ,
        mobileHomePage1 ,
        mobileBasket ,
        mobileNavBar ,
        mobileLoginPage, 
        mobileSeeAllProducts,
      ],
    },
  },
  {
    id: "Lead-Management",
    title: "Lead managment with analysis ROI",
    shortDescription: "A high-performance lead management platform designed to bridge the gap between CRM data and financial outcomes. Featuring a real-time ROI analytical engine, the application provides businesses with instant visibility into lead conversion efficiency and marketing spend. Built with a focus on type-safety, responsive design, and containerized scalability",
    fullDescription: "LeadMetric is a comprehensive lead management solution built for modern sales teams who need more than just a digital rolodex. While traditional CRMs focus on storage, this platform focuses on attribution and profitability. By integrating a dynamic ROI analysis engine, users can visualize exactly which lead sources are generating revenue and which are draining budget.",
    tags: ["Next.js","TypeScript","Tailwindcss", "Shadcn UI","Node.js", "Docker","Mongodb"],
    color: "from-emerald-500/40 to-primary/40",
    hoverColor: "group-hover:from-emerald-500/60 group-hover:to-primary/60",
    features: [
      { title: "Data Architecture & Type-Safe Backend", description: `Prisma & MongoDB: Leveraged Prisma as the ORM to enforce strict type-defined schemas on MongoDB, ensuring data integrity for complex lead attributes and financial metrics. 
        Next.js API Routes: Developed a structured RESTful API layer to handle lead ingestion, status transitions, and bulk updates.
      Dockerization: Containerized the entire environment (Node.js, MongoDB) to ensure parity between development and production, simplifying deployment and scaling.` },
      { title: "Dynamic ROI Analytical Engine", description: `Engineered a custom calculation engine in TypeScript to process lead conversion rates, acquisition costs, and lifetime value (LTV) in real-time.` },
      { title: "Recharts/Custom Charts", description: `Integrated dynamic charting that updates instantly as filters or lead data change, providing an immediate visual feedback loop for ROI analysis.`},
      { title: "Interactive Visualization & UX", description: `Shadcn/UI & Tailwind: Built a modular dashboard interface using a custom-themed Shadcn component library, ensuring a clean, professional "SaaS" aesthetic.`},
    ],
    techStack: ["Next.js", "TypeScript", "Tailwindcss", "Docker", "shadcn", "Framer Motion", "Prisma", "mongodb", "Node.js "],
    implementation: `Developed a full-stack Lead Management System that transforms raw lead data into actionable financial insights. Built with Next.js and TypeScript, the platform features a dynamic ROI analysis engine and a high-performance dashboard. By containerizing the stack with Docker and utilizing Prisma with MongoDB, I ensured the application is as scalable as it is data-resilient.`,
    liveUrl: "#",
    githubUrl: "https://github.com/example/aurora",
    images: {
      hero: leadManagementHero,
      gallery: [
        onelead,
        twolead,
        threelead,
        fourlead,
        fivelead,
        sixlead,
        sevenlead,
        eightlead,
        ninelead,
      ],
    },
  },
    {
    id: "Co-Up",
    title: "Co-Up Booking application",
    shortDescription: "A professional workspace management platform that streamlines the booking of desks and meeting rooms. Built with a focus on real-time availability and user productivity, CoUp offers a seamless bridge between modern professionals and professional working environments.",
    fullDescription: `CoUp (کوآپ) is an end-to-end solution for managing shared workspaces. It addresses the friction of manual office management by providing a high-performance digital environment where users can reserve resources (seats and conference rooms) in real-time. The platform is designed for a "professional-first" experience, ensuring that teams and individuals have the tools they need to thrive in a modern work setting.`,
    tags: ["React","TypeScript","Tailwindcss", "Zustand","Shadcn UI","Node.js", "Docker","Mongodb"],
    color: "from-emerald-500/40 to-primary/40",
    hoverColor: "group-hover:from-emerald-500/60 group-hover:to-primary/60",
    features: [
      { title: "Specific chat system", description: "You can chat with anyone you interested in coup" },
      { title: "Smooth Transitions", description: "Powered page transitions that feel like native app navigation" },
      { title: "Get notification for any announcement", description: "Get notifications for any announcement in the system as soon as it is posted" },
      { title: "Super admin panel", description: "Comprehensive admin dashboard for managing all aspects of the CoUp platform" },
    ],
    techStack: ["Next.js 14", "TypeScript", "Three.js", "React Three Fiber", "GSAP", "Framer Motion", "Prisma", "Vercel"],
    implementation: `CoUp is an end-to-end solution for managing shared workspaces. It transforms the friction of manual office management into a seamless digital experience. The platform allows users to experience a modern workspace with real-time online booking for desks and meeting rooms.`,
    liveUrl: "https://aurora-studio.example.com",
    githubUrl: "https://github.com/example/aurora",
    images: {
      hero: herocoup2,
      gallery: [
        homepagecoup ,
      homepage2coup ,
      profile ,
      mainpage ,
      mainpage2 ,
      mainpage3 ,
      mainpage4 ,
      chairreservatioin ,
      communication ,
      financialrecorde, 
      loginadminpanle, 
      loginpage2 ,
      roomadminpanle, 
      roomreservation, 
      ticketsadminpanel, 
      adminpanel,  
      adminpanel2 ,
      ]
    },
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
