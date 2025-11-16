"use client";

import { useState, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { Sparkles } from "lucide-react";
import { FarmApiResponse, FarmRecord } from "@/control/types/Chart";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY });

export const getFarm = async (farm_id: string = "FARM0001"): Promise<FarmRecord> => {
  const base = process.env.NEXT_PUBLIC_PROD_URL!;
  try {
    const reqUrl = `${base}/api/farms/${farm_id}`;
    console.log(reqUrl)
    const response = await fetch(reqUrl);

    if (!response.ok) {
      throw new Error(`HTTP error getFarm. Status: ${response.status}`);
    }

    const json: FarmApiResponse = await response.json();
    return json.response;
  } catch (error) {
    console.error("Failed to fetch farm:", error);
    throw error;
  }
};

export default function AISlide() {
  const [explanation, setExplanation] = useState("");

  // Typing animation
const typeWriter = (text: string) => {
  setExplanation("");

  const chars = Array.from(text); // UTF-8 safe
  let i = 0;

  const interval = setInterval(() => {
    setExplanation(prev => prev + chars[i]);
    i++;

    if (i >= chars.length) clearInterval(interval);
  }, 25);
};


  const callAI = async () => {
    const farm = await getFarm("FARM0001");

    const prompt = `
      You are an agriculture analyst.
      Here is the farm data:
      ${JSON.stringify(farm, null, 2)}

      Provide a simple, meaningful explanation.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text || "No explanation generated.";
    typeWriter(text);
  };

  // 🔥 RUN ONLY ONCE — when component is first rendered
  useEffect(() => {
    callAI();
  }, []); // <= empty array = run once

  return (
    <div className="flex w-full border">
      <div className="w-[60%] border">
        <div className="relative h-[60vh] bg-black/20 backdrop-blur-lg p-5">
          
          <div className="flex items-center gap-3">
            <Sparkles className="text-yellow-400" width={40} height={40} />
            <span className="text-white text-[20px] font-medium text-outfit">
              Receive your AI description
            </span>
          </div>

          <div className="border w-full h-[45vh] mt-9 p-5 text-[1.15vw] overflow-y-auto">
            {explanation}
          </div>

        </div>
      </div>
    </div>
  );
}
