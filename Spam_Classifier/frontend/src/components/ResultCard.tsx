interface Props {
  prediction: string;
  confidence: number;
}

export default function ResultCard({ prediction, confidence }: Props) {
  const isSpam = prediction === "Spam";
  const percent = (confidence * 100).toFixed(1);

  return (
    <div
      className={`mt-10 p-6 rounded-2xl transition-all duration-700 transform animate-fadeIn shadow-xl ${
        isSpam
          ? "bg-red-500/10 border border-red-500/40"
          : "bg-green-500/10 border border-green-500/40"
      }`}
    >
      <h2
        className={`text-2xl font-bold ${
          isSpam ? "text-red-400" : "text-green-400"
        }`}
      >
        {isSpam ? "🚨 Spam Detected" : "✅ Legit Message"}
      </h2>

      <p className="mt-3 text-gray-200 text-lg">
        Confidence: <span className="font-bold">{percent}%</span>
      </p>

      {/* Progress Bar */}
      <div className="mt-5 w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full transition-all duration-1000 ${
            isSpam ? "bg-red-500" : "bg-green-500"
          }`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}