import { icons, images } from "./assets"


export const projects = [
  {
    title: "FestiFind",
    image: images.festifind,
    description:
      "Festifind is a modern Full Stack event management platform where admins can manage events and transactions, while users can browse upcoming events, book tickets, and view their booked tickets in their profile section.",
    technology: [
      "nextjsIcon",
      "tsIcon",
      "tailwindIcon",
      "reduxIcon",
      "mongoDBIcon",
      "awsS3Bucket",
    ],
    githubLink: "https://github.com/abhii145/festifind",
    demoLink: "https://festifind-near.vercel.app/",
  },
  {
    title: "ShopEasy",
    image: images.shopeasy,
    description:
      "Developed a React-based e-commerce platform with pagination, search, filters, product details, cart management, favorites, Razorpay payments, order history, receipts, and a coupon system. Used React Query, Redux Toolkit, and React Router DOM. Achieved 90%+ test coverage with React Testing Library, Snapshot Testing, Playwright, and Allure reporting.",
    technology: [
      "reactIcon",
      "tsIcon",
      "tailwindIcon",
      "reduxIcon",
      "reactqueryIcon",
      "razorpay",
      "jest",
      "playwright",
    ],
    githubLink: "https://github.com/abhii145/ecommerce",
    demoLink: "https://ecommerce-shopeasy.vercel.app/",
  },
]

export const technologyIcons = icons
