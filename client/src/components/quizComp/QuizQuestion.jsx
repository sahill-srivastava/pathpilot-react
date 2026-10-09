const QuizQuestion = ({
  data,
  setSelected,
  selectedOption,
  setSelectedOption,
  setAnswer,
}) => {
  const { id, question, options } = data;

  const handleInput = (e) => {
    setSelectedOption(e.target.value);
    const targetAnswerObj = options.find((item) => item.id === e.target.value);
    setAnswer((prevAns) => [...prevAns, targetAnswerObj.career]);
    setSelected(true);
  };

  return (
    <div className="w-full p-2" key={id}>
      <h2 className="text-center mb-10 text-4xl">Question {id}/ 10</h2>

      <h4 className="mb-5 text-2xl font-medium">{question}</h4>

      <div className="flex flex-col gap-3">
        {options.map((o) => {
          const { id: optionId, text } = o;
          return (
            <label
              key={optionId}
              className={`w-full bg-black/20 p-2 rounded-sm flex justify-between cursor-pointer
              ${selectedOption === optionId ? "bg-white text-black" : " border-transparent"}`}
            >
              <span className="w-full text-center">{text}</span>
              <input
                type="radio"
                className="sr-only"
                name="career"
                value={optionId}
                checked={selectedOption === optionId}
                onChange={handleInput}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
