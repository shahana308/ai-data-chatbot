import { useEffect, useState } from "react";
import Head from "next/head";
import DataUploader from "../components/DataUploader";
import DataVisualizer from "../components/DataVisualizer";
import Chatbot from "../components/Chatbot";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <Head>
        <title>Data Insights App</title>
      </Head>
      <main>
        <h1>Welcome to Data Insights</h1>
        <DataUploader />
        <Chatbot />
        <DataVisualizer />
      </main>
    </div>
  );
}
