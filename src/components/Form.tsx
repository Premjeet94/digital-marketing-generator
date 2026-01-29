"use client";
import { useState } from "react";
import React from "react";

export default function Form({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [form, setForm] = useState({
    businessType: "",
    platform: "Instagram",
    tone: "Professional",
    goal: "",
    productName: "",
  });
  const [loading, setloading] = React.useState(false)

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit(form);
    console.log(form);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm mt-4 border p-6 space-y-4">
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">
            Business Type
          </span>
          <input
            name="businessType"
            placeholder="Business Type"
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-black focus:ring-1 focus:ring-black"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">Platform</span>
          <select
            name="platform"
            onChange={handleChange}
            className="w-full cursor-pointer rounded border p-2"
          >
            <option>Instagram</option>
            <option>Website</option>
            <option>Ad Copy</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">Tone</span>
          <select
            name="tone"
            onChange={handleChange}
            className="w-full cursor-pointer rounded border p-2"
          >
            <option>Professional</option>
            <option>Bold</option>
            <option>Friendly</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">Goal</span>
          <input
            name="goal"
            placeholder="Goal"
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">
            Product Name
          </span>
          <input
            name="productName"
            placeholder="Product Name (optional)"
            onChange={handleChange}
            className="w-full  rounded border p-2"
          />
        </label>
        <button disabled={loading} className="w-full bg-black text-white py-2.5 rounded-md font-medium hover:bg-gray-900 disabled:opacity-50"> {loading ? "Generating..." : "Generate Content"}</button>
      </form>
      
    </div>
  );
}
