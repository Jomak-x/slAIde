"use client";

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useEffect, useRef } from "react";

interface DictaphoneProps {
  appendToMessage: (updater: (prev: string) => string) => void; // now accepts a function
}

const Dictaphone: React.FC<DictaphoneProps> = ({ appendToMessage }) => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  // Keep track of what has already been appended
  const lastTranscriptRef = useRef("");

  useEffect(() => {
    const newSpeech = transcript.replace(lastTranscriptRef.current, "");
    if (newSpeech) {
      appendToMessage((prev) => prev + newSpeech); // append new speech only
      lastTranscriptRef.current = transcript;
    }
  }, [transcript, appendToMessage]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="p-4 rounded-2xl bg-gray-800/50 border border-gray-700 text-white text-center w-64">
        Browser doesn't support speech recognition.
      </div>
    );
  }

  return (
    <div className="w-64 p-4 rounded-2xl bg-pink-50/20 border border-pink-400 shadow-lg flex flex-col gap-4">
      <p className="text-sm font-extrabold text-gray-300 text-center">
        Microphone: <span className="font-semibold">{listening ? "on 🎙️" : "off 🔇"}</span>
      </p>

      <div className="flex gap-1">
        <button
          onClick={() =>
            SpeechRecognition.startListening({ continuous: true, language: "en-US" })
          }
          className="w-full px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl text-white font-extrabold shadow-md hover:opacity-90 transition-all"
        >
          Start
        </button>
        <button
          onClick={() => SpeechRecognition.stopListening()}
          className="w-full font-extrabold px-2 py-2 bg-gray-700 rounded-xl text-white shadow-md hover:bg-gray-600 transition-all"
        >
          Stop
        </button>
        <button
          onClick={() => {
            resetTranscript(); // clear internal transcript
            lastTranscriptRef.current = ""; // reset tracking
            appendToMessage(() => ""); // clear parent textarea
          }}
          className="w-full px-2 py-2 bg-pink-600 rounded-xl font-extrabold text-white shadow-md hover:bg-pink-500 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Dictaphone;
 