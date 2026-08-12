import { faqs } from "../../mockdata/home";
import Container from "../layout/Container";

const Faqs = () => {
  return (
    <section className="">
      <Container
        className="
                   min-h-[500px] my-[60px] py-10
                   flex flex-col items-center justify-center
                   "
      >
        <h2 className="mb-10 text-center">Frequently Asked Questions - FAQs</h2>

        <div className="flex flex-col gap-5">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-zinc-800 hover:bg-violet-800 px-5 md:px-10 py-5 rounded-2xl flex flex-col gap-2"
            >
              <h4>{faq.title}</h4>
              <p>{faq.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
