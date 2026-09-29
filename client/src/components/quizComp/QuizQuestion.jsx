import { useState } from "react";

const QuizQuestion = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="w-full">
      <h4 className="mb-5 text-2xl font-medium">What is Frontend Developer?</h4>

      <div className="flex flex-col gap-3">

        <label className="w-full bg-black/20 p-2 rounded-sm flex justify-between cursor-pointer">
          <span>Frontend</span>
          <input
            type="radio"
            name="career"
            value="frontend"
            checked={selected === "frontend"}
            onChange={(e) => setSelected(e.target.value)}
            className="accent-red-700"
          />
        </label>
        <label className="w-full bg-black/20 p-2 rounded-sm flex justify-between cursor-pointer">
          <span>Frontend</span>
          <input
            type="radio"
            name="career"
            value="frontend"
            checked={selected === "frontend"}
            onChange={(e) => setSelected(e.target.value)}
          />
        </label>
        <label className="w-full bg-black/20 p-2 rounded-sm flex justify-between cursor-pointer">
          <span>Frontend</span>
          <input
            type="radio"
            name="career"
            value="frontend"
            checked={selected === "frontend"}
            onChange={(e) => setSelected(e.target.value)}
          />
        </label>
        <label className="w-full bg-black/20 p-2 rounded-sm flex justify-between cursor-pointer">
          <span>Frontend</span>
          <input
            type="radio"
            name="career"
            value="frontend"
            checked={selected === "frontend"}
            onChange={(e) => setSelected(e.target.value)}
          />
        </label>
      
      </div>
    </div>
  );
};

export default QuizQuestion;
