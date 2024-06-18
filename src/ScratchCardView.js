import React, { useState } from "react";
import ScratchCard from "react-scratchcard-v2";
import couponCover from "./card.jpg";
import "./styles.css";
import bouquetImage from "./flowerbouquet.jpeg";

export default function ScratchCardView() {
  const [scratchedText, setScratchedText] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [couponNumber, setCouponNumber] = useState("");
  const [isScratched, setIsScratched] = useState(false);

  const handleScratchComplete = () => {
    console.log("The card is now clear!");
    const discount = "10%"; 
    const uniqueNumber = `COUPON-${Math.floor(Math.random() * 100000)}`;
    setDiscountPercentage(discount);
    setCouponNumber(uniqueNumber);
    setScratchedText(`Discount ${discount}`);
    setIsScratched(true); 
  };

  const settings = {
    width: 300,
    height: 300,
    image: couponCover,
    finishPercent: 50,
    onComplete: handleScratchComplete,
  };

  return (
    <div className="Apps">
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          {!isScratched ? (
            <div className="scratchCardContainers">
              <ScratchCard {...settings}>
                <div className="scratchedDiv text-lg font-bold text-gray-700">
                  {scratchedText}
                </div>
              </ScratchCard>
            </div>
          ) : (
            <div className="scratchedDiv text-lg font-bold text-gray-700">
              <div>
                <p>Congratulations! You Won!</p>
                <img src={bouquetImage} alt="Bouquet" style={{ maxWidth: "100%", marginTop: "20px" }} />
              </div>
              {scratchedText}
              {couponNumber && (
                <div className="mt-2 text-sm text-gray-500">
                  Coupon Number: {couponNumber}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
