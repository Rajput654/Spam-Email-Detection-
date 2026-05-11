import SpamForm from "./components/SpamForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-white mb-8">
        Spam Classifier
      </h1>

      <SpamForm />
    </div>
  );
}