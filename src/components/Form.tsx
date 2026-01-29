"use client";
import { useState } from "react";

export default function Form({
  onSubmit,
  loading,
}: {
  onSubmit: (data: any) => void;
  loading: boolean;
}) {
  const [form, setForm] = useState({
    businessType: "",
    platform: "Instagram",
    tone: "Professional",
    goal: "",
    productName: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm mt-4 border p-6 space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Business Type */}
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">
            Business Type
          </span>
          <input
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            placeholder="e.g. Gym, Cafe, SaaS"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-black focus:ring-1 focus:ring-black"
          />
        </label>

        {/* Platform */}
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">Platform</span>
          <select
            name="platform"
            value={form.platform}
            onChange={handleChange}
            className="w-full cursor-pointer rounded border p-2"
          >
            <option>Instagram</option>
            <option>Website</option>
            <option>Ad Copy</option>
          </select>
        </label>

        {/* Tone */}
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">Tone</span>
          <select
            name="tone"
            value={form.tone}
            onChange={handleChange}
            className="w-full cursor-pointer rounded border p-2"
          >
            <option>Professional</option>
            <option>Bold</option>
            <option>Friendly</option>
          </select>
        </label>

        {/* Goal */}
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">Goal</span>
          <input
            name="goal"
            value={form.goal}
            onChange={handleChange}
            placeholder="e.g. Promote summer sale"
            className="w-full rounded border p-2"
          />
        </label>

        {/* Product Name */}
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">
            Product Name (optional)
          </span>
          <input
            name="productName"
            value={form.productName}
            onChange={handleChange}
            placeholder="e.g. UrbanFlex"
            className="w-full rounded border p-2"
          />
        </label>

        {/* Submit */}
        <button
          disabled={loading}
          className="w-full bg-black text-white py-2.5 rounded-md font-medium hover:bg-gray-900 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Content"}
        </button>
      </form>
    </div>
  );
}
