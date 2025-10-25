"use client";

import FileUploadClient from "./components/FileUploadClient";
import LiquidEther from "./components/Background";
import DiscordLoginButton from "./components/DiscordLoginButton";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Home() {
  // ✅ Reference to the "Learn More" section
  const learnMoreRef = useRef<HTMLDivElement | null>(null);

  // ✅ Ensure smooth scrolling globally via CSS (in case user scrolls manually or via anchor links)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const scrollToLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full text-center p-8 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <LiquidEther
          className="absolute top-0 left-0 w-full h-full -z-10"
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Main container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 bg-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
        {/* Left content */}
        <div className="flex-1 text-left text-white space-y-6">
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">
            Presentations Made Easy with AI
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Transform your{" "}
            <span className="font-semibold text-purple-300">MP3</span> or{" "}
            <span className="font-semibold text-pink-300">MP4</span> files into
            beautiful, AI-generated presentations in seconds.
            <br /> Just drag your file into the box on the right — we’ll handle
            the rest!
          </p>  

          <div className="pt-4">
            {/* ✅ Smooth scroll button */}
            <button
              onClick={scrollToLearnMore}
              className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right side drop zone */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <FileUploadClient />

          {/* Preferences / instructions input */}
          <textarea
            placeholder="Enter instructions or preferences for your presentation..."
            className="w-full mt-4 p-4 rounded-2xl bg-pink-50/20 border border-pink-400 placeholder-pink-200 text-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition-colors"
            rows={4}
          />
        </div>

        
      </div>

      {/* ✅ Learn More Section */}
      <section
        ref={learnMoreRef}
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-32 bg-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl scroll-mt-24"
      >
        {/* Left Text Box */}
        <div className="flex-1 text-left text-white space-y-6">
          <h2 className="text-4xl font-bold bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Upload your audio or video file, and our app will automatically
            extract key points, generate slides, and create a polished
            presentation saving you hours of work. By utilizing Google's advanced
            A2A AI agent etc......
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <Image
            src="/A2A.png"
            alt="A2A photo"
            width={400}
            height={300}
            className="rounded-2xl shadow-lg border-2 border-pink-500"
          />
        </div>
      </section>
    </main>
  );
}
