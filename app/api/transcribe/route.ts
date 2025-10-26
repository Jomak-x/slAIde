import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file") as Blob | null;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // Convert Blob to File (OpenAI expects File type in Node)
  const arrayBuffer = await file.arrayBuffer();
  const nodeFile = new File([arrayBuffer], "audio.mp3", { type: "audio/mpeg" });

  const transcription = await openai.audio.transcriptions.create({
    file: nodeFile,
    model: "whisper-1",
  });

  return NextResponse.json({ text: transcription.text });
}
