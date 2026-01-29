"use client";
import React from "react";
import Form from "@/components/Form";
import Output from "@/components/Output";
import Header from "@/components/Header";

export default function Home() {
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleGenerate(data: any) {
    try {
      setError(null);
      setLoading(true);

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
      <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 md:px-8 flex items-center justify-center">
        <div className="bg-white rounded-xl border p-6 text-center max-w-md w-full">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <Header />
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
        <div className="w-full md:w-1/2">
          <Form onSubmit={handleGenerate} loading={loading} />
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-xl mt-4 md:mt-4 shadow-sm border p-6 space-y-4">
            <Output result={result} />
          </div>
        </div>
      </div>
    </main>
  );
}
