"use client";

import { useState } from "react";

export default function MP3Transcriber() {
  const [file, setFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranscribe = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/transcribe", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setTranscript(data.text);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <input
        type="file"
        accept="audio/mp3,audio/wav"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button
        onClick={handleTranscribe}
        disabled={!file || loading}
        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
      >
        {loading ? "Transcribing..." : "Transcribe MP3"}
      </button>
      {transcript && (
        <textarea
          value={transcript}
          readOnly
          rows={6}
          className="w-full mt-4 p-4 rounded-lg bg-gray-800 text-white"
        />
      )}
    </div>
  );
}
