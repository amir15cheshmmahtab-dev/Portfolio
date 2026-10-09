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
// import herocoup from "../../public/images/co-up/herocoup.png"
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
// gallery ==> RealEstateOS 
import dashboard from "../../public/images/realState/dashboard.png"
import tasks from "../../public/images/realState/tasks.png"
import customers from "../../public/images/realState/customers.png"
import leads from "../../public/images/realState/leads.png"
import contracts from "../../public/images/realState/contracts.png"
import owners from "../../public/images/realState/owners.png"
import payments from "../../public/images/realState/payments.png"
// gallery ==> OIEC
import oiec from "../../public/images/OIEC/oiec.webp"
import chatbot from "../../public/images/OIEC/chatbot.png"
// gallery ==> Teractor
import tractor from "../../public/images/Teractor/teractor.jpeg"







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
    shortDescription: `دریافت برنامه‌های تمرینی، تغذیه‌ای و مراقبت‌های آسیب‌دیدگی شخصی‌سازی‌شده از طریق سطح رایگان انعطاف‌پذیر یا اشتراک ویژه (پریمیوم) با پرداخت آنلاین امن. این پلتفرم جامع با تلفیق پروتکل‌های تخصصی سلامت و ابزارهای ریکاوری، مسافتی حرفه‌ای، ایمن و یکپارچه را در مسیر آمادگی جسمانی برای همه کاربران فراهم می‌سازد.`,
    fullDescription: `
    ارائه برنامه‌های تمرینی، تغذیه‌ای و مراقبت‌های آسیب‌دیدگی مجهز به سطح رایگان انعطاف‌پذیر و اشتراک ویژه (پریمیوم) با پرداخت آنلاین امن؛ تا کاربران به‌جای استفاده از یک الگوی عمومی و ثابت، به پلتفرمی دسترسی داشته باشند که متناسب با اهداف فردی، سطح آمادگی، سابقه پزشکی و سبک زندگی آن‌ها شبیه‌سازی و تنظیم می‌شود. این پلتفرم با همراهی در تمام سطوح (از صفر، بازگشت پس از وقفه، تا سطح پیشرفته)، در سطح رایگان ابزارهای پایه و عادت‌سازی را ارائه داده و در سطح ویژه، شخصی‌سازی عمیق‌تر، پایش پیشرفته، ارتباط مستقیم با متخصصان و پروتکل‌های تخصصی بازتوانی را فراهم می‌کند.

این سامانه جامع با هدف ارائه یک مسیر حرفه‌ای، ایمن و یکپارچه، ابزارهای تمرینی، تغذیه، تحرک‌پذیری و پیشگیری از آسیب را بر پایه روش‌های علمی و توسط متخصصان مجرب در یک سیستم واحد متمرکز کرده است. یکپارچه‌سازی ابزارهای ریکاوری (مانند جلسات هدایت‌شده تحرک‌پذیری، برنامه‌های کاهش بار تمرینی و بازتوانی آسیب‌ها) مستقیم در فرایند تمرین، حذف سردرگمی در برنامه‌ریزی، کاهش خطر تمرین‌زدگی و آسیب، و ایجاد نتایج پایدار و بلندمدت از ویژگی‌های اصلی این طرح است.
    `,
    tags: ["React", "Express", "TypeScript", "Tailwindcss" ,'Shadcn UI', "PostgreSQL" ,'Node.js' ,'Docker' ,'Redis' ],
    color: "from-primary/40 to-blue-500/40",
    hoverColor: "group-hover:from-primary/60 group-hover:to-blue-500/60",
   features: [
  {
    title: "همگام‌سازی لحظه‌ای داده‌ها",
    description: "به‌روزرسانی زنده داده‌ها از طریق اتصالات WebSocket با حداقل تأخیر",
  },
  {
    title: "نمایش بهینه داده‌های حجیم",
    description: "موتور بصری بهینه‌شده برای نمایش مجموعه‌داده‌های پیچیده بدون افت عملکرد مرورگر",
  },
  {
    title: "داشبوردهای سفارشی",
    description: "ابزار ساخت داشبورد با قابلیت کشیدن و رها کردن و بیش از ۲۰ نوع ویجت",
  },
  {
    title: "هشدارهای هوشمند",
    description: "تشخیص ناهنجاری‌ها با کمک هوش مصنوعی و آستانه‌های هشدار قابل تنظیم",
  },
],
techStack: ["React","TypeScript","Shadcn UI","Tailwind CSS","WebSocket","Node.js","PostgreSQL","Redis","Docker",],
implementation:"معماری این سامانه از یک موتور اختصاصی مبتنی بر هوش مصنوعی استفاده می‌کند که داده‌های زیست‌سنجی، از جمله دور کمر و شاخص توده بدنی (BMI)، را با محدودیت‌ها و موارد منع پزشکی تطبیق می‌دهد تا ایمنی کاربران تضمین شود. Node.js درخواست‌های هم‌زمان متعدد را برای تنظیم لحظه‌ای برنامه‌های غذایی و تمرینی مدیریت می‌کند، در حالی که PostgreSQL وظیفه مدیریت پروفایل‌های سلامت با روابط پیچیده را بر عهده دارد. رابط کاربری با استفاده از Tailwind CSS به‌صورت واکنش‌گرا و با دقت بالا طراحی شده است و شامل قابلیت تغییر حالت روشن و تاریک با حفظ وضعیت انتخاب‌شده و احراز هویت امن مبتنی بر JWT برای حفاظت از حریم خصوصی داده‌های حساس سلامت است.",
liveUrl: "https://Myelixia.com",
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
    id: "Co-Up",
    title: "Co-Up Booking application",
    shortDescription:"یک پلتفرم حرفه‌ای مدیریت فضای کار که فرآیند رزرو میزها و اتاق‌های جلسات را تسهیل می‌کند. پلتفرم CoUp با تمرکز بر نمایش آنی (Real-Time) ظرفیت‌های خالی و افزایش بهره‌وری کاربران توسعه یافته و ارتباطی بی‌نقص میان متخصصان مدرن و محیط‌های کاری حرفه‌ای برقرار می‌سازد.",
    fullDescription: `پلتفرم CoUp (کوآپ) یک راهکار جامع و سرتاسری (End-to-End) برای مدیریت فضاهای کاری اشتراکی است. این پلتفرم با فراهم کردن یک محیط دیجیتال با کارایی بالا برای رزرو آنی (Real-Time) منابع مانند صندلی‌ها و سالن‌های کنفرانس، چالش‌های مدیریت سنتی و دستی دفاتر کار را برطرف می‌سازد. CoUp با تمرکز بر تجربه کاربری حرفه‌ای طراحی شده تا تمایز و ابزارهای لازم برای رشد افراد و تیم‌ها را در محیط‌های کاری مدرن تضمین کند.`,
    tags: ["React","TypeScript","Tailwindcss", "Zustand","Shadcn UI","Node.js", "Docker","Mongodb"],
    color: "from-emerald-500/40 to-primary/40",
    hoverColor: "group-hover:from-emerald-500/60 group-hover:to-primary/60",
   features: [
  {
    title: "سیستم گفت‌وگوی اختصاصی",
    description: "امکان گفت‌وگو و چت با افراد موردنظر در پلتفرم CoUp",
  },
  {
    title: "انتقال روان بین صفحات",
    description: "جابجایی روان و انیمیشنی بین صفحات با تجربه‌ای مشابه اپلیکیشن‌های بومی",
  },
  {
    title: "اعلان‌های لحظه‌ای",
    description: "دریافت اعلان درباره اطلاعیه‌های جدید سیستم بلافاصله پس از انتشار",
  },
  {
    title: "پنل مدیریت کل",
    description: "داشبورد جامع مدیریتی برای کنترل و مدیریت تمام بخش‌های پلتفرم CoUp",
  },
],
techStack: ["React","TypeScript","Tailwind CSS","Zustand","Shadcn UI","Node.js","Docker","MongoDB","GSAP","Framer Motion",],
implementation: `CoUp یک راهکار جامع برای مدیریت فضاهای کاری اشتراکی است که فرایندهای دشوار و دستی مدیریت دفتر کار را به تجربه‌ای دیجیتال و یکپارچه تبدیل می‌کند. این پلتفرم امکان رزرو آنلاین و لحظه‌ای میزهای کاری و اتاق‌های جلسات را فراهم می‌سازد و تجربه‌ای مدرن و کارآمد از استفاده از فضای کار اشتراکی در اختیار کاربران قرار می‌دهد.`,
liveUrl: "https://coup.davandegan.cloud",
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
  {
    id: "OIEC",
    title: "Enterprise product information processing and management system",
    shortDescription:"یک نرم‌افزار سازمانی برای پردازش و مدیریت اطلاعات محصول که به‌منظور تسهیل کدگذاری و تبدیل داده‌های موجود توسعه یافته است.",   
    fullDescription:`
یک پلتفرم سازمانی جامع برای گروه اویک (OIEC) با هدف ارائه یکپارچه اطلاعات سازمان، شرکت‌های زیرمجموعه، پروژه‌ها، اخبار و فعالیت‌های سازمانی توسعه داده شد.

این وب‌سایت با پشتیبانی از زبان‌های فارسی و انگلیسی، بخش‌های مختلفی مانند معرفی سازمان، شرکت‌های گروه، پروژه‌ها، اخبار، رویدادها، مسئولیت اجتماعی و اطلاعات سازمانی را پوشش می‌دهد.

یکی از قابلیت‌های اصلی پروژه، توسعه و یکپارچه‌سازی یک **AI Chatbot** در داخل وب‌سایت است که به کاربران امکان می‌دهد به‌صورت تعاملی با اطلاعات و محتوای سازمان ارتباط برقرار کرده و پاسخ‌های مرتبط با مجموعه OIEC دریافت کنند.

تمرکز پروژه علاوه بر ایجاد یک تجربه کاربری مدرن و واکنش‌گرا، بر ساخت یک پلتفرم قابل توسعه برای ارائه اطلاعات سازمانی و ایجاد تعامل هوشمند با کاربران بوده است.
`,
    tags: ["React.js", "TypeScript", "Node.js", "Express.js", "Flowise", "AI Integration", "Server Deployment", "Docker"],
    color: "from-accent/40 to-pink-500/40",
    hoverColor: "group-hover:from-accent/60 group-hover:to-pink-500/60",
    features: [
      { title: "Enterprise Corporate Platform", description:"توسعه یک پلتفرم سازمانی جامع برای ارائه اطلاعات گروه اویک شامل معرفی سازمان، شرکت‌های زیرمجموعه، پروژه‌ها، اخبار، رویدادها و مسئولیت اجتماعی." },
      { title: "AI-Powered Chatbot", description: "توسعه و یکپارچه‌سازی یک چت‌بات هوشمند مبتنی بر AI در وب‌سایت که امکان تعامل کاربران با اطلاعات و محتوای سازمانی را به‌صورت conversational فراهم می‌کند."},
      { title: "Multilingual Architecture", description:"پیاده‌سازی ساختار چندزبانه برای ارائه محتوای فارسی و انگلیسی و ایجاد تجربه کاربری یکپارچه برای کاربران با زبان‌های مختلف." },
      { title: "Structured Content & Information", description:"طراحی ساختارهای مختلف برای ارائه و سازمان‌دهی اطلاعات مربوط به پروژه‌ها، شرکت‌های گروه، اخبار، رویدادها و سایر محتوای سازمانی." },
      {title: "Responsive Enterprise UX",description: "پیاده‌سازی رابط کاربری واکنش‌گرا و منسجم برای دسترسی آسان کاربران به حجم بالایی از اطلاعات سازمانی در دسکتاپ و موبایل."},
    ],
    techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "Flowise", "AI Integration", "Server Deployment", "Docker"],
    implementation: `
      این پروژه به‌عنوان یک پلتفرم سازمانی برای گروه اویک با تمرکز بر ارائه ساختاریافته اطلاعات سازمانی و ایجاد تعامل هوشمند با کاربران توسعه داده شد.

Frontend با استفاده از **React.js و TypeScript** پیاده‌سازی شد و ساختار کامپوننت‌ها و صفحات به‌صورت قابل توسعه طراحی گردید تا بخش‌های مختلف وب‌سایت مانند معرفی سازمان، شرکت‌های گروه، پروژه‌ها، اخبار و مسئولیت اجتماعی در یک معماری یکپارچه ارائه شوند.

برای بخش Backend و ارائه سرویس‌های موردنیاز از **Node.js و Express.js** استفاده شد.

یکی از بخش‌های مهم پروژه، توسعه و Integration یک **AI Chatbot** در داخل وب‌سایت بود. این قابلیت با استفاده از **Flowise و AI Integration** پیاده‌سازی شد تا کاربران بتوانند به‌صورت conversational با اطلاعات سازمانی تعامل داشته باشند و پاسخ‌های مرتبط با محتوای OIEC دریافت کنند.

پروژه با پشتیبانی از زبان‌های **فارسی و انگلیسی** توسعه داده شد و برای استقرار و مدیریت محیط اجرا از **Docker و Server Deployment** استفاده شده است.
    `,
    liveUrl: "https://www.oiecgroup.com/",
    githubUrl: "",
    images: {
      // hero: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop",
       hero: oiec ,
      gallery: [
      chatbot,
      ],
    },
  },
  {
    id: "Tractor-Club",
    title: "Tractor Club — Official Sports & Fan Engagement Platform",
    shortDescription: "یک پلتفرم جامع دیجیتال برای باشگاه تراکتور که با هدف ارائه یکپارچه اخبار، اطلاعات تیم، مسابقات، بازیکنان، گالری تصاویر و ویدیو، آکادمی و خدمات هواداری توسعه یافته است.",
    fullDescription:"وب‌سایت رسمی باشگاه تراکتور به‌عنوان یک پلتفرم جامع ورزشی و هواداری طراحی و توسعه داده شد تا اطلاعات و خدمات مختلف باشگاه را در یک تجربه یکپارچه در اختیار هواداران قرار دهد. این پلتفرم بخش‌هایی مانند اخبار باشگاه و تیم‌های مختلف، اطلاعات بازیکنان و کادر فنی، مسابقات و جدول رقابت‌ها، افتخارات باشگاه، گالری تصاویر و ویدیو، آکادمی فوتبال و سرویس‌های هواداری را پوشش می‌دهد. همچنین ارتباط مستقیم با سرویس‌هایی مانند خرید بلیت، تلویزیون باشگاه و محتوای ویدیویی در ساختار پلتفرم در نظر گرفته شده است.",
    tags: ["Next.js","TypeScript","Tailwindcss", "PWA","Node.js", "Docker","Mongodb"],
    color: "from-emerald-500/40 to-primary/40",
    hoverColor: "group-hover:from-emerald-500/60 group-hover:to-primary/60",
    features: [
      { title: "Comprehensive Sports Platform", description: "توسعه یک پلتفرم جامع برای پوشش بخش‌های مختلف باشگاه شامل اخبار، تیم بزرگسالان و بانوان، آکادمی، بازیکنان، مسابقات، افتخارات و محتوای رسانه‌ای." },
      { title: "Live Match & Team Information", description: "نمایش اطلاعات مسابقات، برنامه بازی‌ها، نتایج، جدول رقابت‌ها و اطلاعات بازیکنان و کادر فنی برای ارائه یک مرجع کامل و به‌روز از وضعیت تیم." },
      { title: "News & Multimedia Content", description:"ایجاد ساختار یکپارچه برای ارائه اخبار، گزارش‌های تصویری، گالری تصاویر و محتوای ویدیویی باشگاه با دسته‌بندی بر اساس تیم و نوع محتوا."},
      { title: "Integrated Club Services", description:"یکپارچه‌سازی دسترسی به سرویس‌های جانبی باشگاه مانند خرید بلیت، تلویزیون تراکتور، محتوای ویدیویی و فروشگاه در ساختار اصلی پلتفرم."},
      { title: "Responsive RTL Experience", description:"پیاده‌سازی رابط کاربری واکنش‌گرا و راست‌چین با تمرکز بر تجربه کاربری مناسب برای کاربران فارسی‌زبان در دستگاه‌های مختلف."},
    ],
    techStack: ["Next.js", "TypeScript", "Tailwindcss", "Docker", "shadcn", "Framer Motion", "Prisma", "mongodb", "Node.js "],
    implementation: `
    این پروژه به‌عنوان پلتفرم دیجیتال باشگاه تراکتور با هدف ایجاد یک مرجع یکپارچه برای اطلاعات ورزشی، اخبار و تعامل با هواداران توسعه داده شد.

Frontend با استفاده از **React.js و TypeScript** پیاده‌سازی شد و ساختار کامپوننت‌ها به‌صورت قابل توسعه طراحی گردید تا بخش‌های مختلف پلتفرم مانند اخبار، بازیکنان، مسابقات، جدول رقابت‌ها، افتخارات، گالری و آکادمی در یک تجربه یکپارچه ارائه شوند.

یکی از بخش‌های اصلی پروژه، پیاده‌سازی ساختار نمایش اطلاعات تیم و مسابقات بود که شامل برنامه بازی‌ها، جدول رقابت‌ها، اطلاعات بازیکنان، پست بازیکنان و کادر فنی می‌شود.

برای مدیریت محتوای گسترده باشگاه، ساختارهای مختلفی برای نمایش **News، Image Gallery، Video Content و Club Information** ایجاد شد تا محتوای مربوط به تیم بزرگسالان، بانوان و آکادمی بتواند به‌صورت تفکیک‌شده در اختیار کاربران قرار گیرد.

همچنین سرویس‌های مختلف باشگاه مانند **Ticketing، Tractor TV، Video Platform و Store** در معماری رابط کاربری در نظر گرفته شدند تا کاربران بتوانند از طریق وب‌سایت اصلی به سرویس‌های مرتبط دسترسی داشته باشند.

رابط کاربری با تمرکز بر **Responsive Design، RTL و تجربه کاربری فارسی** توسعه داده شد و برای استقرار و اجرای پروژه از محیط Containerized استفاده شده است.
    `,
    liveUrl: "https://tractor-club.com/fa",
    githubUrl: "#",
    images: {
      hero: tractor,
      gallery: [
       
      ],
    },
  },
  {
    id: "RealEstateOS",
    title: "RealEstateOS — Real Estate Management SaaS",
    shortDescription:"پلتفرم SaaS چندمستاجری (Multi-Tenant) برای دیجیتالی‌سازی فرآیندهای مدیریت آژانس‌های املاک، شامل مدیریت Leads، Deals، قراردادها، پرداخت‌ها، بازدیدها، Tasks، Activities و کمیسیون‌های مالی.",   
    fullDescription:`
      RealEstateOS یک پلتفرم Multi-Tenant است که به آژانس‌های املاک اجازه می‌دهد تمام فرآیندهای کاری خود را در یک سیستم یکپارچه مدیریت کنند؛ از ثبت و پیگیری Leadها از اولین تماس تا نهایی شدن معامله، مدیریت قراردادها و برنامه پرداخت‌ها، زمان‌بندی بازدید از ملک، تخصیص وظایف به مشاوران و محاسبه خودکار کمیسیون‌ها.

هر آژانس در یک Workspace مستقل و ایزوله فعالیت می‌کند و Role-Based Access Control تضمین می‌کند که هر کارمند تنها به اطلاعات و بخش‌های مرتبط با جایگاه خود دسترسی داشته باشد. سیستم Activity Logging نیز تاریخچه کاملی از تغییرات مربوط به Leadها، معاملات و فعالیت‌های اعضای تیم ثبت می‌کند. همچنین سیستم Notification، مشاوران را از وظایف، مهلت‌ها و رویدادهای مهم مطلع نگه می‌دارد.

داشبورد مدیریتی، دیدی شفاف و لحظه‌ای از عملکرد Sales Pipeline، میزان فعالیت و workload تیم و وضعیت مالی ارائه می‌دهد و به جای استفاده از فایل‌های پراکنده Excel و پیگیری‌های دستی، تمام این فرآیندها را در یک سیستم یکپارچه و سازمان‌یافته متمرکز می‌کند.
    
Backend با استفاده از Node.js و Express.js به‌صورت یک Modular REST API توسعه داده شده و با JWT Authentication ایمن شده است. داده‌ها با استفاده از PostgreSQL و Prisma ORM مدیریت می‌شوند تا ساختاری قابل اعتماد و سازمان‌یافته برای داده‌های سیستم فراهم شود.

Frontend با استفاده از Next.js و TypeScript توسعه یافته و یک رابط کاربری Type-Safe و Responsive با Protected Routes و مدیریت روان دریافت و پردازش داده‌ها ارائه می‌دهد.

کل سیستم با استفاده از Docker کانتینری شده است تا اجرای برنامه در محیط‌های Development و Production به‌صورت یکسان و قابل پیش‌بینی انجام شود.

`,
    tags: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwindcss", "Docker"],
    color: "from-accent/40 to-pink-500/40",
    hoverColor: "group-hover:from-accent/60 group-hover:to-pink-500/60",
    features: [
      { title: "End-to-End SaaS Platform", description: "توسعه یک SaaS Full-Stack از معماری و Backend تا Frontend و Deployment؛ شامل REST API، Next.js، Express.js، TypeScript و Docker برای مدیریت یکپارچه فرآیندهای آژانس املاک." },
      { title: "Adaptive UI Architecture", description: "یک سیستم طراحی پیکسلی بی‌نقص و سازگار با موبایل که دارای یک حالت تاریک/روشن پویا است که به طور خودکار به تنظیمات سیستم کاربر احترام می‌گذارد." },
      { title: "B2B در حوزه املاک", description: "B2B در حوزه املاک یعنی یک شرکت یا پلتفرم املاک، خدمات خود را به کسب‌وکارهای دیگر مثل آژانس‌های املاک، مشاوران، سازندگان، انبوه‌سازان و سرمایه‌گذاران ارائه می‌دهد. این خدمات می‌تواند شامل مدیریت فایل و مشتری، بازاریابی و فروش پروژه‌ها، ایجاد ارتباط بین فعالان بازار و مدیریت یا اجاره فضاهای تجاری باشد." },
      { title: "Data Integrity & Transactions", description: "طراحی Relational Data Model با PostgreSQL و Prisma ORM با تمرکز بر Data Integrity و Transaction Consistency در فرآیندهای حساس مانند Deals، قراردادها و پرداخت‌ها." },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwindcss", "Docker"],
    implementation: `RealEstateOS یک پلتفرم **SaaS چندمستاجری (Multi-Tenant)** برای دیجیتالی‌سازی و مدیریت فرآیندهای آژانس‌های املاک است که بخش‌هایی مانند Leads، Deals، قراردادها، پرداخت‌ها و بازدیدها را در یک سیستم یکپارچه مدیریت می‌کند.
در پیاده‌سازی پروژه، Backend با **Node.js، Express.js و TypeScript** و بر پایه **REST API و معماری Modular** توسعه داده شد و Frontend با **Next.js و TypeScript** پیاده‌سازی شد.
برای مدیریت داده‌ها از **PostgreSQL و Prisma ORM** استفاده شده و ساختار دیتابیس با تمرکز بر **Data Integrity و Transaction Consistency** طراحی شده است.
همچنین **JWT Authentication، RBAC و Protected Routes** برای مدیریت احراز هویت و سطح دسترسی کاربران پیاده‌سازی شده و پروژه با **Docker و CI/CD** برای محیط‌های مختلف آماده‌سازی شده است.
`,
    liveUrl: "https://velocity-app.example.com",
    githubUrl: "https://github.com/example/velocity",
    images: {
      // hero: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop",
       hero: ecommerceHeror ,
      gallery: [
      dashboard,
      tasks,
      customers,
      leads,
      payments,
      owners,
      contracts,
      ],
    },
  },
  {
    id: "Lead-Management",
    title: "LeadMetric — Sales Lead Analytics Platform",
    shortDescription: "یک پلتفرم پرقدرت مدیریت لید (Lead Management) با هدف پیوند داده‌های CRM و پیامدهای مالی. این برنامه با بهره‌گیری از موتور تحلیل بازگشت سرمایه (ROI) به‌صورت آنی (Real-Time)، شفافیت کاملی را در زمینه کارایی تبدیل لیدها و هزینه‌های بازاریابی برای کسب‌وکارها فراهم می‌کند. ساختار این پلتفرم با تمرکز بر ایمنی تایپ‌ها (Type-Safety)، طراحی واکنش‌گرا (Responsive) و مقیاس‌پذیری مبتنی بر کانتینرها (Containerized) توسعه یافته است.",
    fullDescription: "پلتفرم LeadMetric یک راهکار جامع مدیریت لید است که برای تیم‌های فروش مدرن و با هدفی فراتر از یک دفترچه مخاطبان دیجیتال ساده توسعه یافته است. در حالی که CRMهای سنتی تنها بر ذخیره‌سازی داده‌ها تمرکز دارند، این پلتفرم بر ارزیابی اثرگذاری (Attribution) و سودآوری متمرکز است. با ادغام یک موتور تحلیل پویای بازگشت سرمایه (ROI)، کاربران می‌توانند به‌دقت تشخیص دهند کدام کانال‌های جذب لید در حال تولید درآمد هستند و کدام‌یک باعث هدررفت بودجه می‌شوند.",
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
    id: "E-commerce-App",
    title: "Ecommerce-website",
    shortDescription:"پیاده‌سازی و شبیه‌سازی تجربه خرید آنلاین واقعی با قابلیت مرور محصولات، مدیریت سبد خرید و لیست علاقه‌مندی‌ها.",
    fullDescription: "این پروژه، بررسی و پیاده‌سازی عمیق معماری فرانت‌اند (Frontend Architecture) یک پلتفرم فروشگاهی مدرن است که فرآیند کامل خرید آنلاین—از کشف محصول تا ثبت نهایی سفارش—را شبیه‌سازی می‌کند. تمرکز اصلی این طرح بر مدیریت روان تغییرات وضعیت (State Transitions)، طراحی رابط کاربری با نرخ تبدیل بالا (High-Conversion UI) و پردازش پایدار داده‌ها معطوف است. این پروژه با برقراری ارتباط میان طرح‌های ایستا و قابلیت‌های پویا، نحوه ساخت یک فروشگاه مقیاس‌پذیر و با کارایی بالا در تعاملات سنگین را به نمایش می‌گذارد.",
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
  
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};


