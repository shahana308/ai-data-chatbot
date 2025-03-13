import { DataAnalysisResponse } from "@/types/DataAnalysis";
import axios from "axios";

const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY =
  "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";

export const fetchDataAnalysis = async (content: string) => {
  try {
    const response = await axios.post<DataAnalysisResponse>(
      API_URL,
      {
        model: "deepseek/deepseek-r1-zero:free",
        messages: [
          {
            role: "user",
            content: content,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data analysis:", error);
    throw error;
  }
};
