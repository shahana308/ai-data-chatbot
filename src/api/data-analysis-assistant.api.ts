import { DataAnalysisResponse } from "types/DataAnalysis";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

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
