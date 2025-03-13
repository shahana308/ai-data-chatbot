import { DataAnalysisResponse } from "types/DataAnalysis";
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
