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
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl">

        {/* Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">

          {/* Top bar */}
          <div className="bg-zinc-800 px-6 py-3 flex items-center gap-2 border-b border-zinc-700">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-3 text-xs text-zinc-500 font-medium tracking-widest uppercase">
              Spam Classifier
            </span>
          </div>

          {/* Body */}
          <div className="p-8">

            {/* Title */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-lg">
                  🛡️
                </div>
                <h1 className="text-2xl font-black text-white tracking-tight">
                  AI Spam Classifier
                </h1>
              </div>
              <p className="text-zinc-500 text-sm ml-12">
                Paste any message to instantly detect spam
              </p>
            </div>

            {/* Label */}
            <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
              Message
            </label>

            {/* Textarea */}
            <textarea
              className="w-full p-4 rounded-xl bg-zinc-800 text-zinc-100 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200 resize-none text-sm leading-relaxed placeholder-zinc-600"
              rows={5}
              placeholder="Paste your email or message here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Char count */}
            <div className="flex justify-end mt-1 mb-5">
              <span className="text-xs text-zinc-600 tabular-nums">
                {email.length} characters
              </span>
            </div>

            {/* Button */}
            <button
              onClick={handlePredict}
              disabled={loading || !email.trim()}
              className="w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide bg-violet-600 hover:bg-violet-500 active:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-violet-900"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                  </svg>
                  <span>Analyzing…</span>
                </>
              ) : (
                <>
                  <span>Analyze Message</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            {/* Result */}
            {prediction && confidence !== null && (
              <ResultCard prediction={prediction} confidence={confidence} />
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-700 mt-5 tracking-wide">
          Results are probabilistic · Powered by machine learning
        </p>
      </div>
    </div>
  );
}