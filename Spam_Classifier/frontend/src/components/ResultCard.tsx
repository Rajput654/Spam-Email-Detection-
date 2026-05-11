interface Props {
  prediction: string;
  confidence: number;
}

export default function ResultCard({ prediction, confidence }: Props) {
  const isSpam = prediction === "Spam";
  const percent = (confidence * 100).toFixed(1);

  return (
    <div
      className={`mt-8 rounded-2xl p-6 border ${
        isSpam ? "bg-red-950 border-red-800" : "bg-green-950 border-green-800"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
            isSpam ? "bg-red-900 border border-red-700" : "bg-green-900 border border-green-700"
          }`}
        >
          {isSpam ? "🚨" : "✅"}
        </div>
        <div>
          <p className={`text-xs uppercase tracking-widest font-bold mb-0.5 ${isSpam ? "text-red-500" : "text-green-500"}`}>
            Classification Result
          </p>
          <h2 className={`text-2xl font-black leading-tight ${isSpam ? "text-red-300" : "text-green-300"}`}>
            {isSpam ? "Spam Detected" : "Legitimate Message"}
          </h2>
        </div>
      </div>

      <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
        {isSpam
          ? "Our model flagged this message as spam with high confidence."
          : "This message looks safe and doesn't appear to be spam."}
      </p>

      {/* Divider */}
      <div className={`my-5 h-px ${isSpam ? "bg-red-900" : "bg-green-900"}`} />

      {/* Confidence bar */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
            Confidence
          </span>
          <span className={`text-2xl font-black tabular-nums ${isSpam ? "text-red-300" : "text-green-300"}`}>
            {percent}<span className="text-base font-semibold opacity-60">%</span>
          </span>
        </div>

        <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
          <div
            className={`h-3 rounded-full transition-all duration-700 ease-out ${
              isSpam ? "bg-red-500" : "bg-green-500"
            }`}
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="flex justify-between mt-2 text-xs text-zinc-600 font-medium">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}