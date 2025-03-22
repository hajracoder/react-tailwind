
import { useState } from "react";
import image1 from "../assets/11.png";
import image2 from "../assets/12.png";
import image3 from "../assets/13.png";
import image4 from "../assets/14.png";
import image5 from "../assets/15.png";

const reviews = [
  { image: image1, text: "It effectively fights cavities, reduces plaque, and promotes overall oral health." },
  { image: image2, text: "Trusted by healthcare professionals, PureBrush is a reliable choice for daily care." },
  { image: image3, text: "At our store, PureBrush’s toothpaste has consistently been a top-selling product." },
  { image: image4, text: "It complements our commitment to high-quality, natural products." },
  { image: image5, text: "It’s a product we recommend to consumers seeking a reliable toothbrush." }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="w-full bg-[#FFFBF2] py-12 px-4">
      {/* Full Screen View */}
      <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-5 gap-8 items-center text-center">
        {reviews.map((review, index) => (
          <div key={index}>
            <img src={review.image} alt={`Review ${index + 1}`} className="w-20 h-auto mx-auto" />
            <p className="text-gray-700 mt-2">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Tab & Mobile View */}
      <div className="lg:hidden text-center">
        <img src={reviews[currentIndex].image} alt="Review Image" className="w-20 h-auto mx-auto" />
        <p className="text-gray-700 mt-4 max-w-md mx-auto">{reviews[currentIndex].text}</p>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-green-950" : "bg-gray-400"}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}