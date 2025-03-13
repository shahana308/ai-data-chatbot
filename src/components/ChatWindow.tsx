"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchDataAnalysis } from "api/data-analysis-assistant.api";
import { DataAnalysisResponse } from "types/DataAnalysis";

const ChatWindow = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<DataAnalysisResponse>();

  const mutation = useMutation<DataAnalysisResponse, Error, string>({
    mutationFn: fetchDataAnalysis,
    onSuccess: (data: DataAnalysisResponse) => {
      setResponse(data);
    },
    onError: (error: Error) => {
      console.error("Error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(input);
  };

  return (
    <div className="w-3/5 bg-gray-100 p-4 h-screen">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="Enter your query..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Loading..." : "Submit"}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="font-bold">Response:</h3>
          <p>{response.choices[0].message.content}</p>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
