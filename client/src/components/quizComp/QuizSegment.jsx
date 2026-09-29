import Container from "../layout/Container";

const QuizSegment = () => {
  return (
    <section>
      <Container
        className="
                        h-full  py-10
                          flex flex-col items-center justify-center gap-2.5
                          "
      >
        <h2>Question 2/ 10</h2>
       <QuizSegment />
      </Container>
    </section>
  );
};

export default QuizSegment;
