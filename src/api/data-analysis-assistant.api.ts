import axios from "axios";

const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY =
  "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";

export const fetchDataAnalysis = async (content: string) => {
  try {
    const response = await axios.post(
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
