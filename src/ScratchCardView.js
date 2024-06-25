import React, { useState } from "react";
import ScratchCard from "react-scratchcard-v2";
import Confetti from "react-confetti";
import { useWindowSize } from 'react-use';
import couponCover from "./logo.jpg";
import "./styles.css";
import Header from "./common/header";
import Footer from "./common/footer";

export default function ScratchCardView() {
  const [scratchedText, setScratchedText] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [couponNumber, setCouponNumber] = useState("");
  const [isScratched, setIsScratched] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleScratchComplete = () => {
    console.log("The card is now clear!");
    const discount = "10%";
    const uniqueNumber = `COUPON-${Math.floor(Math.random() * 100000)}`;
    setDiscountPercentage(discount);
    setCouponNumber(uniqueNumber);
    setScratchedText(`Discount ${discount}`);
    setIsScratched(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 7000); 
  };

  const settings = {
    width: 300,
    height: 300,
    image: couponCover,
    finishPercent: 20,
    onComplete: handleScratchComplete,
  };

  return (
    <>
      <Header />
      <div className="Apps">
        {showConfetti && (
          <Confetti width={width * 0.9} height={height * 0.8} />
        )}
        <div className="flex justify-center items-center h-screen">
          <div
            className="bg-white shadow-lg rounded-lg p-6 text-center relative"
            style={{ width: "300px" }}
          >
            {!isScratched ? (
              <div className="scratchCardContainers">
                <div className="scratchCardWrapper">
                  <ScratchCard {...settings}>
                    <div className="scratchedDiv text-lg font-bold text-gray-700">
                      {scratchedText}
                    </div>
                  </ScratchCard>
                </div>
              </div>
            ) : (
              <div className="scratchedDiv text-lg font-bold text-gray-700 bg-gray-100 boxStyle">
                <div>
                  <p className="text-3xl font-bold typewriter text-center gradient-text">
                    Congratulations! You Won!
                  </p>
                </div>
                <div className="text-center">
                  {scratchedText}
                  {couponNumber && (
                    <div className="mt-2 text-center text-sm text-black">
                      Coupon Code: {couponNumber}
                    </div>
                  )}
                  <div className="mt-2 text-center text-sm text-black">
                    Thank you!
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
