import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const SHEETDB_API_URL = process.env.NEXT_PUBLIC_SHEETDB_API_URL || "";

export const useFetchChatMessages = () => {
  return useQuery({
    queryKey: ["chatMessages"],
    queryFn: async () => {
      // const res = [
      //   {
      //     timestamp: "2025-03-18T15:30:00Z",
      //     user_message:
      //       "Show me a bar chart of quarterly revenue for last year.",
      //     bot_message: JSON.stringify({
      //       title: "Quarterly Revenue",
      //       xAxisLabel: "Quarter",
      //       yAxisLabel: "Revenue (USD)",
      //       data: [
      //         { x: "Q1", y: 15000 },
      //         { x: "Q2", y: 20000 },
      //         { x: "Q3", y: 18000 },
      //         { x: "Q4", y: 22000 },
      //       ],
      //       chartType: "bar",
      //       message: "This is the bar chart values for quarterly revenue.",
      //     }),
      //     title: "Revenue Analysis",
      //     id: "2016",
      //     isFavorite: false,
      //     isSaved: true,
      //   },
      //   {
      //     timestamp: "2025-03-18T15:32:00Z",
      //     user_message:
      //       "Give me a line chart of temperature over the last 7 days.",
      //     bot_message: JSON.stringify({
      //       title: "Daily Temperature",
      //       xAxisLabel: "Day",
      //       yAxisLabel: "Temp (°C)",
      //       data: [
      //         { x: "Mon", y: 22 },
      //         { x: "Tue", y: 24 },
      //         { x: "Wed", y: 23 },
      //         { x: "Thu", y: 25 },
      //         { x: "Fri", y: 27 },
      //         { x: "Sat", y: 26 },
      //         { x: "Sun", y: 24 },
      //       ],
      //       chartType: "line",
      //       message: "This is the line chart values for daily temperature.",
      //     }),
      //     title: "Weather Summary",
      //     id: "2016",
      //     isFavorite: false,
      //     isSaved: true,
      //   },
      //   {
      //     timestamp: "2025-03-18T15:33:00Z",
      //     user_message: "Give me a doughnut chart of market share by brand.",
      //     bot_message: JSON.stringify({
      //       title: "Market Share",
      //       xAxisLabel: "Brand",
      //       yAxisLabel: "Percentage",
      //       data: [
      //         { x: "Apple", y: 35 },
      //         { x: "Samsung", y: 30 },
      //         { x: "OnePlus", y: 20 },
      //         { x: "Others", y: 15 },
      //       ],
      //       chartType: "doughnut",
      //       message:
      //         "This is the doughnut chart values for market share by brand.",
      //     }),
      //     title: "Brand Distribution",
      //     id: "2016",
      //     isFavorite: false,
      //     isSaved: true,
      //   },
      //   {
      //     timestamp: "2025-03-18T15:34:00Z",
      //     user_message:
      //       "Can you provide an area chart of daily website visits this week?",
      //     bot_message: JSON.stringify({
      //       title: "Website Visits",
      //       xAxisLabel: "Day",
      //       yAxisLabel: "Visits",
      //       data: [
      //         { x: "Mon", y: 900 },
      //         { x: "Tue", y: 1000 },
      //         { x: "Wed", y: 1100 },
      //         { x: "Thu", y: 1050 },
      //         { x: "Fri", y: 1200 },
      //       ],
      //       chartType: "polarArea",
      //       message: "This is the area chart values for daily website visits.",
      //     }),
      //     title: "Web Traffic",
      //     id: "2016",
      //     isFavorite: false,
      //     isSaved: true,
      //   },
      //   {
      //     timestamp: "2025-03-18T15:35:00Z",
      //     user_message:
      //       "Show me a bubble chart of product popularity vs price.",
      //     bot_message: JSON.stringify({
      //       title: "Product Bubble Analysis",
      //       xAxisLabel: "Price ($)",
      //       yAxisLabel: "Popularity Score",
      //       data: [
      //         { x: 10, y: 60, r: 8 },
      //         { x: 20, y: 80, r: 12 },
      //         { x: 30, y: 55, r: 10 },
      //       ],
      //       chartType: "bubble",
      //       message:
      //         "This is the bubble chart values for product popularity vs price.",
      //     }),
      //     title: "Product Overview",
      //     id: "2016",
      //     isFavorite: false,
      //     isSaved: true,
      //   },
      //   {
      //     timestamp: "2025-03-18T15:36:00Z",
      //     user_message:
      //       "Generate a polar area chart of time spent on different tasks.",
      //     bot_message: JSON.stringify({
      //       title: "Task Time Distribution",
      //       xAxisLabel: "Task",
      //       yAxisLabel: "Minutes",
      //       data: [
      //         { x: "Emails", y: 120 },
      //         { x: "Meetings", y: 90 },
      //         { x: "Coding", y: 180 },
      //         { x: "Breaks", y: 30 },
      //       ],
      //       chartType: "polarArea",
      //       message:
      //         "This is the polar area chart values for time spent on tasks.",
      //     }),
      //     title: "Work Breakdown",
      //     id: "2016",
      //     isFavorite: false,
      //     isSaved: true,
      //   },
      //   {
      //     timestamp: "2025-03-18T15:37:00Z",
      //     user_message:
      //       "Create a radar chart comparing skill levels across categories.",
      //     bot_message: JSON.stringify({
      //       title: "Skill Radar",
      //       xAxisLabel: "Skill",
      //       yAxisLabel: "Proficiency (out of 10)",
      //       data: [
      //         { x: "React", y: 9 },
      //         { x: "Node.js", y: 7 },
      //         { x: "Python", y: 6 },
      //         { x: "Design", y: 5 },
      //         { x: "Communication", y: 8 },
      //       ],
      //       chartType: "radar",
      //       message: "This is the radar chart values for skill comparison.",
      //     }),
      //     title: "Skill Analysis",
      //     id: "2016",
      //     isFavorite: false,
      //     isSaved: true,
      //   },
      //   {
      //     timestamp: "2025-03-18T15:38:00Z",
      //     user_message:
      //       "Give me a scatter chart of marketing spend vs revenue.",
      //     bot_message: JSON.stringify({
      //       title: "Spend vs Revenue",
      //       xAxisLabel: "Marketing Spend ($)",
      //       yAxisLabel: "Revenue ($)",
      //       data: [
      //         { x: 1000, y: 3000 },
      //         { x: 2000, y: 4500 },
      //         { x: 3000, y: 5000 },
      //         { x: 4000, y: 7000 },
      //       ],
      //       chartType: "scatter",
      //       message:
      //         "This is the scatter chart values for marketing spend vs revenue.",
      //     }),
      //     title: "ROI Scatter Plot",
      //     id: "2016",
      //     isFavorite: false,
      //     isSaved: true,
      //   },
      //   {
      //     timestamp: "2025-03-17T08:00:00Z",
      //     user_message: "Hey! What's the weather like today?",
      //     bot_message: "",
      //     title: "Weather Info",
      //     id: "2001",
      //     isFavorite: true,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T08:01:00Z",
      //     user_message: "",
      //     bot_message: "Today's forecast is sunny with a high of 25°C.",
      //     title: "Weather Info",
      //     id: "2001",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T09:15:00Z",
      //     user_message: "Tell me a joke!",
      //     bot_message: "",
      //     title: "Jokes",
      //     id: "2002",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T09:16:00Z",
      //     user_message: "",
      //     bot_message:
      //       "Why don’t skeletons fight each other? They don’t have the guts!",
      //     title: "Jokes",
      //     id: "2002",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T10:00:00Z",
      //     user_message: "What are the top 5 programming languages in 2025?",
      //     bot_message: "",
      //     title: "Tech Trends",
      //     id: "2003",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T10:01:00Z",
      //     user_message: "",
      //     bot_message:
      //       "The top programming languages in 2025 are Python, JavaScript, Rust, Go, and TypeScript.",
      //     title: "Tech Trends",
      //     id: "2003",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T11:30:00Z",
      //     user_message: "Suggest a good book to read.",
      //     bot_message: "",
      //     title: "Book Recommendations",
      //     id: "2004",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T11:31:00Z",
      //     user_message: "",
      //     bot_message:
      //       "I recommend 'Atomic Habits' by James Clear. It's a great book on personal development!",
      //     title: "Book Recommendations",
      //     id: "2004",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T13:45:00Z",
      //     user_message: "What are some healthy breakfast options?",
      //     bot_message: "",
      //     title: "Healthy Eating",
      //     id: "2005",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T13:46:00Z",
      //     user_message: "",
      //     bot_message:
      //       "Some healthy breakfast options include oatmeal, Greek yogurt with fruit, and avocado toast.",
      //     title: "Healthy Eating",
      //     id: "2005",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T15:00:00Z",
      //     user_message: "How does blockchain work?",
      //     bot_message: "",
      //     title: "Blockchain Basics",
      //     id: "2006",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T15:01:00Z",
      //     user_message: "",
      //     bot_message:
      //       "Blockchain is a decentralized ledger that records transactions across multiple computers securely.",
      //     title: "Blockchain Basics",
      //     id: "2006",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T16:10:00Z",
      //     user_message: "Translate 'Good Morning' into French.",
      //     bot_message: "",
      //     title: "Language Translation",
      //     id: "2007",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T16:11:00Z",
      //     user_message: "",
      //     bot_message:
      //       "The translation of 'Good Morning' in French is 'Bonjour'.",
      //     title: "Language Translation",
      //     id: "2007",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T17:20:00Z",
      //     user_message: "Who won the FIFA World Cup in 2022?",
      //     bot_message: "",
      //     title: "Sports Trivia",
      //     id: "2008",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T17:21:00Z",
      //     user_message: "",
      //     bot_message:
      //       "Argentina won the FIFA World Cup in 2022, led by Lionel Messi.",
      //     title: "Sports Trivia",
      //     id: "2008",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T18:30:00Z",
      //     user_message: "What is the capital of Japan?",
      //     bot_message: "",
      //     title: "Geography",
      //     id: "2009",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T18:31:00Z",
      //     user_message: "",
      //     bot_message: "The capital of Japan is Tokyo.",
      //     title: "Geography",
      //     id: "2009",
      //   },
      //   {
      //     timestamp: "2025-03-17T20:00:00Z",
      //     user_message: "How do I bake a chocolate cake?",
      //     bot_message: "",
      //     title: "Cooking Tips",
      //     id: "2010",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-17T20:01:00Z",
      //     user_message: "",
      //     bot_message:
      //       "To bake a chocolate cake, you'll need flour, cocoa powder, eggs, sugar, and baking powder. Mix and bake at 350°F for 30 minutes!",
      //     title: "Cooking Tips",
      //     id: "2010",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T08:45:00Z",
      //     user_message: "What are some fun places to visit in New York?",
      //     bot_message: "",
      //     title: "Travel Guide",
      //     id: "2011",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T08:46:00Z",
      //     user_message: "",
      //     bot_message:
      //       "Some great places to visit in New York are Times Square, Central Park, and the Statue of Liberty.",
      //     title: "Travel Guide",
      //     id: "2011",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T09:30:00Z",
      //     user_message: "How does photosynthesis work?",
      //     bot_message: "",
      //     title: "Science Facts",
      //     id: "2012",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T09:31:00Z",
      //     user_message: "",
      //     bot_message:
      //       "Photosynthesis is the process by which plants convert sunlight into energy, using chlorophyll in their leaves.",
      //     title: "Science Facts",
      //     id: "2012",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T11:15:00Z",
      //     user_message: "Who was the first person to walk on the moon?",
      //     bot_message: "",
      //     title: "History",
      //     id: "2013",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T11:16:00Z",
      //     user_message: "",
      //     bot_message:
      //       "Neil Armstrong was the first person to walk on the moon on July 20, 1969.",
      //     title: "History",
      //     id: "2013",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T13:00:00Z",
      //     user_message: "How do I improve my coding skills?",
      //     bot_message: "",
      //     title: "Programming Tips",
      //     id: "2014",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T13:01:00Z",
      //     user_message: "",
      //     bot_message:
      //       "Practice daily, build projects, read documentation, and contribute to open source.",
      //     title: "Programming Tips",
      //     id: "2014",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T14:30:00Z",
      //     user_message: "What is the stock market?",
      //     bot_message: "",
      //     title: "Finance",
      //     id: "2015",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      //   {
      //     timestamp: "2025-03-18T14:31:00Z",
      //     user_message: "",
      //     bot_message:
      //       "The stock market is a marketplace where investors buy and sell shares of companies.",
      //     title: "Finance",
      //     id: "2015",
      //     isFavorite: false,
      //     isSaved: false,
      //   },
      // ];

      const res = await fetch(SHEETDB_API_URL);
      return res.json();
      return res;
    },
  });
};

export const usePostChatMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      message,
      type,
      title,
      id,
    }: {
      message: string;
      type: "user" | "bot";
      title: string;
      id: string;
    }) => {
      const timestamp = new Date().toISOString();
      const payload =
        type === "user"
          ? { user_message: message, bot_message: null, timestamp, title, id }
          : { user_message: null, bot_message: message, timestamp, title, id };

      const res = await fetch(SHEETDB_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["chatMessages"] });
    },
  });
};
