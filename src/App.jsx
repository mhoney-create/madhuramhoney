import "./App.css";
import { Video } from "./components/video/video";
import Navbar from "./components/navbar/navbar";
import { ContainerScroll } from "./components/scrollanimation/scrollanimation";
import { SparklesPreview } from "./components/sparkleanimation/sparkling";
import Chatbot from "./components/chatbot/chatbot";
import Homepagecomponents from "./components/homepagecomponents/homepagecomponents";
import { InfiniteMovingCards } from "./components/infinitemovingcards/Infinitemovingcards";
import ProductRedirect from "./components/products/Products";
import Abouthome from "./components/abouthome/Abouthome";
import Footer from "./components/footer/Footer";
function App() {
  const testimonials = [
    {
      quote:
        "The best honey I've ever tasted! It's rich, smooth, and has the perfect sweetness. My family loves it too!",
      name: "Anita R.",
      title: "Satisfied Customer",
    },
    {
      quote:
        "Madhurum Honey is my go-to for natural sweetness. I use it in my tea, desserts, and even skincare routine!",
      name: "John M.",
      title: "Health Enthusiast",
    },
    {
      quote:
        "Amazing quality! The flavor is so pure and natural. It's a must-have in every kitchen.",
      name: "Priya K.",
      title: "Home Chef",
    },
    {
      quote:
        "I love how versatile Madhurum Honey is. It's great for baking and makes my breakfast extra special.",
      name: "David L.",
      title: "Food Blogger",
    },
    {
      quote:
        "This honey is a game-changer. I’ve tried many brands, but this one stands out for its authenticity and taste.",
      name: "Sanjay V.",
      title: "Fitness Coach",
    },
    {
      quote:
        "Madhurum Honey has become an essential part of my daily routine. It's so pure and flavorful!",
      name: "Meera S.",
      title: "Nature Lover",
    },
    {
      quote:
        "The perfect gift for my loved ones. Everyone adored the quality and flavor of this honey.",
      name: "Ravi T.",
      title: "Happy Customer",
    },
  ];

  return (
    <>
      <Navbar />
      <SparklesPreview />
      <ContainerScroll>
        <Video />
      </ContainerScroll>
      {/* <Chatbot /> */}
      <Homepagecomponents />
      <div>
        <div className="pt-20 text-5xl text-honey-normal flex justify-center items-center font-semibold">
          What Our Customers Say
        </div>
        <div className="pt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      <Abouthome />
      <ProductRedirect />
      <Footer />
    </>
  );
}

export default App;
