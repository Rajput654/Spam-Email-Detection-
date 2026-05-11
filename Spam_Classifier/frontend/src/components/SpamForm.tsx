import { useState } from "react";
import { predictSpam } from "../services/api";
import ResultCard from "./ResultCard";

export default function SpamForm() {
  const [email, setEmail] = useState("");
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!email.trim()) return;

    try {
      setLoading(true);
      const data = await predictSpam(email);
      setPrediction(data.prediction);
      setConfidence(data.confidence);
    } catch (error) {
      alert("Backend error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-black to-purple-900 px-4">

      {/* Background glow blobs */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-10 transition-all duration-500">

        <h1 className="text-4xl font-extrabold text-white text-center mb-8 tracking-wide">
          🚀 AI Spam Classifier
        </h1>

        <textarea
          className="w-full p-5 rounded-2xl bg-black/40 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 resize-none"
          rows={5}
          placeholder="Paste your message here..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handlePredict}
          disabled={loading}
          className="mt-6 w-full py-4 rounded-2xl font-semibold text-white text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "✨ Check Message"}
        </button>

        {prediction && confidence !== null && (
          <ResultCard prediction={prediction} confidence={confidence} />
        )}
      </div>
    </div>
  );
}