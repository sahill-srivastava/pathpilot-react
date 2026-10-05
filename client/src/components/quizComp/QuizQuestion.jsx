import { useState } from "react";

const QuizQuestion = ({ data }) => {
  const [selected, setSelected] = useState();
  // console.log(selected);
  const { id, question, options } = data;
  // console.log(id)
  return (
    <div className="w-full p-2" key={id}>
      <h2 className="text-center mb-10 text-4xl">Question {id}/ 10</h2>

      <h4 className="mb-5 text-2xl font-medium">{question}</h4>

      <div className="flex flex-col gap-3">
        {options.map((o) => {
          const { id, text } = o;
          return (
            <label
              key={id}
              className={`w-full bg-black/20 p-2 rounded-sm flex justify-between cursor-pointer
              ${selected === id ? "bg-white text-black" : " border-transparent"}`}
            >
              <span className="w-full text-center">{text}</span>
              <input
                type="radio"
                className="sr-only"
                name="career"
                value={id}
                checked={selected === id}
                onChange={(e) => setSelected(e.target.value)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
