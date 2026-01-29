"use client";
import React from "react";
import Form from "@/components/Form";
import Output from "@/components/Output";
import Header from "@/components/Header";

export default function Home() {
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState<string | null>(null);

  async function handleGenerate(data: any) {
    try {
      setError(null);

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to generate");
      }

      const json = await res.json();
      setResult(json);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  }
  if (error) {
  return (
    <div className="bg-white rounded-xl border p-6 text-center">
      <p className="text-sm text-red-600">{error}</p>
    </div>
  );
}


  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-6">
        <Header />
      </div>
      <div className="flex gap-10">
        <Form onSubmit={handleGenerate} />
        <div className="bg-white rounded-xl mt-4 shadow-sm border p-6 space-y-4">
          <Output result={result} />
        </div>
      </div>
    </main>
  );
}
