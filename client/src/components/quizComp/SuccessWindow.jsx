import { Trophy } from "lucide-react";

const SuccessWindow = (props) => {
  const {
    setAllowedSection,
    setResult,
    setIsResultAval
  } = props;

  const handleRetake = () => {
    setAllowedSection("initial");
    setResult([]);
    setIsResultAval(false)
  };

  return (
    <div className="w-full min-h-[400px] flex flex-col items-center justify-center ">
      <span className="bg-black/20 mb-10 border-2 border-violet-800 light:text-white rounded-4xl mb-2.5 font-medium px-5 py-2.5 uppercase">
        Quiz Completed
      </span>
      <div className="animate-bounce h-[80px] w-[80px] bg-black/20 rounded-full flex items-center justify-center">
        <Trophy />
      </div>
      <h2 className="mt-2 text-3xl">Congratulations!</h2>
      <p className="mt-2 text-lg text-center">
        You've completed your career discovery quiz.
      </p>
      <button
        onClick={handleRetake}
        className="mt-8 uppercase bg-white text-black rounded px-4 py-2 light:white"
      >
        Retake
      </button>
    </div>
  );
};

export default SuccessWindow;
