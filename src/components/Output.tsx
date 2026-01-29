"use client";
import { useState } from "react";

export default function Output({ result }: { result: any }) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  function handleCopy(text: string, field: string) {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  }

  // Empty state
  if (!result) {
    return (
      <div className="bg-white rounded-xl border p-6 text-center">
        <p className="text-sm text-gray-500">
          Generated content will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border p-6 space-y-6">
      {/* Headline */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">Headline</p>
          <button
            onClick={() => handleCopy(result.headline, "headline")}
            className="text-xs text-gray-600 hover:text-black"
          >
            {copiedField === "headline" ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="text-lg font-semibold text-gray-900">
          {result.headline}
        </p>
      </div>

      {/* Caption */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">Caption</p>
          <button
            onClick={() => handleCopy(result.caption, "caption")}
            className="text-xs text-gray-600 hover:text-black"
          >
            {copiedField === "caption" ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="text-gray-800 whitespace-pre-line">
          {result.caption}
        </p>
      </div>

      {/* CTA */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">Call to Action</p>
          <button
            onClick={() => handleCopy(result.cta, "cta")}
            className="text-xs text-gray-600 hover:text-black"
          >
            {copiedField === "cta" ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="font-medium text-gray-900">{result.cta}</p>
      </div>
    </div>
  );
}
