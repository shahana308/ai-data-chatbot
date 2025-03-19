import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const SHEETDB_API_URL = process.env.NEXT_PUBLIC_SHEETDB_API_URL || "";

export const useFetchChatMessages = () => {
  return useQuery({
    queryKey: ["chatMessages"],
    queryFn: async () => {
      const res = [
        {
          timestamp: "2025-03-17T14:30:00Z",
          user_message: "Hi How are You?",
          bot_message: "",
          title: "Maths",
          id: "1034",
        },
        {
          timestamp: "2025-03-17T15:30:00Z",
          user_message: "",
          bot_message: "Great :) ",
          title: "Maths",
          id: "1034",
        },
        {
          timestamp: "2025-03-17T16:30:00Z",
          user_message: "What is 109 + 100?",
          bot_message: "",
          title: "Maths",
          id: "1034",
        },
        {
          timestamp: "2025-03-17T17:30:00Z",
          user_message: "",
          bot_message:
            "It is 209. Please let me know if you need further assistance",
          title: "Maths",
          id: "1034",
        },
        {
          timestamp: "2025-03-18T10:22:38.404Z",
          user_message: "Plan me an itenrary to Japan for 4 days",
          bot_message: "",
          title: "Japan Itinerary",
          id: "1035",
        },
        {
          timestamp: "2025-03-18T10:23:32.879Z",
          user_message: "",
          bot_message:
            "To plan a 4-day itinerary for a trip to Japan, it's important to focus on a specific region or city due to the limited time. Given that Tokyo is a major hub and offers a wide range of attractions, a 4-day itinerary in Tokyo could be a great way to experience a mix of traditional and modern Japanese culture. However, if you prefer a more diverse experience, you could also consider a day trip to a nearby city such as Kyoto or Hakone. \n\nHere’s a suggested 4-day itinerary primarily focused on Tokyo, with a possible day trip to a nearby location such as Kamakura or Nikko.\n\n### Day 1: Central Tokyo\n\n#### Morning:\n- **Asakusa and Senso-ji Temple**: Start your day at Asakusa, one of Tokyo’s most famous and historic districts. Visit the Senso-ji Temple, Tokyo’s oldest temple, and explore the Nakamise shopping street leading up to the temple where you can find traditional snacks and souvenirs.\n- **Tokyo Skytree**: After Asakusa, head to the nearby Tokyo Skytree. It’s one of the tallest structures in the world and offers a panoramic view of Tokyo from its observation decks.\n\n#### Afternoon:\n- **Ueno Park and Museums**: Take a short train ride to Ueno Park where you can visit several museums such as the Tokyo National Museum, the National Museum of Nature and Science, or the Ueno Zoo if you’re traveling with family.\n- **Ameyoko Market**: Located near Ueno Station, Ameyoko is a bustling market street where you can find a variety of goods from fresh seafood to clothing and souvenirs.\n\n#### Evening:\n- **Akihabara**: Known as the center of Japan’s otaku (geek) culture, Akihabara is a must-visit for anime, manga, and electronics enthusiasts. Explore the many shops and perhaps try a themed café such as a maid café.\n- **Dinner in Akihabara or return to your hotel area for dinner.**\n\n### Day 2: Modern Tokyo\n\n#### Morning:\n- **Tsukiji Outer Market**: Start your day early with a visit to the Tsukiji Outer Market where you can enjoy fresh seafood and sushi for breakfast. Note that the inner wholesale market has moved to Toyosu, but the outer market remains a great place for food.\n- **Hamarikyu Gardens**: A short walk from Tsukiji, these beautiful gardens offer a peaceful escape from the city’s hustle and bustle. The gardens feature a traditional tea house where you can enjoy matcha tea.\n\n#### Afternoon:\n- **Ginza**: Known for its upscale shopping and dining, Ginza is a great place to explore high-end stores such as Mitsukoshi department store and the Sony Building. It’s also a great place for a lunch break.\n- **Imperial Palace and East Gardens**: A short walk from Ginza, visit the Imperial Palace and its East Gardens. While the inner grounds are usually closed to the public, the East Gardens are open and offer a glimpse into the history of the Imperial family.\n\n#### Evening:\n- **Shibuya**: Head to Shibuya in the evening to experience the famous Shibuya Crossing, one of the busiest pedestrian crossings in the world. Visit the statue of Hachiko and explore the vibrant shopping and dining options in the area.\n- **Dinner in Shibuya**: There are many dining options here, from casual izakayas to high-end restaurants.\n\n### Day 3: Day Trip to Kamakura or Nikko\n\n#### Option 1: Kamakura (about an hour from Tokyo by train)\n- **Great Buddha (Daibutsu)**: Visit the iconic Great Buddha statue at Kotoku-in Temple.\n- **Hase-dera Temple**: Another beautiful temple in Kamakura, known for its stunning gardens and views of the coast.\n- **Tsurugaoka Hachimangu Shrine**: A significant Shinto shrine in Kamakura.\n- **Komachi-dori Street**: A lively street filled with shops, cafes, and restaurants.\n\n#### Option 2: Nikko (about two hours from Tokyo by train)\n- **Toshogu Shrine**: A lavishly decorated shrine complex that is a UNESCO World Heritage site.\n- **Rinno-ji Temple**: Another important temple in Nikko.\n- **Kegon Falls**: One of Japan’s most famous waterfalls, located in Nikko National Park.\n- **Lake Chuzenji**: A scenic lake that offers beautiful views and a peaceful atmosphere.\n\n#### Evening:\n- Return to Tokyo and have dinner in a neighborhood such as Shinjuku where you can explore Kabukicho (Tokyo’s entertainment district) or Golden Gai (a network of narrow alleys filled with tiny bars).\n\n### Day 4: Western Tokyo and Shinjuku\n\n#### Morning:\n- **Meiji Shrine**: Located in Shibuya, this Shinto shrine is dedicated to Emperor Meiji and Empress Shoken. The surrounding Yoyogi Park is a great place for a morning stroll.\n- **Harajuku and Takeshita Street**: After visiting Meiji Shrine, head to Harajuku, known for its unique fashion and youth culture. Takeshita Street is filled with trendy shops and cafes.\n\n#### Afternoon:\n- **Shinjuku Gyoen National Garden**: A large park in Shinjuku that offers a variety of gardens including a traditional Japanese garden, a French garden, and an English garden.\n- **Shinjuku**: Explore the Shinjuku area, which includes the Tokyo Metropolitan Government Building where you can get a free view of Tokyo from the observation deck.\n\n#### Evening:\n- **Omoide Yokocho (Memory Lane)**: Also known as “Piss Alley,” this narrow alley in Shinjuku is filled with tiny eateries where you can try yakitori (grilled chicken skewers) and other Japanese street food.\n- **Kabukicho**: For a more lively evening, explore Kabukicho, which is full of bars, restaurants, and entertainment options.\n\n### Additional Tips:\n- **Transportation**: Consider purchasing a Suica or Pasmo card for convenient access to trains and buses in Tokyo.\n- **Language**: While many signs are in English, it’s helpful to learn a few basic Japanese phrases or use a translation app.\n- **Accommodation**: Staying in a central location such as Shinjuku, Shibuya, or near Tokyo Station can make it easier to get around.\n\nThis itinerary provides a well-rounded experience of Tokyo and a day trip to a nearby historical city. Adjustments can be made based on your specific interests and preferences.",
          title: "Japan Itinerary",
          id: "1035",
        },
        {
          timestamp: "2025-03-17T10:27:03.559Z",
          user_message:
            'Summarize the given dataset and provide the response in a structured JSON format suitable for graphing. The format should be:"\n\njson\nCopy\nEdit\n{\n  "title": "Graph Title",\n  "xAxisLabel": "X-Axis Label",\n  "yAxisLabel": "Y-Axis Label",\n  "data": [\n    {"x": "Category 1", "y": 10},\n    {"x": "Category 2", "y": 25},\n    {"x": "Category 3", "y": 15}\n  ]\n}\n"Ensure that the x values represent the categories or time points, and the y values represent numerical data points. Format the data so that it can be easily visualized using a bar chart or line graph.',
          bot_message: "",
          title: "Data Summarizer",
          id: "1036",
        },
        {
          timestamp: "2025-03-17T11:27:03.559Z",
          user_message: "",
          bot_message:
            '{\n  "title": "Monthly Sales Summary",\n  "xAxisLabel": "Month",\n  "yAxisLabel": "Sales (in USD)",\n  "data": [\n    {"x": "January", "y": 12000},\n    {"x": "February", "y": 15000},\n    {"x": "March", "y": 17000},\n    {"x": "April", "y": 13000},\n    {"x": "May", "y": 18000},\n    {"x": "June", "y": 16000}\n  ]\n}\n',
          title: "Data Summarizer",
          id: "1036",
        },
      ];
      // const res = await fetch(SHEETDB_API_URL);
      // return res.json();
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
