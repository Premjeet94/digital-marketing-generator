import React from "react";

export default function Output({ result }: { result: any }) {
  if (!result) {
  return (
    <div className="bg-white rounded-xl border p-6 text-center">
      <p className="text-sm text-gray-500">
        Generated content will appear here
      </p>
    </div>
  );
}

  const [copiedField, setCopiedField] = React.useState<string | null>(null);
  function handleCopy(text: string, field: string) {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  }

  return (
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

      <p className="text-lg font-semibold text-gray-900">{result.headline}</p>
    </div>
  );
}
