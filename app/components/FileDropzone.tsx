"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileDropzoneProps {
  onFileSelect?: (file: File) => void;
  onFileTranscribed?: (text: string) => void; // new callback for transcribed text
}

export default function FileDropzone({ onFileSelect, onFileTranscribed }: FileDropzoneProps) {
  const [file, setFile] = useState<File | null>(null);
  const [transcribing, setTranscribing] = useState(false);

const onDrop = useCallback(
  async (acceptedFiles: File[]) => {
    const selected = acceptedFiles[0];
    if (!selected) return;

    // 1️⃣ Save the file locally in state
    setFile(selected);
    onFileSelect?.(selected);

    // 2️⃣ Only attempt transcription if it's an MP3 file
    if (selected.type === "audio/mpeg") {
      setTranscribing(true);

      try {
        // 3️⃣ Use FormData to send the file to the backend
        const formData = new FormData();
        formData.append("file", selected);

        // 4️⃣ Log the file name for debugging
        console.log("Uploading file for transcription:", selected.name);

        const res = await fetch("/api/transcribe", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        // 5️⃣ Parse JSON response
        const data = await res.json();

        // 6️⃣ Check if transcript exists, fallback to empty string
        const transcript = data.transcript || "";

        // 7️⃣ Send transcription back to parent component
        onFileTranscribed?.(transcript);

        // 8️⃣ Optional: log transcript for debugging
        console.log("Transcription result:", transcript);
      } catch (err) {
        console.error("Failed to transcribe file:", err);
      } finally {
        setTranscribing(false);
      }
    }
  },
  [onFileSelect, onFileTranscribed]
);


  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "audio/mpeg": [".mp3"],
      "video/mp4": [".mp4"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center border-2 rounded-2xl p-6 w-full max-w-md cursor-pointer transition-all duration-300
        ${
          isDragActive
            ? "border-pink-400 bg-pink-50/20 shadow-[0_0_20px_rgba(255,105,180,0.5)]"
            : "border-pink-300 bg-pink-50/10 hover:shadow-[0_0_15px_rgba(255,105,180,0.3)]"
        }
        backdrop-blur-sm`}
    >
      <input {...getInputProps()} />
      {file ? (
        <p className="text-pink-200 font-medium text-center wrap-break-words">
          {file.name} {transcribing && "(Transcribing...)"}
        </p>
      ) : (
        <p className="text-pink-100 text-center">
          {isDragActive
            ? "Drop your MP3 or MP4 file here..."
            : "Click or drag to select your file"}
        </p>
      )}
    </div>
  );
}
