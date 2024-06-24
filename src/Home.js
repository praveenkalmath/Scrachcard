import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import card from "./logo.jpg";
import Header from "./common/header";
export default function Home() {
  const navigate = useNavigate();

  const shareScratchCard = () => {
    const message = `🎉 Check out this scratch card! 🎉\n\nClick the link below to reveal your discount:\n\n${window.location.origin}/scratch-card`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
    <Header/>
    <div className="App flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-lg font-bold text-gray-700">
          Welcome to our promotion!
        </h1>
        <button
          onClick={shareScratchCard}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Share Scratch Card on WhatsApp
        </button>
      </div>
      <div className="carddiv">
      <img src={card} className="cardimg"></img>
      </div>
    </div>
    </>
  );
}
