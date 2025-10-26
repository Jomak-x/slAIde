"use client";

import FileDropzone from "./components/FileDropzone";
import LiquidEther from "./components/Background";
import Dictaphone from "./components/Dictaphone";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const learnMoreRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [htmlString, setHtmlString] = useState("");
  const [showHtml, setShowHtml] = useState(false);
  const [htmlUrl, setHtmlUrl] = useState("");

  // Update HTML preview URL when htmlString changes
  useEffect(() => {
    if (!htmlString) return;
    const blob = new Blob([htmlString], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    setHtmlUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [htmlString]);

  // Create session for AI agent
  const createSession = async () => {
    const appName = "lead_agent";
    const userId = "u_123";
    const sessionId = crypto.randomUUID();
    const url = `http://localhost:8000/apps/${appName}/users/${userId}/sessions/${sessionId}`;
    const payload = { state: { key1: "value1", key2: 42 } };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      console.log("Session created!");
    } catch (err) {
      console.error("Failed to create session:", err);
    }

    return sessionId;
  };

  // Prompt AI agent
  const promptAgent = async () => {
    setLoading(true);
    try {
      const id = await createSession();

      const url = "http://localhost:8000/run";
      const payload = {
        app_name: "lead_agent",
        user_id: "u_123",
        session_id: id,
        new_message: { role: "user", parts: [{ text: message }] },
      };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      const htmlOutput = data[2].content.parts[0].text;
      setResponse(htmlOutput);
      setHtmlString(htmlOutput);
      setShowHtml(true);
    } catch (err) {
      console.error("Error calling AI agent:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle MP3/MP4 file selection for transcription
  const handleFileSelect = async (file: File) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      // Append transcription to existing textarea content
      setMessage((prev) => (prev ? prev + " " + data.text : data.text));
    } catch (err) {
      console.error("Transcription failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const scrollToLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full text-center p-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <LiquidEther
          className="absolute top-0 left-0 w-full h-screen"
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 bg-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
        {/* Left Content */}
        <div className="flex-1 text-left text-white">
  {/* Heading */}
  <h1 className="text-4xl font-extrabold bg-linear-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight text-center space-y-2">
    <span>Presentations </span>
    {/* Pink bar divider */}
    
    <span>and PDF Generation at the Click of a Button</span>
  </h1>
<span className="block h-1 w-full bg-pink-500 mx-auto my-2 rounded-full"></span>
  {/* Paragraphs */}
  <p className="text-lg text-gray-200 leading-relaxed mt-2">
    Transform your text, story, or even audio into a beautiful
  </p>
  <p className="text-2xl font-extrabold text-purple-300 leading-relaxed ">
    AI-generated presentations
  </p>
  <p className="text-lg text-gray-200 leading-relaxed mt-2">
    Just type your story or utilize your microphone to populate the box on the right and we’ll handle the rest!
  </p>

  {/* Button */}
  <div className="pt-4">
    <button
      onClick={scrollToLearnMore}
      className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
    >
      Learn More
    </button>
  </div>
</div>


        {/* Right Content */}
        <div className="flex-1 flex flex-col items-center gap-4">

          {/* Generated HTML Links */}
          {htmlUrl && (
            <div className="mt-4 flex gap-4">
              <a
                href={htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
              >
                Open Generated Slideshow
              </a>
              <a
                href={htmlUrl}
                download="generated.html"
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all"
              >
                Download Slideshow
              </a>
            </div>
          )}

          

          {/* Unified Textarea */}
          <textarea
            placeholder="Enter instructions or preferences for your presentation..."
            className="w-full mt-4 p-4 rounded-2xl bg-pink-50/20 border border-pink-400 placeholder-pink-200 text-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition-colors"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="flex items-center w-full mx-auto">
            

            {/* Microphone Input */}
            <div className="flex-1 sm:flex-none justify-start items-end">
              <Dictaphone appendToMessage={(text) => setMessage(text)} />
            </div>

            {/* Enter Button */}
            <div className="flex justify-center w-full mt-4">
              <button
                onClick={promptAgent}
                className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-all duration-300"
              >
                Enter
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Learn More Section */}
      <section
        ref={learnMoreRef}
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-32 bg-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl scroll-mt-24"
      >
        <div className="flex-1 text-left text-white space-y-6">
          <h2 className="text-4xl font-bold bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our app uses A2A (Agent-to-Agent) technology to automatically generate presentations or PDF summaries from any given topic by allowing the user to input their data manually or by using their own microphone input. Behind the scenes, it uses ADK agents that follow a structured protocol to coordinate LLM (Large Language Model) calls, ensuring high-quality, accurate, and visually clear outputs.

The goal is simple: make creating presentations easy, fast, and accessible for everyone — even those with no technical background.
          </p>
        </div>

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
