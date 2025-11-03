import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StaticGradientBackground from "../components/StaticGradientBackground";
import './POTD.css';

const POTD = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Get current date in DD/MM/YYYY format
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  // You can fetch this from an API or database
  const problemOfTheDay = {
    name: "Safe States",
    difficulty: "Medium",
    link: "https://www.geeksforgeeks.org/problem-of-the-day" // Replace with actual problem link
  };

  const handleShowProblem = () => {
    window.open(problemOfTheDay.link, '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StaticGradientBackground />
      <div className="relative w-full" style={{ zIndex: 50 }}>
        <Navbar />
      </div>
      
      <div 
        className="otherpage1-content min-h-screen text-white flex flex-col items-center px-4 justify-center relative" 
        style={{ zIndex: 10, fontFamily: 'Cabin, sans-serif' }}
      >
        {/* Page Title */}
        <h1 className="z-10 text-4xl md:text-5xl font-bold tracking-wide mb-12 text-center">
          <span className="text-[#0065A5]">&lt;</span>
          <span className="text-[#00FFAF] mx-2">Problem Of The Day</span>
          <span className="text-[#0065A5]">&gt;</span>
        </h1>

        {/* Problem Card */}
        <div className="w-full max-w-2xl rounded-[20px] p-4 bg-[#002B46]/60 border border-[#004C7C]">
          {/* Date */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-white">{currentDate}</p>
          </div>

          {/* Problem Details and Button */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Problem Info */}
            <div className="font-[Cabin] p-4 mb-4 rounded-xl border flex flex-col text-left text-sm md:text-base border-[#004C7C] w-full md:w-auto">
              <div className="mb-2">
                <strong>Name:</strong> {problemOfTheDay.name}
              </div>
              <div>
                <strong>Difficulty:</strong> {problemOfTheDay.difficulty}
              </div>
            </div>

            {/* Show Problem Button */}
            <button 
              onClick={handleShowProblem}
              className="transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer font-semibold px-6 py-2 rounded-md text-sm md:text-base bg-[#00FFAF] border border-[#004C7C] text-black"
            >
              Show Problem
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default POTD;
